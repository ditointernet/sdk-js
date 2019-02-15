import helpers from './helpers/index';

class Dito {
  private appKey: string;
  private appSecret: string;
  static helpers: object;

  constructor(appKey: string, appSecret: string) {
    this.appKey = appKey;
    this.appSecret = appSecret;
  }

  public generateID(string: string): string {
    return helpers.generateID(string);
  }
}

Dito.helpers = helpers;

export default Dito;
