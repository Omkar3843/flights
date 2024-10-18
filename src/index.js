const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
const PORT = 3010;

// Doing body-parser to handle json and uelencoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Successfully started the server on PORT : ${PORT}`);
});