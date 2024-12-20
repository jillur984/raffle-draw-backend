const router = require("express").Router();

router.get("/", (_req, res) => {
  res.send("Hello world");
});

router.use("/api/v1/tickets", require("../routes/ticket.routes.js"));

router.get("/health", (_req, res) => {
  res.send("OK");
});

module.exports = router;
