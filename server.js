
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());


app.use('/api', reviewRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
