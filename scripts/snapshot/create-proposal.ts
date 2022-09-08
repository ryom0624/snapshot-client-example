import { Wallet } from "@ethersproject/wallet";
import snapshot from "@snapshot-labs/snapshot.js";

import { body } from "./data/proposal-body";
import util from "./utils";

const client = new snapshot.Client712(util.hub);

const timestampSec = Math.floor(Date.now() / 1000);

async function main() {
  const wallet = new Wallet(process.env.PRIVATE_KEY as string);

  // Proposal
  const proposalReceipt = await client.proposal(wallet, wallet.address, {
    space: util.spaceId,
    type: "single-choice",
    title: "ERC721 hold Strategy test proposal - " + timestampSec,
    body: body,
    discussion: "",
    choices: ["For", "Against"],
    start: timestampSec,
    end: timestampSec + 1000,
    snapshot: 11338523, // Block Number
    plugins: JSON.stringify({}),
    app: "snapshot",
  });
  console.log(proposalReceipt);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
