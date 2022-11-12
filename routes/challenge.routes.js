const router = require("express").Router();

const { getFiles, getList } = require("../controllers/challenge.controller");

router.get("/data", getFiles);

router.get("/list", getList);

module.exports = router;
