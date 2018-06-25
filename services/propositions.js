const models = require('../models/');


class PropositionService {

    constructor() {
        this.stateArray = ['En attente', 'En cours', 'Refusée', 'Acceptée']
    }

    getAllStates() {
        return this.stateArray
    }

    constructSegmentByStatus() {
        return this.stateArray.map((state) => {
            return {
                name: state,
                where: () => {
                    return this.getByStatus(state)
                }
            }
        })
    }

    getByStatus(state) {
        return models.sequelize.query(`
        SELECT propositions.id
        FROM propositions
        WHERE status = '${state}'
      `, {type: models.sequelize.QueryTypes.SELECT})
            .then((propositionsId) => {
                const idsArray = propositionsId.map(proposition => proposition.id)
                return {id: {in: idsArray}};
            });
    }

    deletePlace(id) {

    }
}


const instance = new PropositionService();

Object.freeze(instance);

module.exports = instance;