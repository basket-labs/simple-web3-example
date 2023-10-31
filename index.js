const {Web3} = require('web3')
const {configDotenv} = require("dotenv");
configDotenv()

async function main() {
  const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.ETH_INFURA_KEY}`)
  Promise.all([
    web3.eth.getProtocolVersion(),
    web3.eth.getBlockNumber(),
    web3.eth.getBalance('0x8c2b0f3a4a0d6c9f2b0c3b4a0d6c9f2b0c3b4a0d'),
  ]).then(([protocolVersion, blockNumber, balance]) => console.table({protocolVersion, blockNumber, balance}))
}

main()