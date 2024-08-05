const express = require("express");
const { getAll, getById, addDoc } = require("../handlers/handler");
const { User } = require("../models/userModel");
const router = express.Router();

router.get("/getAll", async (req, res) => {
  let users = await getAll(User);
  res.send(users);
});

router.get("/getById/:id", async (req, res) => {
  let user = await getById(User, req.params.id);
  res.send(user);
});

router.post("/register", async (req, res) => {
  let user = await addDoc(User, req.body);
  res.send(user);
});

router.post("/login", async (req, res) => {});

module.exports = router;
