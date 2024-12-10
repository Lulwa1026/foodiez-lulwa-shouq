const express = require("express");
const router = express.Router();
const {
  getController,
  newCategaryController,
  deletenewCategaryController,
  updatenewCategaryController,
} = require("./categaries.controllers");
router.get("/", getController);
router.post("/", newCategaryController);
router.delete("/:id", deletenewCategaryController);
router.put("/:id", updatenewCategaryController);

module.exports = router;
