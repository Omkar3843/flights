const CrudRepository = require('./crud-repository');

const { Airport } = require('../models');

class Airportrepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = Airportrepository;