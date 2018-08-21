


export class Capacity {
  "recordid";
  "testid";
  "detaillink";
  "sid";
  "time";
  "ip";
  "isp";
  "dcapacity";
  "ucapacity";
  "dpackets";
  "upackets";
  "packetsize";
  "qos";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Capacity`.
   */
  static getModelName() {
    return "Capacity";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Capacity for dynamic purposes.
  **/
  static factory(data) {
    return new Capacity(data);
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
      name: 'Capacity',
      plural: 'Capacities',
      path: 'Capacities',
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
        "isp": {
          name: 'isp',
          type: 'string'
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
        "packetsize": {
          name: 'packetsize',
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
