import { Wallet } from "@ethersproject/wallet";
import snapshot from "@snapshot-labs/snapshot.js";
import util from "./utils";

/*
    type ProposalType = 'single-choice' | 'approval' | 'quadratic' | 'ranked-choice' | 'weighted' | 'basic';
*/

const client = new snapshot.Client712(util.hub);

async function main() {
  const wallet = new Wallet(process.env.PRIVATE_KEY as string);

  // Voting
  const voteReceipt = await client.vote(wallet, wallet.address, {
    space: util.spaceId,
    proposal: util.proposalId,
    type: "single-choice",
    choice: 1,
    app: "snapshot",
    // privacy: "shutter", // 意味無し
  });
  console.log(voteReceipt);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
