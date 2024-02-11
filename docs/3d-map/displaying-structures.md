---
title: Displaying Structures
---

# Expected
During this tutorial we will expect that you already got a **Map Waypoint** and a **Basic Building** already set up and ready to use and that you read [Intro to using the World Map](../3d-map/into-3d-map)

# Displaying a waypoint for a Structure of any kind
Displaying a waypoint whenever a strcture is placed can be split into 3 stepts
- Adding a Buildable key.
- Adding reference in `aa_map_consts.js`.
- Adding a case for it in `map_icon_controller.js`.

# 1-Adding a Buildable key
We will start out with this basic building:
```json
{
  "format_version": "1.8.0",
  "minecraft:entity": {
    "description": {
      "identifier": "badger:wiki_building",
      "runtime_identifier": "badger:buildable",
      "is_summonable": true
    },
    "mushroom_data": {
      "function": "Player",
      "type": "Structure"
    },
    "components": {
      "badger:buildable_presentation": {
        "icon": "wiki_building",
        "tooltip_title": "wiki_building.title",
        "tactical_description": "wiki_building.tactical_description",
        "tooltip_description": "wiki_building.description",
        "buildable_category": "...",
        "sort_order": 1
      },
      "badger:buildable_structure": {
        "nbt_file": "wiki_building",
        "build_time": 20,
        "construction_start_trigger": "on_construction_start",
        "construction_end_trigger": "on_construction_end",
        "buildable_placed_player_trigger": "on_building_wiki_building"
      },
      "badger:template": [
        "badger:template_tower_with_foundation",
        "badger:component_generate_ruins_default",
        "badger:template_structure_player"
      ]
    }
  }
}
```
Then we are going to add the `badger:map_controller` component with a sub component of `initial_key_values` array and inside that we will set a the value of key "buildable" to any value, for this take we will refer to it as `wiki_building_value`.
```json
      "badger:map_controller": {
        "initial_key_values": [
          {
            "key": "buildable",
            "value": "wiki_building_value"
          }
        ]
      }
```

In the end our basic building will look like this:
```json
{
  "format_version": "1.8.0",
  "minecraft:entity": {
    "description": {
      "identifier": "badger:wiki_building",
      "runtime_identifier": "badger:buildable",
      "is_summonable": true
    },
    "mushroom_data": {
      "function": "Player",
      "type": "Structure"
    },
    "components": {
        "badger:map_controller": {
        "initial_key_values": [
          {
            "key": "buildable",
            "value": "wiki_building_value"
          }
        ]
      },
      "badger:buildable_presentation": {
        "icon": "wiki_building",
        "tooltip_title": "wiki_building.title",
        "tactical_description": "wiki_building.tactical_description",
        "tooltip_description": "wiki_building.description",
        "buildable_category": "...",
        "sort_order": 1
      },
      "badger:buildable_structure": {
        "nbt_file": "wiki_building",
        "build_time": 20,
        "construction_start_trigger": "on_construction_start",
        "construction_end_trigger": "on_construction_end",
        "buildable_placed_player_trigger": "on_building_wiki_building"
      },
      "badger:template": [
        "badger:template_tower_with_foundation",
        "badger:component_generate_ruins_default",
        "badger:template_structure_player"
      ]
    }
  }
}
```

# 2-Adding reference in `aa_map_consts.js`
Now we will need to add the refrence to our `wiki_building_value` in `aa_map_consts.js`.
First lets navigate till we find **MAP_BUILDABLE_IDS** dictionary, it should look like this by defult:
```js
const MAP_BUILDABLE_IDS = {
  TOWER_01: "poi_tower_01",
  TOWER_02: "poi_tower_02",
  TOWER_04: "poi_tower_04",
  PVP_HQ: "pvp_hq",
  WELL_OF_FATE: "poi_zoner_well_of_fate",
  FOUNTAIN: "zoner_village_center_fountain",
  FORT_OUTPOST: "zoner_fort_outpost",
};
```
We will add a **Key** of any name we want in this case we will using **WIKI_BUILDING** and our **wiki_building_value** in the end it should look like this:
```js
const MAP_BUILDABLE_IDS = {
  WIKI_BUILDING: "wiki_building_value", // <-------- Added
  TOWER_01: "poi_tower_01",
  TOWER_02: "poi_tower_02",
  TOWER_04: "poi_tower_04",
  PVP_HQ: "pvp_hq",
  WELL_OF_FATE: "poi_zoner_well_of_fate",
  FOUNTAIN: "zoner_village_center_fountain",
  FORT_OUTPOST: "zoner_fort_outpost",
};
```

