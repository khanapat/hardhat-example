npm init -y

npm install -D hardhat
npm install dotenv

npm install -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

npx hardhat compile

npx hardhat run ./scripts/deploy.js --network rinkeby