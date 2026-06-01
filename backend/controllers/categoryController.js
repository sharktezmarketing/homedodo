const db = require("../config/db");

exports.addCategory = (req, res) => {

  const { name, image } = req.body;

  const sql =
    "INSERT INTO categories (name, image) VALUES (?, ?)";

  db.query(sql, [name, image], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Category added",
    });

  });
};

exports.getCategories = (req, res) => {

  const sql = "SELECT * FROM categories";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);

  });
};