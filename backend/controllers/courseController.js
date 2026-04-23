const Course = require("../models/Course");
const User = require("../models/User");

// Create Course
exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

// Get all courses
exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

// Enroll
exports.enrollCourse = async (req, res) => {
  const user = await User.findById(req.user);

  user.enrolledCourses.push(req.params.id);
  await user.save();

  res.json({ msg: "Enrolled" });
};