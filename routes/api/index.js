const router = require("express").Router();
const packRoutes = require("./pack");

// pack routes
router.use("/pack", packRoutes);

module.exports = router;
