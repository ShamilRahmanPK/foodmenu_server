require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');

const dnServer = express();

dnServer.use(cors());
dnServer.use(express.json());

// Root Route should come before using router
dnServer.get('/', (req, res) => {
    res.status(200).send(`<h1>Deepnetsoft Server is running</h1>`);
});

dnServer.use(router);

const PORT = process.env.PORT || 5000;

dnServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
