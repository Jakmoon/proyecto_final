    const path = require('path');
    const express = require('express');
    const { Pool } = require('pg');
    require('dotenv').config(); // To load environment variables from .env

    const app = express();
    const port = 3000;

    // Middleware to serve static files from the 'public' folder
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json()); // Middleware to parse JSON requests

    // PostgreSQL Database Pool
    const pool = new Pool({
        user: process.env.POSTGRES_USER || 'jackoon123',
        host: 'db', // "db" is the service name in docker-compose
        database: process.env.POSTGRES_DB || 'tutoring_db',
        password: process.env.POSTGRES_PASSWORD || '4870',
        port: 5432,
    });

    // Test the database connection
    pool.connect((err) => {
        if (err) {
            console.error('Database connection error', err.stack);
        } else {
            console.log('Connected to the database');
        }
    });

    // Basic route to test the server
    app.get('/', (req, res) => {
        res.send('Hello, your server is up and running!');
    });

    // Route to test database query
    app.get('/test-db', async (req, res) => {
        try {
            const result = await pool.query('SELECT NOW()'); // Simple query to check connection
            res.json(result.rows[0]); // Send current timestamp as JSON response
        } catch (err) {
            console.error(err);
            res.status(500).send('Database query error');
        }
    });

    // Sign Up route to create a new user
// Sign Up route to create a new user
app.post('/api/signup', async (req, res) => {
    const { name, lastname, email, password } = req.body;

    try {
        // Insert the new user into the database
        const query = 'INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(query, [name, lastname, email, password]);
        res.json({ message: 'User signed up successfully!', user: result.rows[0] });
    } catch (error) {
        console.error("Error during sign-up:", error); // Log the full error
        if (error.code === '23505') { // PostgreSQL unique_violation error code for duplicate emails
            res.status(400).json({ message: 'Email already exists. Please choose another.' });
        } else {
            res.status(500).json({ message: 'Error signing up user' });
        }
    }
});

    



    // Sign In route to authenticate an existing user
    app.post('/api/signin', async (req, res) => {
        const { email, password } = req.body;

        try {
            // Query the database to find the user with the given username and password
            const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
            const result = await pool.query(query, [email, password]);

            if (result.rows.length > 0) {
                res.json({ message: 'User signed in successfully!', user: result.rows[0] });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        } catch (error) {
            console.error("Error during sign-in:", error);
            res.status(500).json({ message: 'Error signing in user' });
        }
    });

   // Start the server
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
