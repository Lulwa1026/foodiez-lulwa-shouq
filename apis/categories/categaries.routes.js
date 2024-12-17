const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

const {
  getController,
  newCategaryController,
  deletenewCategaryController,
  updatenewCategaryController,
} = require("./categaries.controllers");
router.get("/", getController);
router.post("/", upload.single("image"), newCategaryController);
router.delete("/:categariestId", deletenewCategaryController);
router.put(
  "/:categariestId",
  upload.single("image"),
  updatenewCategaryController
);

module.exports = router;
