import snapshot from "@snapshot-labs/snapshot.js";
import query from "./data/query";
import util from "./utils";

const param = query.getProposal;

async function main() {
  param.proposal.__args.id = util.proposalId; // .envで切り替え
  const result = await snapshot.utils.subgraphRequest(util.graphqlUrl, param);

  console.log(result.proposal);
  console.log(result.proposal.strategies);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
