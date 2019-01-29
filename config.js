/*
 * create and export configuration variables
 *
 */

//container for all the environments
var environments = {};

//staging as default env
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
};

//production
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production",
};

//determine which env passed as a command-line argument
var currentEnv =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

//check if the currentEnv is one of environments above
var envToExport =
  typeof environments[currentEnv] == "object"
    ? environments[currentEnv]
    : environments.staging;

//export the module

module.exports = envToExport;
