---
title: Intro to using the World Map 
nav_order: 1
---

# What is the world map 
The world map is 3D with waypoints on it being 3D models

# What the Waypoints on the map are
The waypoints on the map are entities and they have a Server Entity and a Client Entity.
Here is a example of a map waypoint:
Map Waypoint Server Entity Example: **wmap_outpost_hq_blue.json**
```json
{
  "format_version": "1.8.0",
  "minecraft:entity": {
    "description": {
      "identifier": "badger:wmap_outpost_hq_pvp_blue",
      "is_summonable": true,
      "runtime_identifier": "badger:badger_mob"
    },
    "components": {
      "badger:aabb": {
        "height": 1.265625,
        "length": 0.328125,
        "width": 0.421875
      },
      "badger:tags": {
        "tags": ["block"]
      },
      "badger:map3_selectable": {}
    }
  }
}

``` 
Map Waypoint Client Entity Example: **wmap_outpost_hq_pvp_blue.entity.json**
```json
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "components": {
      "badger:map_entity_3d_icon": {},
      "badger:rendering": {
        "definition": "badger:wmap_outpost_hq_pvp_blue"
      }
    },
    "description": {
      "enable_attachables": false,
      "geometry": {
        "default": "geometry.wmap_outpost_hq_pvp_blue"
      },
      "identifier": "badger:wmap_outpost_hq_pvp_blue",
      "materials": {
        "default": "entity_model",
        "mat_wmap_outpost_hq_pvp_blue": "mat_wmap_outpost_hq_pvp_blue"
      },
      "render_controllers": [
        "controller.render.wmap_outpost_hq_pvp_blue"
      ]
    }
  }
}
```

# How the waypoints are displayed on the map
The way points are added to the world map by `the map_icon_controller.js` in `resource_packs\badger\scripts_map_presentation\map_icon_controller.js` using the **makeEntity(ICON_GROUP,ICON)**.
ICON_GROUP is the type of the icon and is refrenced from `aa_map_consts.js` in `resource_packs\badger\scripts_map_presentation\aa_map_consts.js` and for most icons is set to **ICON_GROUP.MAIN_ICON**.
ICON is the **Waypoint** Server Entity.