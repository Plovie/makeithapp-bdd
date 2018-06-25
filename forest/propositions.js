const Liana = require('forest-express-sequelize');
const models = require('../models/');
const service = require('../services/propositions')



Liana.collection('propositions', {
    actions: [{
        name: 'Changer l\'état',
        fields: [{
            field: 'state',
            type: 'Enum',
            enums: service.getAllStates(),
            isRequired: true
        }]
    },{
        name:'ajouter un lieux',
        fields: [{
            field: 'place',
            reference: 'places.id',
            isRequired: true
        }]
    }],
    segments: [].concat(service.constructSegmentByStatus()),
    fields: [{
        field: 'lieux',
        type: ['String'],
        reference: 'places.id',
    }]
});

