const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { z } = require("zod");
const { User, Course, PurchasedCourse } = require("../db");
const jwt = require("jsonwebtoken");

const userValidationSchema = z.object({
  username: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

// User Routes
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const parsedData = userValidationSchema.safeParse({ username, password });
    if (!parsedData.success) {
      return res.status(400).json({ error: "user Inputs are not valid" });
    }

    const newUser = await User.create(parsedData.data);

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    if (!token) {
      return res.status(500).json({ error: "Failed to generate token" });
    }

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const parsedData = userValidationSchema.safeParse({ username, password });

    if (!parsedData.success) {
      return res.status(400).json({ error: "user Inputs are not valid" });
    }

    const user = await User.findOne({
      username: parsedData.data.username,
      password: parsedData.data.password,
    });

    if (!user) {
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

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const userId = req.user._id;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const purchasedCourse = await PurchasedCourse.create({
      userId,
      courseId,
      purchaseDate: new Date(),
    });

    return res
      .status(201)
      .json({ message: "Course purchased successfully", purchasedCourse });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;

    const purchasedCourses = await PurchasedCourse.find({ userId });
    return res.status(200).json(purchasedCourses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
