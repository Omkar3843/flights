const CrudRepository = require('./crud-repository');

const { Airplane } = require('../models');

class Airplanerepository extends CrudRepository {
    constructor(){
        super(Airplane);
    }
}

module.exports = Airplanerepository;

