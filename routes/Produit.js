const express = require("express");

const {
  getproduits,
  deletproduit,
  adproduit,
  updatePproduit,
  chercheproduit,
} = require("../Controlleur/Produit.js");

const router = express.Router();

router.get("/", getproduits);
router.get("/chercher", chercheproduit);
router.post("/", adproduit);
router.delete("/:id", deletproduit);
router.put("/:id", updatePproduit);

module.exports = router;
