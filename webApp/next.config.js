/******************************************************************************
 **	@Author:				The Ape Community
 **	@Twitter:				@ape_tax
 **	@Date:					Wednesday August 11th 2021
 **	@Filename:				next.config.js
 ******************************************************************************/

const Dotenv = require('dotenv-webpack');

module.exports = {
	plugins: [new Dotenv()],
	env: {
		// DEFAULT_WAIT: 2,
		// FMT_KEY: process.env.FMT_KEY,
		// WEBSITE_URI: process.env.WEBSITE_URI || "https://adventure.major.tax/",

		//RARITY CORE
		//Live Shimmer Testnet contracts
		RARITY_ADDR: '0x28feC82f23D95DE6968BF0f012BDaa610299E19E',
		RARITY_ATTR_ADDR: '0x72fEAA1fd5345009098838f8AC0E12F53363F969',
		RARITY_GOLD_ADDR: '0x8179C8f854Fd00ba9641D42d25388F6bC1eBBb06',
		RARITY_SKILLS_ADDR: '0x0F7cD956Cc2A10398eF46fDdc59bBdc057014e79',
		RARITY_FEATS_ADDR: '0x16fA586D8Bc1B28591C0ee470DA324b6bCf4534e',
		RARITY_CRAFTING_ADDR: '0xf5B184D5d304dcA98e16Ed0aDf4292fA4D604D7b',
		DUNGEON_THE_CELLAR_ADDR: '0x66F81fF462a74621596cdfcE359cD6209b8F427C',

		RARITY_ATTR_ABI: require('./utils/abi/rarityAttr.abi.json'),
		RARITY_SKILLS_ABI: require('./utils/abi/raritySkills.abi.json'),
		RARITY_FEATS_ABI: require('./utils/abi/rarityFeats.abi.json'),

		//RARITY ECOSYSTEM
		RARE_SKINS_ADDR: '0x6fEd400dA17f2678C450aA1D35e909653B3b482A',

		//RARITY HELPERS
		RARITY_CRAFTING_HELPER_ADDR: '0x19DDBf12517bB827C14aDb544485073950Dc8F10',
		RARITY_COOKING_HELPER_ADDR: '0xFE23ea8C57Ee4f28E9C60cA09C512Ce80e90E6F5',
		RARITY_SKIN_HELPER_ADDR: '0xbe570c81e8bc6a4ca2675fe619044b389df32566',

		//RARITY EXTENDED
		RARITY_EXTENDED_COOKING_ADDR: '0x7474002fe5640d612c9a76cb0b6857932ff891e8',
		RARITY_EXTENDED_NAME: '0x4762AF980240eFEBbc2D6E46C408A720C20D0e10',
		RARITY_EXTENDED_CARE: '0xc066618F5c84D2eB002b99b020364D4CDDE6245D',
		RARITY_EXTENDED_XP_ADDR: '0x640bdeff13ae5527424acd868F65357270b05eB8',

		//DUNGEONS
		DUNGEON_THE_FOREST_ADDR: '0x48e6F88F1Ab05677675dE9d14a705f8A137ea2bC',
		DUNGEON_THE_FOREST_V1_ADDR: '0xb37d3d79ea86B0334d9322c695339D577A3D57be',
		DUNGEON_BOARS_ADDR: '0x5412a3c353426dfc14443c0fe6032c5d70fe3437',
		DUNGEON_OPEN_MIC_V2_ADDR: '0x29d51E8736FCC8C2662aA1B2cf46753d5918606F',
		DUNGEON_THE_CELLAR_ABI: require('./utils/abi/dungeonTheCellar.abi.json'),
		DUNGEON_THE_FOREST_ABI: require('./utils/abi/dungeonTheForest.abi.json'),
		DUNGEON_BOARS_ABI: require('./utils/abi/dungeonBoars.abi.json'),
		DUNGEON_OPEN_MIC_V2_ABI: require('./utils/abi/dungeonOpenMic.abi.json'),

		//LOOTS
		LOOT_MUSHROOM_ADDR: '0xcd80cE7E28fC9288e20b806ca53683a439041738',
		LOOT_BERRIES_ADDR: '0x9d6C92CCa7d8936ade0976282B82F921F7C50696',
		LOOT_WOOD_ADDR: '0xdcE321D1335eAcc510be61c00a46E6CF05d6fAA1',
		LOOT_WOOD_SOFT_ADDR: '0xD8f5b3159eD9e041F5b4E3c36c21D4fbA2d97586',
		LOOT_WOOD_FINE_ADDR: '0x6a3Efe1aF1EeE52c13033DbE86707c9F27a9013d',
		LOOT_WOOD_SEASONED_ADDR: '0xa75E51146Fa9d64a2Bc123E42eB61dD5700EF5e4',
		LOOT_WOOD_HARD_ADDR: '0x442953Ff0061E8a3041c13F8779BB3Ee63B0a45b',
		LOOT_WOOD_DARK_ADDR: '0x00f1A9f8074F05738B6eCbE3372B736cEBCef6c3',

		LOOT_ORE_COPPER_ADDR: '0x80200b05D353a7df9e0053fd33C46765BE57AE7d', //RE - T0
		LOOT_ORE_IRON_ADDR: '0x734Eb586D5cCB690E238f0926fA802B2C51036d3', //RE - T1
		LOOT_ORE_GOLD_ADDR: '0x1eaf946DE3DF00BE8A3cEB152B191b334f0Dabba', //RE - T2
		LOOT_ORE_PLATINIUM_ADDR: '0xEF2679A075B52A32fb421134C5A614E58eD9325d', //RE - T3
		LOOT_ORE_MITHRIL_ADDR: '0x9a59DC0577ADFa376999CC3930895444e6233456', //RE - T4
		LOOT_ORE_ORICHALCUM_ADDR: '0x25Cb7403638aF9AF8665a1411A35Ea9cde3A9a3c', //RE - T5
		LOOT_ORE_COLD_IRON: '0x22d94e02FA05fFA98027C73226CE3B73E8E29977', //Murderteeth - T3
		LOOT_ORE_ADAMANTINE: '0x55fA06647d4f0051C0AcBb580DbCF969aD136D62', //Murderteeth - T5

		LOOT_LEATHER_ADDR: '0xc5E80Eef433AF03E9380123C75231A08dC18C4B6',
		LOOT_MEAT_ADDR: '0x95174B2c7E08986eE44D65252E3323A782429809',
		LOOT_TUSKS_ADDR: '0x60bFaCc2F96f3EE847cA7D8cC713Ee40114be667',
		LOOT_CANDIES_ADDR: '0x18733f3C91478B122bd0880f41411efd9988D97E',
		LOOT_ERC20_ABI: require('./utils/abi/lootERC20.abi.json'),

		//MEALS
		MEAL_GRILLED_MEAT: '0x97e8f1061224cb532F808b074786C76e977BA6EE',
		MEAL_MUSHROOM_SOUP: '0x2e3e1C1F49A288ebF88be66a3ED3539B5971f25D',
		MEAL_BERRIES_PIE: '0x57e4cD55289da26aa7cb607c00c5dDcd0f7980a2',
		MEAL_MUSHROOM_MEAT_SKEWER: '0x65567a2fBC14B4aBCd414bb6902384745d4353f6',
		MEAL_MUSHROOM_BERRIES_MIX: '0xF06FfE67CB96641eEC55eA19126BD8F0107Ff0Ad',
		MEAL_BERRIES_WINE: '0xA0e9159EfC4407c4465bbCDF0e7538D6869d81a3',

		RARITY_EQUIPMENT_WRAPPER_ADDR: '0xb79c4626cf561d176417FC4F142aEc86b63b8EF0',
		RARITY_EQUIPMENT_ARMOR_HEAD_ADDR: '0x494d46681f26DEEB93ba791aca975A77ac9CF917',
		RARITY_EQUIPMENT_ARMOR_BODY_ADDR: '0xCCcD46478F384b1E49E3282a14e4431C7dD0D9c4',
		RARITY_EQUIPMENT_ARMOR_HAND_ADDR: '0x7b562412Ba62141c6497eA6256c100b19F56a687',
		RARITY_EQUIPMENT_ARMOR_FOOT_ADDR: '0x9578f6bB11B7f0E02ad9855d8F7A1B2972B8B881',
		RARITY_EQUIPMENT_WEAPON_PRIMARY_ADDR: '0x1A04fF6Db46dB1be64c3bC53f1481e197B5C82Af',
		RARITY_EQUIPMENT_WEAPON_SECONDARY_ADDR: '0x150c6F9A391cA9076F5f9Cf5e1D8A41c80540679',
		RARITY_EQUIPMENT_WEAPON_SHIELD_ADDR: '0x1a8B00725126e26638b88833Abfb08f6AdBa63f5',
		RARITY_EXTENDED_EQUIPMENT_BASIC_SET_ADDR: '0x538fa281F4Aa510dFEa2Ef4419D019FDf51FF6D9',
		RARITY_EXTENDED_EQUIPMENT_BASIC_SET_ARMOR_CODEX_ADDR: '0x6bAd1681a0b09026FFB0D2AA95b50c598052e571',
		RARITY_EXTENDED_EQUIPMENT_BASIC_SET_WEAPON_CODEX_ADDR: '0xE749643b18E58Ce1eF9cE603018C880Ec1a68C63',

		RARITY_EXTENDED_FARM_CORE: '0xEDb761eDE0Fc6f722cb544a6148BE4ccFd6D3a88',
		RARITY_EXTENDED_WOOD_FARM_0: '0x4d63265b3eee078d44c651664134d363E6B8Ce42',
		RARITY_EXTENDED_WOOD_FARM_1: '0x4553D91F2972BF2f55C4B9461eB954069e04C099',
		RARITY_EXTENDED_WOOD_FARM_2: '0x2ae0E0E74EbCea494d3DB22346EF1EC7DD08b1AC',
		RARITY_EXTENDED_WOOD_FARM_3: '0xdFA60ba1922f381a0EEC6a06a1A81a33a562EdB7',
		RARITY_EXTENDED_WOOD_FARM_4: '0x9272d55CD68b74C12431555AD72f2045649aAE37',
		RARITY_EXTENDED_WOOD_FARM_5: '0x5965F779d31A0A204FaDE11b98583A6F90255Ce5',
		RARITY_EXTENDED_ORE_FARM_0: '0x0328524184B6CbA02330E4b3fee2681Cef514b19',
		RARITY_EXTENDED_ORE_FARM_1: '0x154aEfD189A42e003F89eDA36920bd6a040d3763',
		RARITY_EXTENDED_ORE_FARM_2: '0x58AF49da6041D355e577B00a6B40B7220d07e325',
		RARITY_EXTENDED_ORE_FARM_3: '0x1a8e4a939B0e43121928cCb2953e7c6afa27a700',
		RARITY_EXTENDED_ORE_FARM_4: '0x35c77A131eB36f9c9cF293C9EF2206883F42461e',
		RARITY_EXTENDED_ORE_FARM_5: '0x32ee75EB9FEa872c922Dc2108b7B4cE2773B5A82',
		RARITY_MURDERTEETH_COLD_IRON_FARM: '0xC57C983F9e54298dc8e6D32258D28b12BeC5344D',
		RARITY_MURDERTEETH_ADAMANTINE_FARM: '0xE186c1EFE750230def425346d1C42E5B95001dCd',

		RARITY_EXTENDED_FARM_TYPE_WOOD: 1,
		RARITY_EXTENDED_FARM_TYPE_ORE: 2,

		// Bank Section - Yearn
		ZAP_VAULT_ADDR: '0xfCE6CbeF3867102da383465cc237B49fF4B9d48F',
		FTM_VAULT_ADDR: '0x0dec85e74a92c52b7f708c4b10207d9560cefaf0',
		DAI_VAULT_ADDR: '0x637eC617c86D24E421328e6CAEa1d92114892439',
		DAI_TOKEN_ADDR: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
		WFTM_TOKEN_ADDR: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
	},
};
