const { where } = require('sequelize');
const { Logger } = require('../config/logger-config');
const { model } = require('../models/index');

class Crudrepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        const response = this.model.create(data);
        return response;
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error('something went wrong in crud repo: destroy');
            throw error;
        }
    }

    async get(id){
        try {
            const response = await this.model.findByPK(id);
            return response;
        } catch (error) {
            Logger.error('something went wrong at crud repo: get');
            throw error;
        }
    }

    async getall(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('something went wrong at crud repo: getall');
            throw error;
        }
    }

    async update(id, data){
        try {
            const response = await this.model.update(data, {
                where:{
                    id: id
                }
            });
        } catch (error) {
            Logger.error('something went wrong at crud repo: update');
            throw error;
        }
    }
}

module.exports = Crudrepository;