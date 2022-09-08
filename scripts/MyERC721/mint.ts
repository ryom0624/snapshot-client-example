import "@nomiclabs/hardhat-ethers";

import hre from "hardhat";

import { Wallet } from "@ethersproject/wallet";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MyERC721 } from "../../typechain-types";

const to = [];

async function main() {
  let signer: SignerWithAddress;
  let nft: MyERC721;

  const nftAddr = "0x4C5E91435d870A13645C30CF0814D20f4DE1AA5B";

  nft = (await hre.ethers.getContractAt(
    "MyERC721",
    nftAddr,
    signer
  )) as MyERC721;

  signer = (await hre.ethers.getSigners())[0];

  if (to.length == 0) return console.log("mint distination address is empty");

  for (var i = 0; i < to.length; i++) {
    const tx = await nft.safeMint(to[i], i + 1);

    console.log(tx);

    const receipt = await tx.wait();

    console.log(receipt);
  }

  console.log("Done");
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
