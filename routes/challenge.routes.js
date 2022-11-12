const router = require("express").Router();

const { getFiles, getData } = require("../controllers/challenge.controller");

router.get("/data", getFiles);
router.get("/:id", getData);

module.exports = router;
