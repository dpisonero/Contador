var Contador = artifacts.require("Contador");

module.exports = function(deployer) {
    // Use deployer to state migration tasks.
    deployer.deploy(Contador);
};
