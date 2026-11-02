const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
      calories: Number,
      restaurant: String
    }
  ],
  totalItems: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ["COD", "PhonePe"],
    required: true
  },
  orderStatus: {
    type: String,
    default: "Pending"
  },
  tracking: {
    currentLocation: {
      lat: Number,
      lng: Number
    },
    route: [
      {
        lat: Number,
        lng: Number
      }
    ],
    estimatedMinutes: {
      type: Number,
      default: 15
    }
  }
}, { timestamps: true })

const Order = mongoose.model("Order", orderSchema)

module.exports = Order