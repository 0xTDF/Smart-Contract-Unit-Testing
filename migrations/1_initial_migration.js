const migrations = artifacts.require("Migrations");
const simpleStorage = artifacts.require("SimpleStorage");
const advancedStorage = artifacts.require("AdvancedStorage");
const structExample = artifacts.require("StructExample");

module.exports = function (deployer) {
  deployer.deploy(migrations);
  deployer.deploy(simpleStorage);
  deployer.deploy(advancedStorage);
  deployer.deploy(structExample);
};

