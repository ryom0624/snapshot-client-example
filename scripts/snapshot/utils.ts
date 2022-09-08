import hre from "hardhat";

const env = process.env;

const network = hre.network.config.chainId;

const spaceId = env.SPACE_ID;
const proposalId = env.PROPOSAL_ID;

const ownerAddr = env.OWNER_ADDRESS;
const account2 = env.ACCOUNT_2;
const account3 = env.ACCOUNT_3;
const account4 = env.ACCOUNT_4;

const hub = "https://testnet.snapshot.org";
const graphqlUrl = "https://testnet.snapshot.org/graphql";

export default {
  network,
  hub,
  graphqlUrl,
  spaceId,
  proposalId,
  ownerAddr,
  account2,
  account3,
  account4,
};
