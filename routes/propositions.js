const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
const models = require('../models');


router.post('/actions/changer-l-etat', Liana.ensureAuthenticated,
    (req, res) => {
        let id = req.body.data.attributes.ids[0];
        let state = req.body.data.attributes.values.state;
        return models.propositions
            .update({status: state}, {where: {id: id}})
            .then(() => {
                res.send({success: 'Le changement a bien été pris en compte'});
            });
    });

router.post('/actions/ajouter-un-lieux', Liana.ensureAuthenticated,
    (req, res) => {
        let proposition_id = req.body.data.attributes.ids[0];
        let place_id = req.body.data.attributes.values.place;
        return models.JNT_proposition_place
            .create({proposition_id:proposition_id, place_id:place_id})
            .then(() => {
                res.send({success: 'Le changement a bien été pris en compte'});
            });
    });

router.delete('/propositions/:id/relationships/lieux',
    Liana.ensureAuthenticated, (req, res, next) => {


        let queryType = models.sequelize.QueryTypes.DELETE;

console.log(req.body.data);

        let dataQuery = `
      SELECT places.*
      FROM places
      JOIN JNT_proposition_place ON JNT_proposition_place.place_id = places.id
      JOIN propositions ON JNT_proposition_place.proposition_id = propositions.id
      WHERE proposition_id = ${req.params.id}
      LIMIT ${limit}
      OFFSET ${offset}
    `;
        //
        // return Promise
        //     .all([
        //         models.sequelize.query(dataQuery, {type: queryType})
        //     ])
        //     .then((places) => {
        //         res.send('ok');
        //     })
        //     .catch((err) => next(err));
    });


router.get('/propositions/:id/relationships/lieux',
    Liana.ensureAuthenticated, (req, res, next) => {
        let limit = parseInt(req.query.page.size) || 10;
        let offset = (parseInt(req.query.page.number) - 1) * limit;

        let queryType = models.sequelize.QueryTypes.SELECT;

        let countQuery = `
      SELECT COUNT(*)
      FROM places
      JOIN JNT_proposition_place ON JNT_proposition_place.place_id = places.id
      JOIN propositions ON JNT_proposition_place.proposition_id = propositions.id
      WHERE proposition_id = ${req.params.id}
    `;

        let dataQuery = `
      SELECT places.*
      FROM places
      JOIN JNT_proposition_place ON JNT_proposition_place.place_id = places.id
      JOIN propositions ON JNT_proposition_place.proposition_id = propositions.id
      WHERE proposition_id = ${req.params.id}
      LIMIT ${limit}
      OFFSET ${offset}
    `;

        return Promise
            .all([
                models.sequelize.query(countQuery, { type: queryType }),
                models.sequelize.query(dataQuery, {type: queryType})
            ])
            .then((res) => {
                const [count,places] = res;
                return new Liana.ResourceSerializer(Liana, models.places, places, null, {}, {
                    count: count[0].count
                }).perform();
            })
            .then((places) => {
                res.send(places);
            })
            .catch((err) => next(err));
    });

module.exports = router;