Now navigate to **MAP_ICON** dictionary, it should look like this by defult:
```js
const MAP_ICON = {
  PLAYER: "badger:wmap_hero_ranger",
  PLAYER_BLUE: "badger:wmap_hero_blue",
  PLAYER_ORANGE: "badger:wmap_hero_orange",
  PLAYER_WAYPOINT: "badger:wmap_waypoint_player",
  PLAYER_WAYPOINT_TEAMMATE: "badger:wmap_waypoint_teammate",
  PLAYER_ATTACK_WAYPOINT: "badger:wmap_attack_player",
  PLAYER_ATTACK_WAYPOINT_TEAMMATE: "badger:wmap_attack_teammate",
  PLAYER_DEFEND_WAYPOINT: "badger:wmap_defend_player",
  PLAYER_DEFEND_WAYPOINT_TEAMMATE: "badger:wmap_defend_teammate",
  PLAYER_GATHER_WAYPOINT: "badger:wmap_gather_player",
  PLAYER_GATHER_WAYPOINT_TEAMMATE: "badger:wmap_gather_teammate",
  PLAYER_ORIENTATION: "badger:wmap_arrow_marker",
  TEAMMATE: "badger:wmap_teammate",
  TEAMMATE_BLUE: "badger:wmap_teammate_blue",
  TEAMMATE_ORANGE: "badger:wmap_teammate_orange",
  WELL_OF_FATE: "badger:wmap_well_of_fate",
  FACTION_PIGLIN_SMALL: "badger:wmap_piglin_base_small",
  FACTION_PIGLIN_MEDIUM: "badger:wmap_piglin_base_medium",
  FACTION_PIGLIN_LARGE: "badger:wmap_piglin_base_large",
  FACTION_PIGLIN_OUTPOST: "badger:wmap_piglin_outpost",
  DARK_BEACON: "badger:wmap_dark_beacon_base",
  CULTURE_VILLAGER: "badger:wmap_village_fountain",
  MOB_ALLIANCE_CREEPER: "badger:wmap_mob_creeper",
  MOB_ALLIANCE_SKELETON: "badger:wmap_mob_skeleton",
  MOB_ALLIANCE_ZOMBIE: "badger:wmap_mob_zombie",
  TOWER_01: "badger:wmap_knockbacktower",
  TOWER_02: "badger:wmap_frost_tower",
  TOWER_04: "badger:wmap_stun_tower",
  ALLY_01: "badger:wmap_mob_fallen_warrior",
  ALLY_02: "badger:wmap_mob_golem_carrier",
  ALLY_04: "badger:wmap_mob_golem_shield",
  ALLY_05: "badger:wmap_mob_golem_sniper",
  MOUNT_01: "badger:wmap_mount_purple_tiger",
  MOUNT_03: "badger:wmap_mount_giant_beetle",
  MOUNT_04: "badger:wmap_mount_giant_bird",
  MOUNT_06: "badger:wmap_mount_06",
  UNNATURAL_LANDMARK_01: "badger:wmap_shape_green_diamond",
  QUESTION_MARK: "badger:wmap_question_mark",
  PVP_HQ_BLUE: "badger:wmap_outpost_hq_pvp_blue",
  PVP_HQ_ORANGE: "badger:wmap_outpost_hq_pvp_red",
  FAST_TRAVEL_TARGET: "badger:wmap_fast_travel_target",
  FORT_OUTPOST: "badger:wmap_outpost_hq_pvp_blue",
  DESTROYED_BASE: "badger:wmap_destroyed_base",
  DESTROYED_VILLAGE: "badger:wmap_destroyed_village",
  DESTROYED_PLAYER_OUTPOST: "badger:wmap_outpost_hq_pvp_destroyed",
  CLAIMED_AREA_ATTACK: "badger:wmap_base_state_banner_attack",
  CLAIMED_AREA_DEFEND: "badger:wmap_base_state_banner_defend",
  CLAIMED_AREA_OBSTACLE: "badger:wmap_base_state_banner_obstacle",
  WITCH_HUT: "badger:wmap_mob_illager_witch"
};
```
We will add a **Key** of any name we want in this case we will using **WIKI_BUILDING_ICON** and our **Map Waypoint Server Entity Identfier** in the end it should look like this:
```js
const MAP_ICON = {
  WIKI_BUILDING_ICON: "badger:wmap_wiki" //<--------------- Added
  PLAYER: "badger:wmap_hero_ranger",
  PLAYER_BLUE: "badger:wmap_hero_blue",
  PLAYER_ORANGE: "badger:wmap_hero_orange",
  PLAYER_WAYPOINT: "badger:wmap_waypoint_player",
  PLAYER_WAYPOINT_TEAMMATE: "badger:wmap_waypoint_teammate",
  PLAYER_ATTACK_WAYPOINT: "badger:wmap_attack_player",
  PLAYER_ATTACK_WAYPOINT_TEAMMATE: "badger:wmap_attack_teammate",
  PLAYER_DEFEND_WAYPOINT: "badger:wmap_defend_player",
  PLAYER_DEFEND_WAYPOINT_TEAMMATE: "badger:wmap_defend_teammate",
  PLAYER_GATHER_WAYPOINT: "badger:wmap_gather_player",
  PLAYER_GATHER_WAYPOINT_TEAMMATE: "badger:wmap_gather_teammate",
  PLAYER_ORIENTATION: "badger:wmap_arrow_marker",
  TEAMMATE: "badger:wmap_teammate",
  TEAMMATE_BLUE: "badger:wmap_teammate_blue",
  TEAMMATE_ORANGE: "badger:wmap_teammate_orange",
  WELL_OF_FATE: "badger:wmap_well_of_fate",
  FACTION_PIGLIN_SMALL: "badger:wmap_piglin_base_small",
  FACTION_PIGLIN_MEDIUM: "badger:wmap_piglin_base_medium",
  FACTION_PIGLIN_LARGE: "badger:wmap_piglin_base_large",
  FACTION_PIGLIN_OUTPOST: "badger:wmap_piglin_outpost",
  DARK_BEACON: "badger:wmap_dark_beacon_base",
  CULTURE_VILLAGER: "badger:wmap_village_fountain",
  MOB_ALLIANCE_CREEPER: "badger:wmap_mob_creeper",
  MOB_ALLIANCE_SKELETON: "badger:wmap_mob_skeleton",
  MOB_ALLIANCE_ZOMBIE: "badger:wmap_mob_zombie",
  TOWER_01: "badger:wmap_knockbacktower",
  TOWER_02: "badger:wmap_frost_tower",
  TOWER_04: "badger:wmap_stun_tower",
  ALLY_01: "badger:wmap_mob_fallen_warrior",
  ALLY_02: "badger:wmap_mob_golem_carrier",
  ALLY_04: "badger:wmap_mob_golem_shield",
  ALLY_05: "badger:wmap_mob_golem_sniper",
  MOUNT_01: "badger:wmap_mount_purple_tiger",
  MOUNT_03: "badger:wmap_mount_giant_beetle",
  MOUNT_04: "badger:wmap_mount_giant_bird",
  MOUNT_06: "badger:wmap_mount_06",
  UNNATURAL_LANDMARK_01: "badger:wmap_shape_green_diamond",
  QUESTION_MARK: "badger:wmap_question_mark",
  PVP_HQ_BLUE: "badger:wmap_outpost_hq_pvp_blue",
  PVP_HQ_ORANGE: "badger:wmap_outpost_hq_pvp_red",
  FAST_TRAVEL_TARGET: "badger:wmap_fast_travel_target",
  FORT_OUTPOST: "badger:wmap_outpost_hq_pvp_blue",
  DESTROYED_BASE: "badger:wmap_destroyed_base",
  DESTROYED_VILLAGE: "badger:wmap_destroyed_village",
  DESTROYED_PLAYER_OUTPOST: "badger:wmap_outpost_hq_pvp_destroyed",
  CLAIMED_AREA_ATTACK: "badger:wmap_base_state_banner_attack",
  CLAIMED_AREA_DEFEND: "badger:wmap_base_state_banner_defend",
  CLAIMED_AREA_OBSTACLE: "badger:wmap_base_state_banner_obstacle",
  WITCH_HUT: "badger:wmap_mob_illager_witch"
};
```

That is it for the sacond step.

# Adding a case for it in `map_icon_controller.js`
Now we will need to add a case for our building in the `map_icon_controller.js`.
First lets start by navigating to the funcation called **onUpdate**.

Now we will add a case for our building, to do that we will need to first get the buildable which can be done using the `get(MAP_CATEGORY.BUILDABLE)` funcation.
once we the building now we could check if it is our **WIKI_BUILDING** using a switch case to allow for more than one building. If it is our wiki building then we will use the makeEntity(ICON_GROUP.MAIN_ICON, WIKI_BUILDING_ICON) to create our map waypoint.
In the end it should all look somethiing like this:
```js
//UPDATE
onUpdate(() => {

  switch (get(MAP_CATEGORY.BUILDABLE)) {
    case MAP_BUILDABLE_IDS.WIKI_BUILDING:    
        makeEntity(ICON_GROUP.MAIN_ICON, WIKI_BUILDING_ICON);
        break;
  }

  ....
});
```

# Done
if you did everything right and you set up your `wmap_wiki` aka your **Map Waypoint** correctly you should be set.
