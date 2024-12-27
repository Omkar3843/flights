const { AirportService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */

async function createairport(req, res){
    try {
        const response = await AirportService.createairport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        // throw error;
        return res
                .status(error.statusCode);
                // .json(ErrorResponse);
    }
}

async function getAirports(req,res){
    try {
        const response = await AirportService.getAirports();
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode);
                // .json(ErrorResponse);
    }
}

/**
 * POST : /airplanes/:id 
 * req-body {}
*/

async function getAirport (req,res){
    try {
        const response = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = response;
            return res
                    .status(StatusCodes.OK)
                    .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


module.exports = {
    createairport,
    getAirports,
    getAirport,
    destroyAirport
}