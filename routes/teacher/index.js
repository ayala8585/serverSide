const router = require("express").Router();

const addTeacher = require("./createTeacher");

router.post("/",addTeacher);

module.exports = router;
