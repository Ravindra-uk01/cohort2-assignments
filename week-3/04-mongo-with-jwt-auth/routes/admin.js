const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Course, Admin } = require("../db");
const { z } = require("zod");
const { id } = require("zod/v4/locales");
const router = Router();
const jwt = require("jsonwebtoken");

const userValidationSchema = z.object({
  username: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

// Admin Routes
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const parsedData = userValidationSchema.safeParse({ username, password });
    if (!parsedData.success) {
      return res.status(400).json({ error: "user Inputs are not valid" });
    }

    const newUser = await Admin.create(parsedData.data);

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    if (!token) {
      return res.status(500).json({ error: "Failed to generate token" });
    }

    return res
      .status(201)
      .json({ message: "Admin created successfully", user: newUser, token });
  } catch (error) {
    return res.status(400).json({ error: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const parsedData = userValidationSchema.safeParse({ username, password });

    if (!parsedData.success) {
      return res.status(400).json({ error: "user Inputs are not valid" });
    }

    const user = await Admin.findOne({
      username: parsedData.data.username,
      password: parsedData.data.password,
    }); 

    if(!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    if (!token) {
      return res.status(500).json({ error: "Failed to generate token" });
    }

    return res.status(200).json({
      message: "Admin signed in successfully",
      user,
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: "Internal Server Error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, price, image } = req.body;

    if (!title || !description || !price || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Assuming Course is a model imported from db/index.js
    const newCourse = await Course.create({
      title,
      description,
      price,
      image,
      published: true,
    });

    return res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
