module.exports = async ({ getNamedAccounts, deployments }: any) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("MyERC721", {
    from: deployer,
    args: [],
    log: true,
  });
};
module.exports.tags = ["MyERC721"];
