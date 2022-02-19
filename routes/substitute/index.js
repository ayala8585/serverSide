const router = require("express").Router();

const addSubstitute = require("./createSubstitute");

router.post("/",addSubstitute);

module.exports = router;
