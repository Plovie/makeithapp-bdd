const models = require('../models');


class PropositionService {

    constructor() {
        this.status = new Map();
        this.status.set('proposals', ['En attente', 'En cours', 'Refusée', 'Acceptée']);
        this.status.set('proposal_places', ['A proposer', 'Proposé', 'Refusé', 'Accepté']);
        this.statusEquivalence = new Map();
        this.statusEquivalence.set('A proposer', {proposalStatus: 'En attente', toDo: 'updateEachTable'});
        this.statusEquivalence.set('Proposé', {proposalStatus: 'En cours', toDo: 'checkAllOther', invalidCheck: {status:['Proposé','Refusé'],proposal:'En attente'}});
        this.statusEquivalence.set('Refusé', {proposalStatus: 'En attente', toDo: 'checkAllOther' , invalidCheck: {status:['A proposer', 'Refusé'],proposal:'En cours'}});
        this.statusEquivalence.set('Accepté', {proposalStatus: 'Acceptée', toDo: 'finishAllOther'});
    }

    getAllStatesForTable(tableName) {
        return this.status.get(tableName)
    }

    constructSegmentByStatus(tableName) {
        return this.status.get(tableName).map((state) => {
            return {
                name: state,
                where: () => {
                    return this.getByStatus(state, tableName)
                }
            }
        })
    }

    getByStatus(state, tableName) {
        return models.sequelize.query(`
        SELECT ${tableName}.id
        FROM ${tableName}
        WHERE status = '${state}'
      `, {type: models.sequelize.QueryTypes.SELECT})
            .then((proposalsId) => {
                const idsArray = proposalsId.map(proposition => proposition.id);
                return {id: {in: idsArray}};
            });
    }

    updateStatusFromPlace(id, status) {
        const proposalStatus = this.statusEquivalence.get(status).proposalStatus;
        const toDo = this.statusEquivalence.get(status).toDo;
        const invalidCheck = this.statusEquivalence.get(status).invalidCheck;

        const promiseArray = [this.updateStatusInPlace(id, status)];
        if (toDo === 'finishAllOther') {
            promiseArray.push(this.finishAllOther(id, status, proposalStatus))
        } else if (toDo === 'updateEachTable') {
            promiseArray.push(this.updateEchTable(id, status,proposalStatus))
        } else if (toDo === 'updateOne') {
            promiseArray.push(this.updateStatusInPlace(id, status))
        } else if (toDo === 'checkAllOther') {
            promiseArray.push(this.checkAllOther(id, status,proposalStatus, invalidCheck))
        }

        return Promise.all(promiseArray)

    }

    updateEchTable(id, status, proposalStatus) {
        return this.getroposalIdFromPlaceId(id)
            .then((proposalId) => {
                return this.updateStatusInProposal(proposalId, proposalStatus)

            });
    }

    updateStatusInPlace(id, status) {
        return models.proposal_places
            .update({status: status}, {where: {id: id}})
    }

    updateStatusInProposal(proposalId, proposalStatus) {
        return models.proposals
            .update({status: proposalStatus}, {where: {id: proposalId}})
    }

    finishAllOther(placeId, status, proposalStatus) {
        return this.getAllPlaceForOneProposalIdFromPlaceId(placeId)
            .then((places) => {

                const promiseArray = [
                    this.updateStatusInPlace(placeId, status),
                    this.updateStatusInProposal(places[0].proposal_id, proposalStatus)];

                places.map((place) => {
                    if (place.id != placeId && place.status !== 'Refusé') {
                        console.log(place.id, placeId, place.status);
                        promiseArray.push(this.updateStatusInPlace(place.id, 'Refusé'))
                    }
                })
                return Promise.all(promiseArray);
            })
    }

    checkAllOther(placeId, status,proposalStatus, invalidCheck) {
       return this.getAllPlaceForOneProposalIdFromPlaceId(placeId)
            .then((places) => {
                const promiseArray = [this.updateStatusInPlace(placeId, status)];
                let alreeadyPush = false;
                places.map((place) => {
                    if (place.id !== placeId && !invalidCheck.status.includes(place.status) ) {
                        promiseArray.push(this.updateStatusInProposal(place.proposal_id, invalidCheck.proposal));
                        alreeadyPush = true;
                    }
                });
                if(!alreeadyPush) {
                    this.updateStatusInProposal(places[0].proposal_id, proposalStatus)
                }
                return Promise.all(promiseArray);
            })
    }

    getroposalIdFromPlaceId(placeId) {
        return models.proposal_places
            .findAll({where: {id: placeId}})
            .then((places) => {
                const proposalId = places[0].proposal_id
                return models.proposals.findAll({where: {id: proposalId}})
            }).then((proposals) =>  {
                const proposal = proposals[0]
                if(proposal.status ==='Acceptée') {
                    return Promise.reject('Vous ne pouvez plus modifier le status d\'une proposition si elle est Acceptée');
                }
                return proposal.id;
            })
    }



    getAllPlaceForOneProposalIdFromPlaceId(placeId) {
        return this.getroposalIdFromPlaceId(placeId)
            .then((proposalId) => {
                return models.proposal_places.findAll({where: {proposal_id: proposalId}})
            })
    }




}


const instance = new PropositionService();

Object.freeze(instance);

module.exports = instance;