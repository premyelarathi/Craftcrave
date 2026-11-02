const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const Order = require("./models/Order")
const User = require("./models/User")

const app = express()
app.use(cors())
app.use(express.json())

const demoRoute = [
  { lat: 17.3850, lng: 78.4867 },
  { lat: 17.3860, lng: 78.4880 },
  { lat: 17.3870, lng: 78.4900 },
  { lat: 17.3880, lng: 78.4920 },
  { lat: 17.3890, lng: 78.4940 }
]

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(error => console.log("MongoDB Connection Error:", error.message))

app.get("/", (req, res) => {
  res.send("CraftCrave Backend Running")
})

app.post("/api/login", async (req, res) => {
  try {
    const { fullname, email, phone, address, pincode } = req.body

    if (!fullname || !email || !phone || !address || !pincode) {
      return res.status(400).json({ message: "Please fill all fields" })
    }

    const user = await User.findOneAndUpdate(
      { email: email.toLowerCase().trim() },
      { fullname, email: email.toLowerCase().trim(), phone, address, pincode },
      { new: true, upsert: true, runValidators: true }
    )

    res.status(200).json({
      message: "Login Successful",
      user
    })
  } catch (error) {
    res.status(500).json({
      message: "Login Failed",
      error: error.message
    })
  }
})

app.get("/api/users/:email", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.params.email.toLowerCase().trim()
    })

    if (!user) {
      return res.status(404).json({ message: "User Not Found" })
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({
      message: "Unable to Fetch User",
      error: error.message
    })
  }
})

// Place Order
app.post("/api/orders", async (req, res) => {
  try {
    const customerEmail = req.body.customerEmail?.toLowerCase().trim()

    if (!customerEmail) {
      return res.status(400).json({ message: "User email is required" })
    }

    const newOrder = new Order({
      ...req.body,
      customerEmail,
      tracking: {
        currentLocation: demoRoute[0],
        route: demoRoute,
        estimatedMinutes: 15
      }
    })

    await newOrder.save()

    res.status(201).json({
      message: "Order Placed Successfully",
      order: newOrder
    })
  } catch (error) {
    res.status(500).json({
      message: "Order Failed",
      error: error.message
    })
  }
})

// Get Logged-in User Orders
app.get("/api/orders", async (req, res) => {
  try {
    const email = req.query.email?.toLowerCase().trim()

    if (!email) {
      return res.status(400).json({ message: "User email is required" })
    }

    const orders = await Order.find({
      customerEmail: email
    }).sort({ createdAt: -1 })

    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json({
      message: "Unable to Fetch Orders",
      error: error.message
    })
  }
})

// Get Single Order
app.get("/api/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ message: "Order Not Found" })
    }

    res.status(200).json(order)
  } catch (error) {
    res.status(500).json({
      message: "Unable to Fetch Order",
      error: error.message
    })
  }
})

// Update Order Status
app.put("/api/orders/:id/status", async (req, res) => {
  try {
    const { orderStatus } = req.body

    const allowedStatus = [
      "Pending",
      "Preparing",
      "Picked Up",
      "On the Way",
      "Out for Delivery",
      "Delivered"
    ]

    if (!allowedStatus.includes(orderStatus)) {
      return res.status(400).json({ message: "Invalid Order Status" })
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true, runValidators: true }
    )

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order Not Found" })
    }

    res.status(200).json({
      message: "Order Status Updated Successfully",
      order: updatedOrder
    })
  } catch (error) {
    res.status(500).json({
      message: "Unable to Update Order Status",
      error: error.message
    })
  }
})

// Update Tracking Location
app.put("/api/orders/:id/tracking", async (req, res) => {
  try {
    const { lat, lng, estimatedMinutes } = req.body

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return res.status(400).json({
        message: "Valid latitude and longitude are required"
      })
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        "tracking.currentLocation": { lat, lng },
        "tracking.estimatedMinutes": estimatedMinutes
      },
      { new: true, runValidators: true }
    )

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order Not Found" })
    }

    res.status(200).json({
      message: "Tracking Location Updated",
      tracking: updatedOrder.tracking
    })
  } catch (error) {
    res.status(500).json({
      message: "Unable to Update Tracking",
      error: error.message
    })
  }
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`)
})