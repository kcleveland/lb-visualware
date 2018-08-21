


export class Voip {
  "recordid";
  "testid";
  "detaillink";
  "sid";
  "time";
  "ip";
  "jitter";
  "djitter";
  "maxjitter";
  "dmaxjitter";
  "loss";
  "dloss";
  "uorder";
  "dorder";
  "rttmin";
  "rttavg";
  "rttmax";
  "discards";
  "mos";
  "dmos";
  "reg";
  "invite";
  "bye";
  "sipalgfw";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Voip`.
   */
  static getModelName() {
    return "Voip";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Voip for dynamic purposes.
  **/
  static factory(data) {
    return new Voip(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  static getModelDefinition() {
    return {
      name: 'Voip',
      plural: 'Voips',
      path: 'Voips',
      properties: {
        "recordid": {
          name: 'recordid',
          type: 'number'
        },
        "testid": {
          name: 'testid',
          type: 'number'
        },
        "detaillink": {
          name: 'detaillink',
          type: 'string'
        },
        "sid": {
          name: 'sid',
          type: 'string'
        },
        "time": {
          name: 'time',
          type: 'Date'
        },
        "ip": {
          name: 'ip',
          type: 'string'
        },
        "jitter": {
          name: 'jitter',
          type: 'number'
        },
        "djitter": {
          name: 'djitter',
          type: 'number'
        },
        "maxjitter": {
          name: 'maxjitter',
          type: 'number'
        },
        "dmaxjitter": {
          name: 'dmaxjitter',
          type: 'number'
        },
        "loss": {
          name: 'loss',
          type: 'number'
        },
        "dloss": {
          name: 'dloss',
          type: 'number'
        },
        "uorder": {
          name: 'uorder',
          type: 'number'
        },
        "dorder": {
          name: 'dorder',
          type: 'number'
        },
        "rttmin": {
          name: 'rttmin',
          type: 'number'
        },
        "rttavg": {
          name: 'rttavg',
          type: 'number'
        },
        "rttmax": {
          name: 'rttmax',
          type: 'number'
        },
        "discards": {
          name: 'discards',
          type: 'number'
        },
        "mos": {
          name: 'mos',
          type: 'number'
        },
        "dmos": {
          name: 'dmos',
          type: 'number'
        },
        "reg": {
          name: 'reg',
          type: 'number'
        },
        "invite": {
          name: 'invite',
          type: 'number'
        },
        "bye": {
          name: 'bye',
          type: 'number'
        },
        "sipalgfw": {
          name: 'sipalgfw',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
