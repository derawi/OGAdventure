/// Rarity deployment script for OGAdventures

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
    - rarity - ok
    - namesV2 - ok
    
    - attributes - ok
    - gold - ok

    - rarity_crafting-materials-1 (The Cellar Craft I) - ok 

    - codex-skills - ok 
    - codex-class-skills - ok
    - skills: 0x51C0B29A1d84611373BA301706c6B4b72283C80F - ok

    - codex-base-random
    - codex-gambits
    - codex-items_goods
    - codex-items_armor
    - codex-items_weapons

    - codex-feat-1
    - codex-feat-2
    - feats - ok

    - rarity_crafting_common (Crafting I RCI) - ok

    - wGold - ok

    - library - ok


*/

async function main() {
  const signer = (await ethers.getSigners())[1];

  // Main
  // const rarity = await deploy("Rarity", "contracts/core/rarity.sol:rarity", signer);
  const rarity = { address: "0x28feC82f23D95DE6968BF0f012BDaa610299E19E" };
  const attributes = await deploy(
    "Attributes",
    "contracts/core/attributes.sol:rarity_attributes",
    signer,
    rarity.address
  );
  const gold = await deploy("Gold", "contracts/core/gold.sol:rarity_gold", signer, rarity.address);

  const names = await deploy("Names", "contracts/core/namesv2.sol:rarity_names", signer, rarity.address, gold.address);
  const crafting_materials1 = await deploy(
    "rarity_crafting-materials-1",
    "contracts/core/rarity_crafting-materials-1.sol:rarity_crafting_materials",
    signer,
    rarity.address,
    attributes.address
  );

  // Skills
  const codex_skills = await deploy("Codex_skills", "contracts/codex/codex-skills.sol:codex", signer);
  const codex_class_skills = await deploy(
    "Codes_class_skills",
    "contracts/codex/codex-class-skills.sol:codex",
    signer,
    codex_skills.address
  );
  const skills = await deploy(
    "Skills",
    "contracts/core/skills.sol:rarity_skills",
    signer,
    rarity.address,
    attributes.address,
    codex_skills.address
  );

  // Codex
  const codex_base_random = await deploy("Codex-base-random", "contracts/codex/codex-base-random.sol:codex", signer);
  const codex_gambits = await deploy("Codex-gambits", "contracts/codex/codex-gambits.sol:gambits", signer);

  const codex_items_goods = await deploy("Codex-items-goods", "contracts/codex/codex-items-goods.sol:codex", signer);
  const codex_items_armor = await deploy("Codex-items-armor", "contracts/codex/codex-items-armor.sol:codex", signer);
  const codex_items_weapons = await deploy(
    "Codex-items-weapons",
    "contracts/codex/codex-items-weapons.sol:codex",
    signer
  );

  // Feats
  const codex_feats_1 = await deploy("Codex-feats-1", "contracts/codex/codex-feats-1.sol:codex", signer);
  const codex_feats_2 = await deploy("Codex-feats-2", "contracts/codex/codex-feats-2.sol:codex", signer);
  const feats = await deploy(
    "Feats",
    "contracts/core/feats.sol:rarity_feats",
    signer,
    rarity.address,
    codex_feats_1.address,
    codex_feats_2.address
  );

  // Other
  const crafting1 = await deploy(
    "Crafting 1 RCI",
    "contracts/core/rarity_crafting_common.sol:rarity_crafting",
    signer,
    rarity.address,
    attributes.address,
    crafting_materials1.address,
    gold.address,
    skills.address,
    codex_base_random.address,
    codex_items_goods.address,
    codex_items_armor.address,
    codex_items_weapons.address
  );

  const wGold = await deploy(
    "wRGLD",
    "contracts/core/wRGLD.sol:wrapped_rarity_gold",
    signer,
    rarity.address,
    gold.address
  );

  // - library
  const library = await deploy(
    "Library",
    "contracts/integration/rarity_library.sol:rarity_library",
    signer,
    rarity.address,
    attributes.address,
    skills.address,
    gold.address,
    crafting_materials1.address,
    crafting1.address,
    names.address
  );

  // Full Rarity Setup
  let raritySetup = {
    RARITY_ADDR: rarity.address,
    RARITY_ATTR_ADDR: attributes.address,
    RARITY_GOLD_ADDR: gold.address,
    RARITY_SKILLS_ADDR: skills.address,
    RARITY_FEATS_ADDR: feats.address,
    RARITY_CRAFTING_ADDR: crafting1.address,
    DUNGEON_THE_CELLAR_ADDR: crafting_materials1.address,
  };

  console.log(raritySetup);
}

// Run the script and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
