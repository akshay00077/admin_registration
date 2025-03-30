import express from "express";
import mysql from "mysql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "auth_system",
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Register API
app.post("/register", async (req, res) => {
    const { firstname, lastname, email, password, role = "user" } = req.body;

    try {
        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Ensure the column names match exactly
        const query = "INSERT INTO users (firstname, lastname, email, password, role) VALUES (?, ?, ?, ?, ?)";
        db.query(query, [firstname, lastname, email, hashedPassword, role], (err, result) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ message: "User registration s" });
            }
            res.json({ message: "User registered successfully" });
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



// Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign({ id: user.id, role: user.role }, "your_secret_key", { expiresIn: "1h" });

        res.json({ token });
    });
});

app.get("/user-role", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    jwt.verify(token, "your_secret_key", (err, decoded) => {
        if (err) {
            console.error("JWT Error:", err);
            return res.status(401).json({ message: "Invalid token" });
        }

        const query = "SELECT role FROM users WHERE id = ?";
        db.query(query, [decoded.id], (dbErr, results) => {
            if (dbErr || results.length === 0) {
                return res.status(500).json({ message: "Error fetching role" });
            }
            res.json({ role: results[0].role });
        });
    });
});



// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
