const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Course, Admin } = require("../db");
const {z} = require("zod");
const router = Router();

const userValidationSchema = z.object({
    username: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

// Admin Routes
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Request Body:", req.body);
    const parsedData = userValidationSchema.safeParse({ username, password });
    console.log("Parsed Data in Admin:", parsedData);
    if (!parsedData.success) {
      return res.status(400).json({ error: "user Inputs are not valid" });
    }

    console.log("Parsed Data in Admin :", parsedData.data);
    const newUser = await Admin.create(parsedData.data);
    return res
      .status(201)
      .json({ message: "Admin created successfully", user: newUser });
  } catch (error) {
    return res.status(400).json({ error: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
    try {
       const { username, password } = req.body;
       
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

    return res
      .status(201)
      .json({
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
