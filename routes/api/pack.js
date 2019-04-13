
const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/pack/create"
router
  .route("/create")
  .post(Controller.createPack)

// Matches with "/api/pack/find"
router
  .route("/find")
  .get(Controller.findPacks);

module.exports = router;
