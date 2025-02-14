const router = require("express").Router();
const db = require("../db/db");

// router.use("/api/v1/tickets") dewa ase tai tickets likha ta kete dilew hobe route theke

router.get("/t/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  const ticket = db.findById(ticketId);
  res.status(200).json(ticket);
});
router.patch("/t/:ticketId", () => {
  const ticketId = req.params.ticketId;
  const updatedTicket = db.updateById(ticketId, req.body);
  res.status(200).json(updatedTicket);
});
router.delete("/t/:ticketId", () => {
  const ticketId = req.params.ticketId;
  db.deleteById(ticketId);
  res.status(203).send();
});

router.get("/u/:username", () => {
  const username = req.params.username;
  const ticket = db.findByUsername(username);
  res.status(200).json(ticket);
});
router.patch("/u/:username", () => {});
router.delete("/u/:username", () => {});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = db.create(username, price);
  res.status(201).json({ Message: "Ticket Created Succesfully", ticket });
});
router.get("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res.status(201).json({ Message: "Bulk Created Succesfully", tickets });
});
router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3;
  const winners = db.draw(winnerCount);
  res.status(200).json(winners);
});
router.get("", (_req, res) => {
  const tickets = db.find();
  res.status(200).json(tickets);
});

module.exports = router;
