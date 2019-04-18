const express = require('express');
const router = express.Router();
const Controller = require("../controllers/api-controller");

// post new pack
router
  .route("/pack/create")
  .post(Controller.createPack);

// find user packs
router
  .route("/pack/find/:userId")
  .get(Controller.findUserPacks);

// find all packs
router
  .route("/pack/findall")
  .get(Controller.findAllPacks);

// carrier pick a pack
router
  .route("/pack/carrier/:userId/:packId")
  .put(Controller.updateCarrier);

// carrier delivered a pack
router
  .route("/pack/delivered/:packId")
  .put(Controller.updateDelivered);

// carrier find all available packs
router
  .route("/pack/findunpicked")
  .get(Controller.findUnpicked);


module.exports = router;
