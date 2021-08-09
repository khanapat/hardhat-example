/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });
console.log(process.env);

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    kaleido: {
      url: "https://k0ngb9r88v:8FyqRn8WmCaxEgOkumqyAn9_l0OfxHdsQU8ks3jTacQ@k0ve9d7mfn-k0rmtvsu96-rpc.kr0-aws.kaleido.io/",
      accounts: [`0xe47dd86c5e99a6738b3a4733f2cc4257787139d322c3101780e5299dcb5d2d69`],
    }
  }
};
