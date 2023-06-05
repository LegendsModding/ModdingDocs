# Intro to World Generation

You can change the world's generation in Minecraft Legends. Setting it up however is a bit tricky at first. This guide will go over generating biomes and features.

## Concepts

In Minecraft Legends, world generation is configured via "deck building" where each biome is a "card." A deck is essentially an array of objects that contain information on how to place a biome. The bsharp scripting API is then responsible for handling the deck. Before we get started, one key has to be deleted in your `RP\game_rules\game_rule.json`, which is `"generator_type"`. This key tells the game to generate a flatland, we don't want that.

## Biomes

In this section, we will attempt to generate the grasslands biome. First we need to build our deck. in your `BP` folder, create a `gamelayer/world_placements` folder. Inside this folder, create a file called `placements_world.json`. Inside this file, copy the code below. Replace `wiki_mod` with your mod identifier.

```json
{
    "factions": [
        {
            "biome": {
                "biome": "grasslands",
                "spread_priority": 1,
                "starting_pixels": 16,
                "total_pixels": 16
            },
            "initial_villages": {
                "small": {
                    "count": 1
                }
            },
            "placement_name": "center",
            "placement_rules": [
                {
                    "game_start": {}
                }
            ],
            "placement_type": "special",
            "spawn_entity": "badger:world_center_locator",
            "tags": ["wiki_mod", "center"],
            "unique_card_id": "badger_center_wiki_mod_center",
            "village_data": "badger:xp_well_of_fate"
        }
    ]
}
```

-   `biome`
    -   Defines the biome for this card
-   `initial_villages`
    -   How many villages are in this card
-   `placement_name`
    -   The name for this card
-   `placement_rules`
    -   Defines how this card will be generated or slotted
-   `placement_type`
    -   The placement type: special, biome, slot
-   `spawn_entity`
    -   Needed for world generation, defines the center of the map
-   `tags`
    -   The tag for the cards
-   `unique_card_id`
    -   This needs to be a unique name, similar to identifiers
-   `village_data`
    -   What type of village will be placed

Now that the deck has been built, we need to tell the game how to handle the deck. This is where the scripting API comes in. In your `BP` folder, create a `scripts_bsharp20/world` folder. In it, create a `world_definition.js` file.

```js
const wikiModWorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        filterManager.AppendFilter(['wiki_mod', 'center'], 1);
    }
};

SNIPPET_InheritsFromGameMode('wiki_mod', () => {
    SetWorldGenDefinition(wikiModWorldGenDefinition);
});
```

This is our deck manager. `wikiModWorldGenDefinition` can be named anything, but this contains the object that filters and manages the deck. `filterManager.AppendFilter` takes in two arguments, an array of tags and an integer. `SNIPPET_InheritsFromGameMode` tells the game that for this type of game mode, it should create this type of world generation. Make sure the tags matches the ones in your deck and the string in `SNIPPET_InheritsFromGameMode` matches your mod identifier.

If everything is done correctly, you should spawn in a meadows biome. Pressing the map key should show you're in a meadows biome and not a flatland.
