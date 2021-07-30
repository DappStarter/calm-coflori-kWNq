require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food dad rebel random unusual hard light army gas'; 
let testAccounts = [
"0x4c8e83f1b556c79942ec84a29610895fe0370391168d8b6bf24de1b88ef830a3",
"0x8322fe09e2e8348b2078562cec9227570a6ac0aa405c1559bc30b4576995e65f",
"0x5ddfec7e48d9abdaf7793c1f4b60190cbc5cf9f0b29388a3ac73599237e5d0e4",
"0x36b32645522f260a0dd3c0c6f18c2aafa78ee5d1663066041438be9ef0f1aec7",
"0xf888eb2b2e96f158a88ec7a9f690aca6b8b1f8d3dcaf534a444e0c118d51c8dd",
"0x782f636d38d1bc0dc1dbe5e6f0fbc2caf1ffb4fee29dc509b9545dd367dfcaf4",
"0x62e8d8d2919f6c77204c7f6677b4828fd5981f3e1bc45f934a7e73521ea8e5c6",
"0x1bcc369738622f60aed809d91efb3ac0bbad1051b9e72389fa3d6c445792c9f3",
"0x40f1d01f4187790b82e48b576596337a4b47850bc6fcc93335d39fd4cfe45ec8",
"0x1c71b944e3b7d7424d675eea637a40aa20ba8a32ba738ee5a57c75008a7e1062"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

