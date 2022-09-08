import snapshot from "@snapshot-labs/snapshot.js";
import query from "./data/query";
import util from "./utils";

const param = query.getProposals;

async function main() {
  param.proposals.__args.first = 1;
  const proposals = await snapshot.utils.subgraphRequest(
    util.graphqlUrl,
    param
  );
  console.log(proposals);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
