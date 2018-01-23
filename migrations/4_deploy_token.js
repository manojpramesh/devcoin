var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    var owner = '0xb8a7483ace529de28d1d9f8860a298d94e451892';
    var name = 'DEVCOIN';
    var symbol = 'DEVC';
    var totalSupply = 1 * Math.pow(10,9) * Math.pow(10,18);
    var decimals = 18;
    deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
  }
  
};
