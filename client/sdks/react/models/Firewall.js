


export class Firewall {
  "recordid";
  "testid";
  "avgresponse";
  "minresponse";
  "maxresponse";
  "ports";
  "protocol";
  "popen";
  "pblock";
  "tpopen";
  "tpblock";
  "time";
  "pblocklist";
  "detaillink";
  "sid";
  "ip";
  "isp";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Firewall`.
   */
  static getModelName() {
    return "Firewall";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Firewall for dynamic purposes.
  **/
  static factory(data) {
    return new Firewall(data);
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
      name: 'Firewall',
      plural: 'Firewalls',
      path: 'Firewalls',
      properties: {
        "recordid": {
          name: 'recordid',
          type: 'number'
        },
        "testid": {
          name: 'testid',
          type: 'number'
        },
        "avgresponse": {
          name: 'avgresponse',
          type: 'number'
        },
        "minresponse": {
          name: 'minresponse',
          type: 'number'
        },
        "maxresponse": {
          name: 'maxresponse',
          type: 'number'
        },
        "ports": {
          name: 'ports',
          type: 'string'
        },
        "protocol": {
          name: 'protocol',
          type: 'string'
        },
        "popen": {
          name: 'popen',
          type: 'number'
        },
        "pblock": {
          name: 'pblock',
          type: 'number'
        },
        "tpopen": {
          name: 'tpopen',
          type: 'number'
        },
        "tpblock": {
          name: 'tpblock',
          type: 'number'
        },
        "time": {
          name: 'time',
          type: 'Date'
        },
        "pblocklist": {
          name: 'pblocklist',
          type: 'string'
        },
        "detaillink": {
          name: 'detaillink',
          type: 'string'
        },
        "sid": {
          name: 'sid',
          type: 'string'
        },
        "ip": {
          name: 'ip',
          type: 'string'
        },
        "isp": {
          name: 'isp',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
