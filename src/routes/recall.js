const express = require("express");
const router = express.Router();
const { parseAndValidateDate } = require("../utils/dateUtils");
const readCSV = require("../utils/csvUtils");

router.get("/", async (req, res, next) => {
  try {
    const from_ts = req.query.from_ts
      ? parseAndValidateDate(req.query.from_ts)
      : null;
    const to_ts = req.query.to_ts
      ? parseAndValidateDate(req.query.to_ts)
      : null;

    const data = await readCSV("./src/data/recall_data.csv", from_ts, to_ts);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
