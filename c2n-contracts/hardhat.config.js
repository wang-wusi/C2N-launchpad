require('dotenv').config();
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require("@nomiclabs/hardhat-web3")
require('@openzeppelin/hardhat-upgrades')


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        hardhat:{
            chainId: 31337
        },
        local: {
            url: 'http://127.0.0.1:8545',
            chainId:31337,
            // accounts: [process.env.LOCAL_PRIVATE_KEY]
            accounts:['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
        },
        sepolia: {
            url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
            //accounts: [process.env.PRIVATE_KEY]
            accounts:['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
        },
        arb_sepolia:{
            url: 'https://public.stackup.sh/api/v1/node/arbitrum-sepolia',
            //accounts: [process.env.PRIVATE_KEY]
            accounts:['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
        }
    },
    solidity: {
        version: "0.6.12",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};
