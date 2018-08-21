


export class AppUser {
  "extensionNumber";
  "firstName";
  "lastName";
  "name";
  "businessPhone";
  "company";
  "timezone";
  "country";
  "languageCode";
  "accountId";
  "site";
  "realm";
  "username";
  "email";
  "emailVerified";
  "id";
  "password";
  accessTokens;
  constructor(data) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AppUser`.
   */
  static getModelName() {
    return "AppUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AppUser for dynamic purposes.
  **/
  static factory(data) {
    return new AppUser(data);
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
      name: 'AppUser',
      plural: 'AppUsers',
      path: 'AppUsers',
      properties: {
        "extensionNumber": {
          name: 'extensionNumber',
          type: 'number'
        },
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "businessPhone": {
          name: 'businessPhone',
          type: 'string'
        },
        "company": {
          name: 'company',
          type: 'string'
        },
        "timezone": {
          name: 'timezone',
          type: 'string'
        },
        "country": {
          name: 'country',
          type: 'string'
        },
        "languageCode": {
          name: 'languageCode',
          type: 'string'
        },
        "accountId": {
          name: 'accountId',
          type: 'number'
        },
        "site": {
          name: 'site',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
