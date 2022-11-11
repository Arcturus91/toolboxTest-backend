const router = require("express").Router();

const { getFiles } = require("../controllers/challenge.controller");

router.get("/data", getFiles);

module.exports = router;
