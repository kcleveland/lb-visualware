


export class Web {
  "recordid";
  "testid";
  "time";
  "sid";
  "ip";
  "isp";
  "url";
  "latencyms";
  "failurems";
  "connectms";
  "findms";
  "readms";
  "pagesize";
  "kbsec";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Web`.
   */
  static getModelName() {
    return "Web";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Web for dynamic purposes.
  **/
  static factory(data) {
    return new Web(data);
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
      name: 'Web',
      plural: 'Webs',
      path: 'Webs',
      properties: {
        "recordid": {
          name: 'recordid',
          type: 'number'
        },
        "testid": {
          name: 'testid',
          type: 'number'
        },
        "time": {
          name: 'time',
          type: 'Date'
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
        "url": {
          name: 'url',
          type: 'string'
        },
        "latencyms": {
          name: 'latencyms',
          type: 'number'
        },
        "failurems": {
          name: 'failurems',
          type: 'number'
        },
        "connectms": {
          name: 'connectms',
          type: 'number'
        },
        "findms": {
          name: 'findms',
          type: 'number'
        },
        "readms": {
          name: 'readms',
          type: 'number'
        },
        "pagesize": {
          name: 'pagesize',
          type: 'number'
        },
        "kbsec": {
          name: 'kbsec',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
