


export class Route {
  "recordid";
  "testid";
  "sid";
  "time";
  "detaillink";
  "enteredname";
  "hops";
  "endms";
  "maxms";
  "endloss";
  "maxloss";
  "dnstime";
  "ipto";
  "ipfrom";
  "nameto";
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Route`.
   */
  static getModelName() {
    return "Route";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Route for dynamic purposes.
  **/
  static factory(data) {
    return new Route(data);
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
      name: 'Route',
      plural: 'Routes',
      path: 'Routes',
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
        "time": {
          name: 'time',
          type: 'Date'
        },
        "detaillink": {
          name: 'detaillink',
          type: 'string'
        },
        "enteredname": {
          name: 'enteredname',
          type: 'string'
        },
        "hops": {
          name: 'hops',
          type: 'number'
        },
        "endms": {
          name: 'endms',
          type: 'number'
        },
        "maxms": {
          name: 'maxms',
          type: 'number'
        },
        "endloss": {
          name: 'endloss',
          type: 'number'
        },
        "maxloss": {
          name: 'maxloss',
          type: 'number'
        },
        "dnstime": {
          name: 'dnstime',
          type: 'number'
        },
        "ipto": {
          name: 'ipto',
          type: 'string'
        },
        "ipfrom": {
          name: 'ipfrom',
          type: 'string'
        },
        "nameto": {
          name: 'nameto',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
