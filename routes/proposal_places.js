const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
const service = require('../services/status_proposals')

router.post('/actions/changer-l-etat', Liana.ensureAuthenticated,
    (req, res) => {
        let id = req.body.data.attributes.ids[0];
        let state = req.body.data.attributes.values.status;
        return service.updateStatusFromPlace(id, state)
            .then(() => {
                res.send({success: 'Le changement a bien été pris en compte'});
            }).catch(e => {
                console.log(message);
                res.status(400).send({error: message})
            });
    });

module.exports = router;