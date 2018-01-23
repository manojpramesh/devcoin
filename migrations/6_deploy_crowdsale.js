var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var FlatPricing = artifacts.require('./FlatPricing.sol');
var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');
var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');

const moment = require('moment');

module.exports = function (deployer, network) {
  if (network == 'development') {
    const token = CentrallyIssuedToken.address;
    const pricing = FlatPricing.address;
    const wallet = MultiSigWalletWithDailyLimit.address;
    const start = moment.utc('2018-1-1 18:00').toDate().getTime() / 1000;
    const end = moment.utc('2019-1-1 18:00').toDate().getTime() / 1000;
    const min = 0;
    const beneficiary = '0xb8a7483ace529de28d1d9f8860a298d94e451892';
    const baseEthCap = 15 * Math.pow(10,18);
    const maxEthPerAddress = 65 * Math.pow(10,18);
    deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary, baseEthCap, maxEthPerAddress);
  }
};
