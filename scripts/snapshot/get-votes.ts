import snapshot from "@snapshot-labs/snapshot.js";
import { EnumType } from "json-to-graphql-query";
import query from "./data/query";
import util from "./utils";

const param = query.getVotes;

async function main() {
  param.votes.__args.where.proposal = util.proposalId;
  param.votes.__args["orderDirection"] = new EnumType("desc");

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
