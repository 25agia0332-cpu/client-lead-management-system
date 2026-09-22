const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Client Lead Management System API is running!"
    });
});

// Test leads
app.get("/api/leads", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Rahul",
            email: "rahul@gmail.com",
            phone: "9876543210",
            source: "Website",
            status: "New",
            notes: "First enquiry"
        }
    ]);
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
