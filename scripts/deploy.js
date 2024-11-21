const hre = require('hardhat');

async function main() {
  const Healthcare = await hre.ethers.deployContract('Healthcare');
  await Healthcare.waitForDeployment();
  console.log(`HealthCareDapp deployed to ${Healthcare.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});