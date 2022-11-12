const router = require("express").Router();
const challengeRoutes = require("./challenge.routes");

router.get("/", (req, res, next) => {
  res.status(200).json("all good here");
});

router.use("/files", challengeRoutes);
module.exports = router;
