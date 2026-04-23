const router = require("express").Router();
const ctrl = require("../controllers/courseController");
const auth = require("../middleware/authMiddleware");

router.post("/create", auth, ctrl.createCourse);
router.get("/", auth, ctrl.getCourses);
router.post("/enroll/:id", auth, ctrl.enrollCourse);

module.exports = router;