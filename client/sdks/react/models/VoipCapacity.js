


export class VoipCapacity {
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
  "rttmax";
  "rttavg";
  "discards";
  "mos";
  "reg";
  "invite";
  "bye";
  "sipalgfw";
  "time_capacity";
  "timeint_capacity";
  "dcapacity";
  "ucapacity";
  "dpackets";
  "upackets";
  "dmaxbandwidth";
  "umaxbandwidth";
  "qos";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VoipCapacity`.
   */
  static getModelName() {
    return "VoipCapacity";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VoipCapacity for dynamic purposes.
  **/
  static factory(data) {
    return new VoipCapacity(data);
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
      name: 'VoipCapacity',
      plural: 'VoipCapacities',
      path: 'VoipCapacities',
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
        "rttmax": {
          name: 'rttmax',
          type: 'number'
        },
        "rttavg": {
          name: 'rttavg',
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
        "time_capacity": {
          name: 'time_capacity',
          type: 'string'
        },
        "timeint_capacity": {
          name: 'timeint_capacity',
          type: 'number'
        },
        "dcapacity": {
          name: 'dcapacity',
          type: 'number'
        },
        "ucapacity": {
          name: 'ucapacity',
          type: 'number'
        },
        "dpackets": {
          name: 'dpackets',
          type: 'number'
        },
        "upackets": {
          name: 'upackets',
          type: 'number'
        },
        "dmaxbandwidth": {
          name: 'dmaxbandwidth',
          type: 'number'
        },
        "umaxbandwidth": {
          name: 'umaxbandwidth',
          type: 'number'
        },
        "qos": {
          name: 'qos',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
