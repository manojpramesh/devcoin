const mnemonic = require('./secret').mnemonic;
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      from: '0xb8a7483ace529de28d1d9f8860a298d94e451892',
      network_id: "*"
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      from: '0xb8a7483ace529de28d1d9f8860a298d94e451892',
      network_id: "*"
    },
    infuraropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/G2bbwcegsuLDEAnhkd2n")
      },
      from: '0xb8a7483ace529de28d1d9f8860a298d94e451892',
      gasPrice: 10000000000,
      gas: 4500000,
      network_id: 3
    }
  }
};
