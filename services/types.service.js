import {BehaviorSubject} from "rxjs";

const Model = require('../models/types')


class TypesService {

    typesList = [];
    typesObs = new BehaviorSubject([])

    constructor() {
      if(Model) {
          Model.findAll({
              attributes: ['type_fr']
          }).then(res => {
              console.log(res);
          });
      }
    }

}


const instance = new TypesService();

Object.freeze(instance);

export default instance;