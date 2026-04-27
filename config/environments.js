const { ENVIRONMENTS } = require('./constants');

const environments = {
  [ENVIRONMENTS.DEV]: {
    name: ENVIRONMENTS.DEV,
    baseURL: 'https://www.saucedemo.com',
  },
  [ENVIRONMENTS.STAGING]: {
    name: ENVIRONMENTS.STAGING,
    baseURL: 'https://www.saucedemo.com',
  },
  [ENVIRONMENTS.PROD]: {
    name: ENVIRONMENTS.PROD,
    baseURL: 'https://www.saucedemo.com',
  },
};

module.exports = environments;
