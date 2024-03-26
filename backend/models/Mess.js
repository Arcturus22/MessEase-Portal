const mongoose = require("mongoose");

// Schema
const messSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hostel: {
    type: String,
    required: true,
  },
  price: {
    breakfast: {
      type: Number,
      required: true,
    },
    lunch: {
      type: Number,
      required: true,
    },
    dinner: {
      type: Number,
      required: true,
    },
  },
  totalStudents: {
    type: Number,
    required: true,
  },
  manager: {
    type: mongoose.Types.ObjectId,
    ref: "Staff",
    required: true,
  },
  staffs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
  ]
});

const messModel = mongoose.model("Mess", messSchema);
module.exports = messModel;
