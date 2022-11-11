const router = require("express").Router();

const { getFiles,getData } = require("../controllers/challenge.controller");

router.get("/", getFiles);
router.get("/data", getData),

module.exports = router;
