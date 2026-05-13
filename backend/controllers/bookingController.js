const db = require("../config/db");

exports.createBooking = (req, res) => {

  console.log(req.body);

  const {
    user_id,
    service_name,
    booking_date,
    address,
  } = req.body;

  if (
    !user_id ||
    !service_name ||
    !booking_date ||
    !address
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO bookings (user_id, service_name, booking_date, address) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [user_id, service_name, booking_date, address],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Booking created successfully",
      });
    }
  );
};

exports.getBookings = (req, res) => {

  const sql = "SELECT * FROM bookings";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};

exports.updateBookingStatus = (req, res) => {

  const { id } = req.params;

  const { status } = req.body;

  const sql =
    "UPDATE bookings SET status = ? WHERE id = ?";

  db.query(sql, [status, id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({
      message: "Booking status updated",
    });
  });
};