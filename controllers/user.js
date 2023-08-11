const Expense = require("../models/expense");

exports.postExpense = (req, res) => {
  const { amount, name, type } = req.body;
  Expense.create({
    amount: amount,
    name: name,
    type: type,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getExpense = (req, res) => {
  Expense.findAll().then((data) => {
    res.json(data);
  });
};

exports.deleteExpense = (req, res) => {
  let id = req.params.id;
  Expense.destroy({ where: { id: id } });
};
