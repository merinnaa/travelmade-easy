const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db');


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.get("/users", async (res,req) => {
//     try {
//         const result = await pool.query("SELECT * FROM users");
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err.message);
//         req.status(500).send("server Error")
//     }
//     });

    // Test Route to Check Database Connection
app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()"); // Query the current time
        res.json({ message: "Connected to the database!", time: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Database connection failed!");
    }
});







