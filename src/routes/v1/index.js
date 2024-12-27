const express = require('express');

const airplaneRoutes = require('./airplane-routes');
const cityroutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();
// console.log("Inside routes/v1/index");

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityroutes);
router.use('/airport', airportRoutes);
router.use('./flights', flightRoutes);



module.exports = router;