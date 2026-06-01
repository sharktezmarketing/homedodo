const express = require("express");

const router = express.Router();

const {
  addService,
  getServices,
  getServicesByCategory,
  getSingleService
} = require("../controllers/serviceController");

const upload =
require("../middleware/upload");

router.post(
  "/add",
  upload.single("image"),
  addService
);

router.get("/", getServices);

router.get(
  "/category/:categoryId",
  getServicesByCategory
);
router.get("/:id", getSingleService);

module.exports = router;