require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan rebel mad promote grid nature slot gentle'; 
let testAccounts = [
"0x1164de4207aa5b148ba1cc7043be0a807bf4d4e4d0362ece97d6229677acbbf4",
"0x22a8218c1f4ec26b9c00ff81d4d0ffe1dd7f55a9b98301f360547ab7bdc49016",
"0x3cd1da92529aefb6155a5420b4ee019c36052297eb554e2cdbd6996c3d25de8a",
"0x48879c81a9d8b1e61049a320e79f0ade7c9121bec4a241a9be8f91e3f3d61d16",
"0xcbe64ff7b63678f6e9fe6bd2f77fd42d305ceff1601f786ec84ede73c4bc0206",
"0x98389f521f96e6535aa5c638cbc2f3e97d5ad6ca00460853771ee37d0bd9493f",
"0x73c3743eb547473c61e35d9e28842e507b9644b722478a87a1d1a08571a38808",
"0xb1bfa6f5d447c963eb6c614c9a61fc3ffa986d274a81d3884c1280361440b79f",
"0x3231758093552170f275d0887603893497dc2ffa9e84ba47697d3911c3005b5b",
"0xe024160c8ebc595222b62408fc4111a17711da6d3443d8f010466bd793dfa002"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


