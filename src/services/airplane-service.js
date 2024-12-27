const { AirplaneRepository } = require('../repositories');
const  AppError  = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');


const airplanerepo = new AirplaneRepository();

async function createAirplane(data){
    try {
        const response = await airplanerepo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getAirplanes(){
    try {
        const response = await airplanerepo.getall();
        return response;
    } catch (error) {
        throw new AppError('Cannot fetch service data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
        throw error;
    }
}

async function getAirplane(id){
    try {
        const response = await airplanerepo.get(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch service data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);    
    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplanerepo.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}