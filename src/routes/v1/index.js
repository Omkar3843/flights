const express = require('express');


const airplaneRoutes = require('./airplane-routes');

const router = express.Router();
console.log("Inside routes/v1/index");

router.use('/airplanes', airplaneRoutes);



module.exports = router;