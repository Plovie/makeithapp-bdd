const Liana = require('forest-express-sequelize');
const models = require('../models/');
const service = require('../services/status_proposals')


Liana.collection('proposal_places', {
    actions: [{
        name: 'Changer l\'état',
        fields: [{
            field: 'status',
            type: 'Enum',
            enums: service.getAllStatesForTable('proposal_places'),
            isRequired: true
        }],
    }],
    segments: [].concat(service.constructSegmentByStatus('proposal_places')),
});