const express = require('express');

const { AirportController } = require('../../controllers');
// const { AirplaneMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/', 
    AirportController.createairport
);

router.get('/', AirportController.getAirports);

router.get('/:id', AirportController.getAirport);

router.delete('/:id', 
    AirportController.destroyAirport
);



module.exports = router;