const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/', 
    AirplaneMiddlewares.validcreateRequest,
    AirplaneController.createairplane
);

router.get('/', AirplaneController.getairplanes);

router.get('/:id', AirplaneController.getAirplane);

router.delete('/:id', 
    AirplaneController.destroyAirplane
);



module.exports = router;