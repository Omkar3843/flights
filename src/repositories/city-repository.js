const { city } = require('../models');
const CrudRepository = require('./crud-repository');

class Cityrepository extends CrudRepository {
    constructor(){
        super(city);
    }
}

module.exports = Cityrepository;