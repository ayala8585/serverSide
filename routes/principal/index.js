const router = require("express").Router();

const createPrincipal = require("./createPrincipal");

router.post("/", createPrincipal);

module.exports = router;
