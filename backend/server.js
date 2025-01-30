const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
require('dotenv').config();
const colors = require('colors');

const app = express();

connectDB().catch(err => {
    console.log("Error: Failed to connect to MongoDB. ".red, err);
    process.exit(1);
});



app.use(express.json({ extended: false }));
app.use(cors());


const PORT = process.env.PORT || 5001;


const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`.green);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log("Server closed gracefully.".blue);
        process.exit(0);
    });
});