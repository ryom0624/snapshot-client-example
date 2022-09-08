import snapshot from "@snapshot-labs/snapshot.js";
import util from "./utils";

const strategies = [
  {
    name: "erc721",
    params: {
      address: "0x4c5e91435d870a13645c30cf0814d20f4de1aa5b",
      symbol: "MyERC721",
    },
  },
];
const voters = [util.ownerAddr, util.account2, util.account3];
const blockNumber = 11341751;

snapshot.utils
  .getScores(
    util.spaceId,
    strategies,
    util.network.toString(),
    voters,
    blockNumber
  )
  .then((result) => {
    console.log("Scores", result);
  });
