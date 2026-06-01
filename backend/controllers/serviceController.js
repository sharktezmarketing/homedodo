const db = require("../config/db");



// ADD SERVICE WITH IMAGE UPLOAD

exports.addService = (req, res) => {

  const {
    category_id,
    service_name,
    description,
    price,
  } = req.body;

  // uploaded image filename
  const image = req.file
    ? req.file.filename
    : null;

  const sql =
    `INSERT INTO services
    (
      category_id,
      service_name,
      description,
      price,
      image
    )
    VALUES (?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [
      category_id,
      service_name,
      description,
      price,
      image,
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Service added",
      });

    }
  );
};



// GET ALL SERVICES

exports.getServices = (req, res) => {

  const sql =
    `SELECT services.*, categories.name AS category_name
     FROM services
     JOIN categories
     ON services.category_id = categories.id`;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);

  });
};



// GET SERVICES BY CATEGORY

exports.getServicesByCategory = (req, res) => {

  const { categoryId } = req.params;

  const sql =
    `SELECT * FROM services
     WHERE category_id = ?`;

  db.query(
    sql,
    [categoryId],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(result);

    }
  );
};



// GET SINGLE SERVICE

exports.getSingleService = (req, res) => {

  const { id } = req.params;

  const sql =
    `SELECT services.*, categories.name AS category_name
     FROM services
     JOIN categories
     ON services.category_id = categories.id
     WHERE services.id = ?`;

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result[0]);

  });
};