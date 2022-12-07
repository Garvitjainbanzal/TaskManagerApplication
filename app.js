const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();
const port = 6969;

//middleware
app.use(express.static('./public'))
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.DATABASE_URL);
        app.listen(process.env.port | port, () => {
            console.log(`Server is listening on $(port)...`);
        })
    } catch (error) {
        console.log(error)
    }
}

start();

