const { AirportRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');

const airportrepository = new AirportRepository();

async function createairport(data){
    try {
        const response = await airportrepository.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getAirports(){
    try {
        const response = await airportrepository.getAll();
        return response;
    } catch (error) {
        // throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
        throw error;
    }
}

async function getAirport(id){
    try {
        const response = await airportrepository.get(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);    
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportrepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createairport,
    getAirports,
    getAirport,
    destroyAirport
}