const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');
const { StatusCodes } = require('http-status-codes');


function validcreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = 'something went wrong at creating airplaane';
        ErrorResponse.error  = new AppError(['Model Number not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validcreateRequest
}