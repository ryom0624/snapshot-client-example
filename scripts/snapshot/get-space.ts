import snapshot from "@snapshot-labs/snapshot.js";
import { EnumType } from "json-to-graphql-query";
import query from "./data/query";
import util from "./utils";

const param = query.getSpace;

async function main() {
  const result = await snapshot.utils.subgraphRequest(util.graphqlUrl, param);
  console.log(result.space);

  console.log(result.space.strategies);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
