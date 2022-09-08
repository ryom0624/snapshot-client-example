import snapshot from "@snapshot-labs/snapshot.js";
import { EnumType } from "json-to-graphql-query";
import query from "./data/query";
import util from "./utils";

const param = query.getVotePower;

async function main() {
  param.vp.__args.voter = util.ownerAddr;
  param.vp.__args.proposal = util.proposalId; // .envで切り替え
  param.vp.__args.space = util.spaceId;
  const votePower = await snapshot.utils.subgraphRequest(
    util.graphqlUrl,
    param
  );
  console.log(votePower);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
