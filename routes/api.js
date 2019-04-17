const express = require('express');
const router = express.Router();
const Controller = require("../controllers/Controller");

// post new pack
router
  .route("/pack/create")
  .post(Controller.createPack)

// find all packs
router
  .route("/pack/find")
  .get(Controller.findPacks);

// carrier pick a pack
router
  .route("/pack/pick/:packId")
  .put(Controller.updatePack);

// carrier find all available packs
router
  .route("/pack/find/unpicked")
  .get(Controller.findUnpicked);


module.exports = router;
