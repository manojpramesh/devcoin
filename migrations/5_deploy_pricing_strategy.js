var FlatPricing = artifacts.require('./FlatPricing.sol');

module.exports = function (deployer, network) {
    var weiPerToken = 666666666666666;
    deployer.deploy(FlatPricing, weiPerToken);

};
