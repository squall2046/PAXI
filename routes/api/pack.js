
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

// Matches with "/api/pack/pick/:packId"
router
  .route("/pick/:packId")
  .put(Controller.updatePack);

// Matches with "/api/pack/find/unpicked"
router
  .route("/find/unpicked")
  .get(Controller.findUnpicked);

module.exports = router;
