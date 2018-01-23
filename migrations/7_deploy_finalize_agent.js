var NullFinalizeAgent = artifacts.require('./NullFinalizeAgent.sol');
var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');
var DefaultFinalizeAgent = artifacts.require('./DefaultFinalizeAgent.sol');
var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');

module.exports = function (deployer, network) {
    deployer.deploy(DefaultFinalizeAgent, CentrallyIssuedToken.address, AllocatedCrowdsale.address);
};