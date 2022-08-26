require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/QA2XG1bqzQlP_vpH9eTYjeBUmr3C3WoI",
       accounts: ["6523d46fade4660467e635fdc87828a8b8a605e94d4b49ddb5be2e5aa9f226bd"]
    }
  }

};
