import { ethers } from "hardhat";

async function deploy(name, contractName, signer, ...args) {
  const Factory = await ethers.getContractFactory(contractName, signer);

  const contract = await Factory.deploy(...args);
  console.log(`Deploying ${name}...`);

  await contract.deployTransaction.wait(); // Wait for the transaction to be mined
  console.log(`${name} deployed to:`, contract.address);

  return contract;
}

/*
  AC: deployment order
    - rarity
    - attributes
    - gold

    - codex-skills
    - skills

    - rarity_crafting-materials-1 (The Cellar Craft I)

    - codex-class-skills
    - skills: 0x51C0B29A1d84611373BA301706c6B4b72283C80F

    - codex-items_goods
    - codex-items_armor
    - codex-items_weapons
    - codex-base-random

    - rarity_crafting_common (Crafting I RCI)

    - codex-feat-1
    - codex-feat-2
    - feats

    - gambits


*/

async function main() {
  const signer = (await ethers.getSigners())[0];

  const rarity = await deploy("Rarity", "core/rarity.sol:rarity", signer);
  const attributes = await deploy("Attributes", "core/attributes.sol:rarity_attributes", signer, rarity.address);
}

// Run the script and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
