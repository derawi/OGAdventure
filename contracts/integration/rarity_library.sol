// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./rarity_interfaces.sol";

contract rarity_library {
    using Strings for uint;

    rarity_manifested immutable _rm;
    rarity_attributes public _attr;
    rarity_skills public _skills;
    rarity_gold public _gold;
    rarity_mat1 public _mat1;
    rarity_item1 public _items1;
    rarity_names public _names;

    constructor(
        rarity_manifested __rm,
        rarity_attributes __attr,
        rarity_skills __skills,
        rarity_gold __gold,
        rarity_mat1 __mat1,
        rarity_item1 __items1,
        rarity_names __names
    ) {
        _rm = __rm;
        _attr = __attr;
        _skills = __skills;
        _gold = __gold;
        _mat1 = __mat1;
        _items1 = __items1;
        _names = __names;
    }

    function name(uint _s) public view returns (string memory summoner_name) {
        summoner_name = _names.summoner_name(_s);
    }

    function base(uint _s) public view returns (rl._base memory c) {
        (uint _xp, uint _log, uint _class, uint _level) = _rm.summoner(_s);
        c = rl._base(name(_s), _xp, _log, _class, _level);
    }

    function description(
        uint _s
    ) public view returns (string memory full_name) {
        (, , uint class, uint level) = _rm.summoner(_s);
        full_name = string(
            abi.encodePacked(
                "Level ",
                level.toString(),
                " ",
                _rm.classes(class)
            )
        );

        string memory _name = name(_s);
        if (bytes(_name).length > 0) {
            full_name = string(abi.encodePacked(_name, ", ", full_name));
        } else {
            full_name = string(abi.encodePacked("Unnamed ", full_name));
        }
    }

    function ability_scores(
        uint _s
    ) public view returns (rl._ability_scores memory scores) {
        (
            uint32 _str,
            uint32 _dex,
            uint32 _con,
            uint32 _int,
            uint32 _wis,
            uint32 _cha
        ) = _attr.ability_scores(_s);
        scores = rl._ability_scores(_str, _dex, _con, _int, _wis, _cha);
    }

    function _modifier_for_attribute(
        uint32 _attribute
    ) internal pure returns (int32 _modifier) {
        if (_attribute == 9) {
            return -1;
        }
        return (int32(_attribute) - 10) / 2;
    }

    function ability_modifiers(
        uint _s
    ) public view returns (rl._ability_modifiers memory modifiers) {
        rl._ability_scores memory scores = ability_scores(_s);
        modifiers = rl._ability_modifiers(
            _modifier_for_attribute(scores._str),
            _modifier_for_attribute(scores._dex),
            _modifier_for_attribute(scores._con),
            _modifier_for_attribute(scores._int),
            _modifier_for_attribute(scores._wis),
            _modifier_for_attribute(scores._cha)
        );
    }

    function _pb(uint score) internal pure returns (uint) {
        if (score < 8) {
            return 0;
        } else if (score <= 14) {
            return score - 8;
        } else {
            return ((score - 8) ** 2) / 6;
        }
    }

    function ability_scores_full(
        uint _s
    ) public view returns (rl._ability_scores_full memory scores_full) {
        rl._ability_scores memory scores = ability_scores(_s);
        rl._ability_modifiers memory modifiers = ability_modifiers(_s);
        uint total_points = _attr.abilities_by_level(_rm.level(_s)) + 32;
        uint spent_points = _pb(scores._str) +
            _pb(scores._dex) +
            _pb(scores._con) +
            _pb(scores._int) +
            _pb(scores._wis) +
            _pb(scores._cha);
        bool character_created = _attr.character_created(_s);
        scores_full = rl._ability_scores_full(
            scores,
            modifiers,
            total_points,
            spent_points,
            character_created
        );
    }

    function skills(uint _s) public view returns (rl._skills memory s) {
        uint8[36] memory _current_skills = _skills.get_skills(_s);
        rl._ability_modifiers memory mod = ability_modifiers(_s);
        (, , uint _class, uint _level) = _rm.summoner(_s);
        bool[36] memory _class_skills = _skills.class_skills(_class);
        uint _total_points;
        uint _spent_points;
        if (mod._int > -5) {
            // This will underflow for summoners with -5 int mod or less
            _total_points = _skills.skills_per_level(mod._int, _class, _level);
            _spent_points = _skills.calculate_points_for_set(
                _class,
                _current_skills
            );
        }
        s = rl._skills(
            _current_skills,
            _class_skills,
            _total_points,
            _spent_points
        );
    }

    function wealth_by_level(uint level) public pure returns (uint wealth) {
        for (uint i = 1; i < level; i++) {
            wealth += i * 1000e18;
        }
    }

    function gold(uint _s) public view returns (rl._gold memory g) {
        uint _claimed_gold;
        uint _claimed_level = _gold.claimed(_s);
        for (uint i = 1; i <= _claimed_level; i++) {
            _claimed_gold += wealth_by_level(i);
        }
        uint _current_level = _rm.level(_s);
        uint _total_claimable_gold;
        for (uint i = 1; i <= _current_level; i++) {
            _total_claimable_gold += wealth_by_level(i);
        }
        g = rl._gold(
            _gold.balanceOf(_s),
            _claimed_gold,
            _total_claimable_gold - _claimed_gold
        );
    }

    function materials(
        uint _s
    ) public view returns (rl._material[] memory mats) {
        mats = new rl._material[](1);
        mats[0] = rl._material(_mat1.balanceOf(_s), _mat1.scout(_s));
    }

    function summoner_full(
        uint _s
    ) public view returns (rl._summoner memory s) {
        s = rl._summoner(
            base(_s),
            ability_scores_full(_s),
            skills(_s),
            gold(_s),
            materials(_s)
        );
    }

    function summoners_full(
        uint[] calldata _s
    ) public view returns (rl._summoner[] memory s) {
        s = new rl._summoner[](_s.length);
        for (uint i = 0; i < _s.length; i++) {
            s[i] = summoner_full(_s[i]);
        }
    }

    function items1(
        address _owner
    ) public view returns (rl._item1[] memory items) {
        uint _total_items = _items1.balanceOf(_owner);
        items = new rl._item1[](_total_items);
        for (uint i = 0; i < _total_items; i++) {
            (
                uint8 _base_type,
                uint8 _item_type,
                uint32 _crafted,
                uint _crafter
            ) = _items1.items(_items1.tokenOfOwnerByIndex(_owner, i));
            items[i] = rl._item1(_base_type, _item_type, _crafted, _crafter);
        }
    }
}

library Strings {
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
