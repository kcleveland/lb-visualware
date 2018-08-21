


export class Hispeed {
  "recordid";
  "testid";
  "sid";
  "detaillink";
  "time";
  "ip";
  "dspeed";
  "uspeed";
  "qos";
  "uqos";
  "rtt";
  "maxpause";
  "avgpause";
  "bandwidth";
  "routespeed";
  "forcedidle";
  "routeconc";
  "dtesttype";
  "utesttype";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Hispeed`.
   */
  static getModelName() {
    return "Hispeed";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Hispeed for dynamic purposes.
  **/
  static factory(data) {
    return new Hispeed(data);
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
      name: 'Hispeed',
      plural: 'Hispeeds',
      path: 'Hispeeds',
      properties: {
        "recordid": {
          name: 'recordid',
          type: 'number'
        },
        "testid": {
          name: 'testid',
          type: 'number'
        },
        "sid": {
          name: 'sid',
          type: 'string'
        },
        "detaillink": {
          name: 'detaillink',
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
        "dspeed": {
          name: 'dspeed',
          type: 'number'
        },
        "uspeed": {
          name: 'uspeed',
          type: 'number'
        },
        "qos": {
          name: 'qos',
          type: 'number'
        },
        "uqos": {
          name: 'uqos',
          type: 'number'
        },
        "rtt": {
          name: 'rtt',
          type: 'number'
        },
        "maxpause": {
          name: 'maxpause',
          type: 'number'
        },
        "avgpause": {
          name: 'avgpause',
          type: 'number'
        },
        "bandwidth": {
          name: 'bandwidth',
          type: 'number'
        },
        "routespeed": {
          name: 'routespeed',
          type: 'number'
        },
        "forcedidle": {
          name: 'forcedidle',
          type: 'number'
        },
        "routeconc": {
          name: 'routeconc',
          type: 'number'
        },
        "dtesttype": {
          name: 'dtesttype',
          type: 'string'
        },
        "utesttype": {
          name: 'utesttype',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
