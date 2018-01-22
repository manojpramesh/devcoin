var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    deployer.deploy(MultiSigWalletWithDailyLimit, [
      '0xb8a7483ace529de28d1d9f8860a298d94e451892',
      '0x65e499c844d127Ae22cB462B21312eCf2472B058'
    ], 2, 0);
  }

  if (network == 'mainnet') {
    deployer.deploy(MultiSigWalletWithDailyLimit, [], 2, 0);
  }
};