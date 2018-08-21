


export class Speed {
  "recordid";
  "testid";
  "sid";
  "ip";
  "isp";
  "dspeed";
  "uspeed";
  "qos";
  "uqos";
  "rtt";
  "rttmax";
  "rttavg";
  "rttconsistency";
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
   * i.e. `Speed`.
   */
  static getModelName() {
    return "Speed";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Speed for dynamic purposes.
  **/
  static factory(data) {
    return new Speed(data);
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
      name: 'Speed',
      plural: 'Speeds',
      path: 'Speeds',
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
        "ip": {
          name: 'ip',
          type: 'string'
        },
        "isp": {
          name: 'isp',
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
        "rttmax": {
          name: 'rttmax',
          type: 'number'
        },
        "rttavg": {
          name: 'rttavg',
          type: 'number'
        },
        "rttconsistency": {
          name: 'rttconsistency',
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
