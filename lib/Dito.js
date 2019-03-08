import helpers from './helpers/index';

class Dito {
  constructor(appKey, appSecret) {
    this.appKey = appKey;
    this.appSecret = appSecret;
  }

  static generateID(string) {
    return helpers.generateID(string);
  }
}

Dito.helpers = helpers;

export default Dito;
