const routes = require('../controllers/user');

const express = require('express');

const router = express.Router();

router.post("/", routes.postExpense);

router.get("/", routes.getExpense);

router.delete("/:id", routes.deleteExpense);

module.exports = router;