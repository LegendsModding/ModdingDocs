---
title: Client Entity
---

# Entity

Entitys Consist of 2 Main part the Client Entity and Server Entity this part is about the Client Entity


# Client Entity Documentation

Client entity definitions are contained within a Resource Pack and contain all of the information necessary to describe how an entity should look (model, texture, animation) and sound. To create your own, start by navigating to the "entity" folder inside the root of the Resource Pack. In the entity folder create a JSON file and give it a name. The JSON file needs a format version and minecraft:client_entity information.

The minecraft:client_entity section contains the description for the entity. Under description there are a number of things that you can set about an entity. 

**Example client entity definition JSON for the prismarine item drop**
```
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "components": {
      "badger:rendering": {
        "definition": "badger:item_prismarine",
        "static": true
      },
      "badger:presentation_event": {
        "on_item_collected": {
          "audio": "BAE_hero_pickup_prismarine"
        },
        "on_item_collected_arrived": {
          "audio": "BAE_hero_pickup_prismarine_stop"
        }
      },
      "badger:template": ["badger:template_item_orb"]
    },
    "description": {
      "enable_attachables": false,
      "geometry": {
        "default": "geometry.item_prismarine"
      },
      "identifier": "badger:item_prismarine",
      "materials": {
        "default": "entity_model",
        "mat_item_prismarine": "mat_item_prismarine"
      },
      "render_controllers": ["controller.render.item_prismarine"]
    }
  }
}

```



## Entity Description Properties



### badger:animal_interaction

Handles animal interaction information.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| duration| | How long the animal interaction should last in seconds |
| String| molang_variable| | The molang variable to toggle the pat pat animation on both the animal and the player |
| String| trigger_event| | The presentation event to trigger when the interaction occurs |




### badger:animation_variation

Settings to determine which animation is played based on which interval an action occurs within

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| intervals| | The set of intervals used to determine the molang index based on the last time an action was performed. |
| String| molang_index_name| | The name of the molang used by animation for a given set of intervals. |




### badger:area_overlays

Defines any visual overlay effects applied to this entity, such as auras and attack range circles.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| auras| | Defines a list of aura-type overlays.<br/><h5><p id="filter_team">filter_team</p></h5>When true, the overlay is only visible to allied players.</br><br><h5><p id="layer">layer</p></h5>Defines what layer the aura is rendered to. Valid values: zone, aoi, aura, or overlay</br><br><h5><p id="size">size</p></h5>Size of the overlay, in blocks.</br><br><h5><p id="type">type</p></h5>Defines the type of overlay, which affects when and how it will be rendered. Valid values: default, aura, buff, culture, tower, highlight</br><br><h5><p id="uses_zone_size">uses_zone_size</p></h5>When true, the overlay expands to match the entity's zone of effect. See 'badger:owned_territory'.</br><br><h5><p id="views">views</p></h5>Defines when the overlay should be visible. Valid values: gameplay, placement. Gameplay overlays are active during normal gameplay, and placement overlays are active during buildable placement.</br><br> |
| List| circles| | Defines a list of circle-type overlays.<br/><h5><p id="filter_team">filter_team</p></h5>When true, the overlay is only visible to allied players.</br><br><h5><p id="layer">layer</p></h5>Defines what layer the aura is rendered to. Valid values: zone, aoi, aura, or overlay</br><br><h5><p id="size">size</p></h5>Size of the overlay, in blocks.</br><br><h5><p id="type">type</p></h5>Defines the type of overlay, which affects when and how it will be rendered. Valid values: default, aura, buff, culture, tower, highlight</br><br><h5><p id="uses_zone_size">uses_zone_size</p></h5>When true, the overlay expands to match the entity's zone of effect. See 'badger:owned_territory'.</br><br><h5><p id="views">views</p></h5>Defines when the overlay should be visible. Valid values: gameplay, placement. Gameplay overlays are active during normal gameplay, and placement overlays are active during buildable placement.</br><br> |




### badger:attacker_damage_prediction

Defines presentation behaviour for when the entity anticipates performing an attack that deals damage of a certain hit reaction threshold.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| apply_buff| | The buff applied to the entity about to perform an attack that deals damage of a certain hit reaction threshold. |
| String| hit_reaction_type| | The hit reaction threshold which applies the buff. |




### badger:audio_beat_sync

This component allows an entity to trigger presentation events based on beats or marker triggers from the music.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| receive_only_markers| | If this is true, this entity will not be sent any Beat callbacks, only Marker callbacks. |




### badger:audio_block_scanning

This component provides information for the block scanning system for which biomes to look for and which audio events to play when it finds it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| biomes| | Array of all of the biomes this block scan will look for.<br/><h5><p id="biome_name">biome_name</p></h5>This is the name of the biome the block scan is looking for.</br><br><h5><p id="fmod_event">fmod_event</p></h5>This is the name of the FMOD Event that will start when the biome is found. It's recommended to use a looping sound.</br><br><h5><p id="liquid_only">liquid_only</p></h5>When this bool is true, only liquid type blocks will be valid when detecting a biome type.</br><br> |
| Integer| max_step_dist| | The maximum distance in blocks that this block scanner will go. |
| Integer| min_step_dist| | The minimum distance in blocks that this block scanner will go. |




### badger:audio_interactable

This flags an entity to apply attributes about the audio event that should be played when the player comes into interaction range with this interactable entity and is prompted to interact with it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| enter_range_audio_event| | The name of the audio event that should be played when the player comes into interaction range. |




### badger:audio_molang_to_fmod

This flag component indicates that the entity will update any specified Molang to FMOD audio parameters, these molang parameters are not data driven due to expensive molang calls.



### badger:audio_time_of_day

This flags an entity to apply an FMOD event parameter for 'time_of_day'.



### badger:audio_update_FMOD_projectile_velocity

This flags an entity so its velocity will be sent to FMOD for all of the audio events it triggers.



### badger:audio_vo_sequence_speaker_tag

This flags an entity to apply attributes about a tag that will allow the VO Sequence System to play 3D audio at it's position.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| speaker_tag| | A tag for this entity so that VO sequence audio may be positioned on it. |




### badger:beacon_render_info

Provides a beacon on a village entity

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| states| | A list of beacon states this entity can have. By default the first state is active.<br/><h5><p id="beacon_color">beacon_color</p></h5>Base color to be multiplied onto the beacon texture</br><br><h5><p id="beacon_width">beacon_width</p></h5>Width of Beacon </br><br><h5><p id="emissive_scale">emissive_scale</p></h5>Flat value to scale the emissiveness of the beacon - Default is tuned for near camera beacons</br><br><h5><p id="max_distance">max_distance</p></h5>Maximum distance after this beacon is no longer rendered</br><br><h5><p id="meta_material">meta_material</p></h5>Meta material name used to render beacon</br><br><h5><p id="min_distance">min_distance</p></h5>Minimum distance before this beacon is no longer rendered</br><br> |




### badger:block_source_cull_distance_override

Adds a distance override for the block source culling distance for this entity

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| distance| | Override to the maximum distance from the player at which the block source culling occurs |




### badger:block_source_info

Allows the entity to track the block source information for the current block it's on. This is to detect things like, biome data, water, on the ground, etc...



### badger:block_source_removal

Remove the BlockSourceComponent on the client because this entity doesn't need one.



### badger:boom_camera

Badger's boom camera.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| boom_length| | Length of the camera boom. |
| Decimal| control_react_spring| | How quickly the camera reacts when the target starts moving. |
| Decimal| control_stop_spring| | How quickly the camera reacts to the target stopping. |
| Decimal| follow_spring| | The amount of spring the camera has when following the target. |
| Decimal| max_follow_distance| | Maximum distance the camera can be from the follow target. |
| Decimal| max_pitch| | Maximum pitch of the boom camera. |
| Decimal| min_pitch| | Minimum pitch of the boom camera. |
| Decimal| starting_pitch| | The initial pitch of the boom camera. |
| Decimal| starting_relative_yaw| | The initial yaw of the boom camera. |
| Decimal| target_vertical_offset| | Vertical offset from the camera's follow target. |




### badger:cam_overrides_look_orientation

Attach to a camera to indicate whether a camera overrides the direction the player looks when they move



### badger:cam_overrides_move_orientation

Attach to a camera to indicate whether a camera inhibits the player from moving



### badger:camera_avoidance

Badger's main camera avoidance logic.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| camera_disk_radius| | Camera disk radius to use to move camera for avoidance. |
| Decimal| camera_in_geometry_radius| | Radius of sphere around camera to determine if it is in world geometry. |
| Decimal| distance_from_obstacle| | Distance from object impeding the camera when avoidance is triggered |
| Decimal| ease| | Easing lerp to get camera back to normal non-avoidance position |
| Decimal| min_distance_from_target| | Minimum distance camera  is allowed to be within of target when avoiding. |
| Decimal| snap| | Snapping lerp to get camera to avoidance position |
| Decimal| target_disk_radius| | Target disk radius to use to move camera for avoidance. |
| Decimal| target_vertical_offset| | Vertical offset from target that should use as anchor avoidance/follow point. |




### badger:camera_bounds

Describes how and when a camera makes rotational and/or positional changes

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| hard_bounds_cone_angle| | Angle for the spherical cone that will determine the width of non-movement of the camera. |
| Decimal| look_priority| | Priority percentage given to the look target in comparison to the follow target when there is a follow target. If there is no follow target, the look target takes full priority. Value between [0.0f, 1.0f], inclusive. If 0.5f priority given camera will focus on a spot halfway between the look and follow target. If 1.0f priority given camera will focus on the look target. |
| Decimal| look_smoothing_spring| | Smoothing Spring constant determining how long the spring takes to get the camera to the appropriate orientation. |
| Decimal| position_smoothing_spring| | Smoothing Spring constant determining how long the spring takes to get the camera to the appropriate position. |
| Decimal| soft_bounds_scale| | Scale applied to the spherical cone used to recenter the camera IF the hard bounds spherical cone angle has been broken. |




### badger:camera_distance_activation

Describes the range this camera can activate in.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| distance| | The distance from the camera to it's look target. This determines the range this camera will try to activate in. |




### badger:camera_input_layout_override

Defines how cameras can override an existing input layout.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| layout_name| | The name of the input layout. |




### badger:camera_locomotion

Alters the camera position based on follow target's locomotion

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| default_seconds_ahead| | Default amount of seconds to multiply the follow taget's average velocity with in order to position the camera ahead of the follow target. |
| List| pitch_modifiers| | List of pitch angle [0, 360] modifiers written in ascending order. These modifiers are used to identify which yaw modifiers should be applied for the camera positioning. Note, this angle is the difference in pitch between the player's velocity vector and the camera look pitch.<br/><h5><p id="angle">angle</p></h5>Angle boundary in degrees [0,360]. Note we interpolate between these boundaries.</br><br><h5><p id="yaw_modifiers">yaw_modifiers</p></h5>List of yaw angle modifiers [0, 360] written in ascending order. These modifiers are used to identiify which additive changes we should apply to our seconds ahead and camera positioning calculation. This angle is the difference in yaw between the player's velocity vector and the camera look yaw.</br><br><h5><p id="angle">angle</p></h5>Angle boundary in degrees [0,360]. Note we interpolate between these boundaries.</br><br><h5><p id="seconds_ahead_delta">seconds_ahead_delta</p></h5>Additive change in seconds ahead amount if modifier met</br><br> |
| List| speed_modifiers| | List of possible speed modifiers.<br/><h5><p id="seconds_ahead_multiplier">seconds_ahead_multiplier</p></h5>Multiplying change in seconds ahead amount if modifier met</br><br><h5><p id="speed">speed</p></h5>Speed boundary. Note we interpolate between these boundaries.</br><br> |
| Integer| ticks_to_average_velocity_over| | Amount of ticks we use to create our average velocity. The larger this is the more 'smooth' changes in camera positioning compared to changes in velocity. 10 is a good baseline. |




### badger:camera_show_indicators

Describes whether or not the camera is able to see circular indicators under mobs.



### badger:camera_show_zone

Describes whether or not the camera be able to see zones.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| show_all_zones| | When set to true, this camera will display all zones in preview |
| Decimal| zone_distance| | The distance that this camera should show zones at |




### badger:cinematic_camera

Attach to a camera to indicate that it's used in the cinematic system as a camera.



### badger:clamp_camera

Badger's boom camera.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| horizontal_clamp| | Horizontal clamp for the camera. |
| Decimal| vertical_clamp| | Vertical clamp for the camera. |




### badger:decal_visualization

Optional parameters to control how decals are rendered.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| alpha| | Sets the opacity of the decal. |
| Integer| animation_frame_count| | Number of frames in the decal's animation |
| Integer| animation_framerate| | Framerate of the decal's animation |
| Boolean| apply_to_owned| | Bitwise flag for checking if rendered object entity is in a valid team. |
| Boolean| apply_to_unowned| | Bitwise flag for checking if rendered object entity is not in a team. |
| String| bin| | Name of the group to organize the decal. |
| Vector [a, b, c]| decal_size| | Size of the decal in blocks. May be overridden by code. |
| String| decal_textures| | When set, will use the stated textures for this decal, defaulting to the first. Textures after the first can be switched to via code |
| Decimal| fade_out_start| | Duration in seconds to begin fading out the decal. |
| Vector [a, b, c, d]| fill_color| | A vector 4 of the color of the fill [R,G,B,A]. |
| Boolean| height_fade| | Bitwise flag for enabling height fade. |
| Decimal| height_fade_center| | Vertical position of the decal to center the opacity fade. |
| Decimal| height_fade_height| | Vertical offset from HeightFadeCenter to lower opacity. |
| Boolean| is_symmetric_texture| | Bitwise flag for mirroring the texture vertically and horizontally. |
| Decimal| lifetime| | When set and > 0, the decal disappears after this many seconds. |
| Boolean| linear_pulse_mode| | Bitwise flag for selecting whether to use the shape of the distance function or object z position for the pulse size. |
| Boolean| mask_entities| | Bitwise flag for checking if rendered object is an entity. |
| Boolean| normal_mapped| | Boolean for whether a normal map for the decal texture exists. |
| Vector [a, b, c, d]| outline_color| | A vector 4 of the color of the outline [R,G,B,A]. |
| Decimal| outline_softness| | Size of the edge gradient of the outline. |
| Decimal| outline_thickness| | Size of the outline of the decal. |
| Vector [a, b, c, d]| pulse_color| | A vector 4 of the color of the pulse [R,G,B,A]. |
| Decimal| pulse_count| | Number of times to repeat the pulse. |
| Decimal| pulse_softness| | Size of the edge gradient of the pulse. |
| Decimal| pulse_speed| | Speed over global time the pulse increases in size. |
| Decimal| pulse_thickness| | Size of the pulse decal. |
| Vector [a, b, c]| rotation_center| | Local vector 3 position for the pivot point of rotation. |
| String| shape| | Shape type of the decal. |
| Boolean| sliced_texture| | Bitwise flag for slicing the texture atlas correctly if symmetric. |
| Integer| sort_key| | Sorting index. |
| Decimal| sparkle_blink_speed| | Frequency of the sparkles blinking. |
| Decimal| sparkle_density| | Density of the sparkles. |
| Decimal| sparkle_movement_speed| | Speed of the sparkles moving about the decal. |
| Decimal| sparkle_size| | Size of the sparkles. |
| Decimal| sparkle_strength| | Opacity of additive sparkles. |
| Boolean| start_enabled| | When true, this decal will be enabled and visible when spawned. When false, it will not render unless code is in place to cause it to do so. |
| Decimal| texture_slice_corner_size| | Amount from [0.0-1.0] to trim the corner of the square texture. |
| Decimal| yaw| | Sets the yaw rotation of the decal. |




### badger:decoration_collider_request

Define the decoration collider to be attached to an entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| name| | Archetype name of the decoration collider. |




### badger:entity_age

Enables the age timer.



### badger:face_animation

Defines facial animation properties for the entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Positive Integer| anim_columns| | The number of columns in the animation texture page. |
| Positive Integer| anim_rows| | The number of rows in the animation texture page. |
| Positive Integer| blink_frame| | Frame index for blinks. |
| Array| blink_time_closed| | Range (in seconds) to hold blink frame. |
| Array| blink_time_open| | Range (in seconds) to hold non-blink frame. |
| Positive Integer| default_frame| | Default frame index. |




### badger:fast_travel_presentation

Defines the entity's presentation event & molang variable names for fast travel.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| cooldown| | The name of the cooldown presentation event & molang variable. |
| Decimal| cooldown_event_time| | The time, in seconds, when the fast travel end trigger event is triggered after initiating fast travel. |
| JSON Object| fade_to_black| | The data containing a fade to black screen transition |
| String| windup| | The name of the windup presentation event & molang variable. |
| Decimal| windup_event_time| | The time, in seconds, when the fast travel start trigger event is triggered after initiating fast travel. |




### badger:hero_lure_presentation

Defines the entity's presentation event names for hero lure.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| start_trigger| | The name of the start presentation event. |
| String| stop_trigger| | The name of the stop presentation event. |




### badger:hit_reaction_threshold

Defines this entity as a hit reaction threshold prototype.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| activation_percent| | The percentage of target's max health that attacking damage will do, on the range [0,1]. |




### badger:hud_message_interaction_failed

This describes HUD messages to show if we have a failed interaction that requires a resource/unlock cost.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| resource_cost_failed_message| | Defines the HUD message that will be shown if the player doesn't have resources for the interaction cost.<br/><h5><p id="hud_message_args">hud_message_args</p></h5>Arguments to pass into the HUD message. Message needs to support arguments.</br><br><h5><p id="hud_message_id">hud_message_id</p></h5>HUD message id from hud_text_messages.json</br><br> |
| JSON Object| unlock_cost_failed_message| | Defines the HUD message that will be shown if the player doesn't have resources for the unlock.<br/><h5><p id="hud_message_args">hud_message_args</p></h5>Arguments to pass into the HUD message. Message needs to support arguments.</br><br><h5><p id="hud_message_id">hud_message_id</p></h5>HUD message id from hud_text_messages.json</br><br> |




### badger:input_actions

Defines the entity's input mapping of possible actions.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| action_name| | The name of the action. |
| String| action_targeting_type| | The targeting type of the action. Can be set to "none", "directional" or "target" |
| String| input_action_mode| | Controls the action's effect, whether it is instant or sustained over time. Can be set to "trigger" or "sustain" |
| String| input_id| | The button id from the input overlay. e.g. button.charge. |
| String| target_facing| | The relative direction to shoot in e.g. player_facing (only valid when action type is set to target) |
| Decimal| target_range| | The range of the target (only valid when action type is set to target) |




### badger:interaction_presentation

Defines toggles to enable or disable certain interaction presentation events from firing when interacting with this entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Boolean| trigger_generic_events| true| When true, will trigger generic presentation events when interacted with (archetype doesn't matter). Can be combined with specific events. |
| Boolean| trigger_specific_events| false| When true, will trigger archetype specific presentation events when interacted with. Can be combined with generic events. |




### badger:interpolation

Defines the entity's interpolation parameters.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| orientation_interpolation_steps| | How many fixed update ticks (there are 20 per second) an interpolation of an orientation change takes. Default is 1, the value can be greater then 1 but also be a fraction (for example 0.5f). |
| Decimal| position_interpolation_steps| | How many fixed update ticks (there are 20 per second) an interpolation of an position change takes. Default is 1, the value can be greater then 1 but also be a fraction (for example 0.5f). |
| Decimal| position_interpolation_steps_y_down| | How many fixed update ticks (there are 20 per second) an interpolation of an position change while falling downwards takes. Default is 1, the value can be greater then 1 but also be a fraction (for example 0.5f). |




### badger:invasion_icon

The colour for the backing of the healthbar icon during invasions

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| icon_color| | The The RGBA value of the icon colour. Formatted as an array |




### badger:invulnerability_heartbeat_view

This component provides which audio events to play when the invulnerability heartbeat pulses.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| audio_bae_event| | This is the name of the Audio BAE Event that will start when the invulnerability render pulse occurs. It's recommended to not use a looping sound. |




### badger:keep_alive_timer

Defines the settings for keeping client-side entities alive after they have died.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| time| | How much time, in seconds, the entity will stay alive for after it has died, before being unloaded. |
| Decimal| time_if_refunded| | How much time, in seconds, the entity will stay alive for after it has died, before being unloaded IF it dies due to refund. |
| Boolean| trigger_event_only_on_death| false| If true, the on_death event will only be triggered if the entity died due to reaching zero health. |




### badger:knockback_reaction_threshold

Defines this entity as a knockback reaction threshold prototype.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| activation_value| | The amount of knockback force that an attacking entity needs to do. |




### badger:locator

This flags an entity that it is used as a locator for vfx



### badger:locator_effect

Defines how effects are spawned at given locators.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| effect_file| | The name of the effect file to use. |
| String| locator| | The name of the locator to bind the particle effect to. |
| Array| particle_effects| | The container that holds the data for each tyep of particle effect. |
| Decimal| removal_time| | The time delay between when the effect is disabled and when to remove it. |




### badger:lookat

Defines the ability for an entity to look at other things.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| joint| | Defines the joint to adjust for the look at. |
| String| look_at_axis| | The axis of the look joint that should be rotated, defaults to y |
| Decimal| max_angle| | Defines the max angle a head can turn. |
| Decimal| max_range| | Defines the max range that this entity will look at. |
| Decimal| min_range| | Defines the min range that this entity will look at. |
| Decimal| turning_delta| | Defines how many degrees per frame the head will turn to target. |




### badger:map3_child_offset

Used on a Map Entity (for World Map 3), defines a relative offset another Map Entity can use (like a VFX entity).

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| x| | X offset. |
| Decimal| y| | Y offset. |
| Decimal| z| | Z offset. |




### badger:map3_copy_local_camera_orientation

Map entity will inherit the local camera's orientation.



### badger:map3_copy_orientation

Map entity will inherit the icon entity's (and game entity) orientation.



### badger:map_entity_3d_icon

Map Entity (for World Map 3) will have an icon on the map screen



### badger:map_icon_offset

Adds an offset to an map source entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| x| | X offset. |
| Decimal| y| | Y offset. |
| Decimal| z| | Z offset. |




### badger:mount_molang

Defines the molang variable name to be used when this entity is mounted.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| mount_variable| | The molang variable name that is set when this entity is mounted. |




### badger:music_2d_emitter

Defines the 2D Music emitter component. Attaching this to an entity allows it to interface with the music system and determine what music to play.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Array| audio_parameters| | An array of FMOD parameters to set when this emitter activates. "param_name": <int_value> |
| String| heatmap_influence_global_music_parameter| | Name of the global music parameter in FMOD where the heatmap influence should be sent if this music emitter is spawned by a heatmap. |
| Decimal| max_distance| | How far away the local player is before the emitter activates |
| Array| music_states| | An array of different states this emitter can be in. Active state is determined by the music_emitter_states component |
| String| on_enter_bae| | The name of the audio event to request when this emitter activates |
| Integer| priority| | Determines which emitter to choose when more than one is active. Higher is more priority. |
| String| state_name| | Name of the state for Debugging |




### badger:music_emitter_states

Defines the current state of this music emitter entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| List| badger:music_emitter_states| | A list of the current states this emitter can be in. This must match the resource_pack music_states for badger:music_2d_emitter. |




### badger:on_destruction

This flags an entity to apply attributes with the details about the entity to spawn when the applied-to entity is destroyed.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| locator| | The locator at the position where the new entity should be spawned |
| String| spawn_entity| | The archetype name for the entity that should be spawned |




### badger:orbital_arm

Settings that define how a camera orbits a follow target while focusing on a look target.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| end_arm_height| | Minimum amount the camera can zoom in along the height arm. |
| Decimal| end_arm_length| | Minimum amount the camera can zoom in along the length arm. |
| Decimal| horizontal_lerp| | How smoothly the orbital arm follows its targets on the horizontal plane, on the range (0,1]. |
| Decimal| start_arm_height| | The height offset of the arm, measured from the follow target. |
| Decimal| start_arm_length| | The length of the arm, measured from the follow target. |
| Vector [a, b, c]| target_offset| | The offset from the follow target to rotate around. |
| Decimal| vertical_lerp| | How smoothly the orbital arm follows its targets on the vertical plane, on the range (0,1]. |
| Decimal| zoom_cursor_multiplier| | A multiplier to drive the amount of zoom relative to cursor distance. Larger numbers means greater cursor distance change is needed for same amount of zoom |
| Decimal| zoom_lerp| | How smoothly the orbital camera zooms in and out, on the range [0,1]. |




### badger:placement_molang

Defines the molang string sent for structure placement

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| name| | Defines the tag string |




### badger:point_lights

Defines point lights possibly attached to entity locators.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Vector [a, b, c]| color| | Color of light (can also be a Molang expression per channel). |
| Decimal| enabled| | Is the light enabled (can also be a Molang expression). |
| Decimal| falloff_power| | Power of rate of falloff for light (can also be a Molang expression). |
| Decimal| intensity| | Intensity of light (can also be a Molang expression). |
| Array| lights| | Container for the list of lights. |
| String| locator| | The name of the locator to bind the light to (optional). |
| Vector [a, b, c]| offset| | Offset for light, in local space (can also be a Molang expression per channel). |
| Decimal| radius| | Radius of light (can also be a Molang expression). |




### badger:presentation_event

Defines the presentation triggers this entity can respond to, and the animation events to play.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| JSON Object| animation| | Descriptor for an animation object. |
| String| attachment| | Descriptor for an attachment object. |
| JSON Object| audio| | Descriptor for an audio effect object. |
| JSON Object| beacon| | Descriptor for an beacon effect object. |
| JSON Object| distance_curve| | Details for how the duration curve will be impacted due to distance between the event sender and the client player.<br/><h5><p id="min_range">min_range</p></h5>Minimum Distance whereby any distance smaller than or equal will be treated as 1.0f multiplier.</br><br><h5><p id="multiplier_function">multiplier_function</p></h5>Multiplier Curve that will be used to process the distance curve.</br><br><h5><p id="range">range</p></h5>Maximum distance whereby any distance greater than or equal will be treated as a 0.0f multiplier.</br><br> |
| JSON Object| duration_curve| | Details for how you want the duration curve to look<br/><h5><p id="duration">duration</p></h5>The duration of the rumble in seconds, note if there is a start delay, this duration does not start until AFTER that delay.</br><br><h5><p id="in_duration">in_duration</p></h5>Amount of time it takes to get from Minimum to Max Rumble Strength.</br><br><h5><p id="in_easing_function">in_easing_function</p></h5>Function used to ease into the rumble (i.e. at the initiation of the rumble).</br><br><h5><p id="minimum_strength">minimum_strength</p></h5>The Minimum of the curve, at start of rumble this will be the first amount set and the amount the easing_out will move towards.</br><br><h5><p id="out_duration">out_duration</p></h5>Amount of time it takes to get from Rumble Max to Minimum strength</br><br><h5><p id="out_easing_function">out_easing_function</p></h5>Function used to ease out of rumble (i.e. at the tail-end of the rumble.</br><br><h5><p id="pulse_duration">pulse_duration</p></h5>The duration of the pulse in seconds. Note that this will be uniform so the number of pulses will be the duration / pulse_duration. Therefore the duration must be divisible by the pulse to get an integer of pulses.</br><br><h5><p id="start_delay">start_delay</p></h5>The amount of time we delay before we start the initial rumble.</br><br><h5><p id="strength">strength</p></h5>The Maximum strength of the rumble that the in_easing_function will move towards.</br><br> |
| JSON Object| invulnerability_decal| | Descriptor for a visual only invulnerability decal. |
| String| outline| | Descriptor for an outline object |
| Boolean| override| | Boolean value determining whether this type of rumble can override other rumble events |
| JSON Object| particles| | Descriptor for an particle effect object. |
| Integer| priority| | The priority of this rumble event, lower integer value means higher priority |
| String| script| | Descriptor for the script name to execute on trigger |
| String| spawn_entity| | If the handler is a single string, then it's spawning only a single entity with 100% chance of success. |
| String| visual_state| | Descriptor for a visual state object. |




### badger:projectile_trail_request

Determine a projectile trail from projectile trail collection.



### badger:removal_time

destroys an entity after a given period of time

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| presentation_event| | Name of the presentation event to fire when the timer triggers |
| Boolean| sync_presentation_event| | Whether or not the event should be synced over the server, or if it should be local only |
| Decimal| time| | Amount of time in seconds before the entity is destroyed |




### badger:rendering

The rendering parameters for the entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| definition| | The name of the rendering definition to use. |
| Integer| limit| 1024| Setting sets a maximum limit to number of instances for an entity |
| Boolean| render_controllers_are_constant| | Flag to indicate if the render controllers should be reprocessed each frame. |
| Boolean| static| | Flag to indicate the entity type requires a static intitialization render pass. |




### badger:respawn_trigger

The trigger that occurs when an entity is respawned

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| trigger| | The trigger event to send when an entity respawns |




### badger:rig_operations

Specifies a list of rig operations to apply.



### badger:rotation_presentation

Defines clientside presentation-related tunings for rotation.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| rotation_stop_presentation_event_delay| | Defines the delay after rotation ends before the stop presentation event is sent. This can be used to avoid excessive event triggering when rapidly starting and stopping rotation. |




### badger:skin

Defines the entity with this data as a clientside skin archetype

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| archetype| | The name of the base archetype that this clientside skin is for. Gameplay behaviour will be inherited from this base archetype.. |




### badger:smooth_look_at

Settings for smoothing camera look.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| focus_radius| | The radius around the look target that will trigger smoothing if the target moves beyond it. |




### badger:speed_data_to_fmod

This component allows an entity to send data related to its speed to FMOD. It sends its speed and it's Y velocity to the FMOD parameters specified in data.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| fmod_speed_param| | This is the name of the FMOD Parameter we're converting the entity's speed parameter to. |
| String| fmod_velocity_y_param| | This is the name of the FMOD Parameter we're converting the entity's Y velocity parameter to. |
| Decimal| max_speed| | The maximum value we want to track for the entity's speed parameter. Setting this will normalize the parameter value between the min and max. |
| Decimal| max_velocity_y| | The maximum value we want to track for the entity's Y velocity parameter. Setting this will normalize the parameter value between the min and max. |
| Decimal| min_speed| | The minimum value we want to track for the entity's speed parameter. Setting this will normalize the parameter value between the min and max. |
| Decimal| min_velocity_y| | The minimum value we want to track for the entity's Y velocity parameter. Setting this will normalize the parameter value between the min and max. |




### badger:terrain_type_molang

Specify that an entity should define and update the 'variable.terrain_type' molang variable



### badger:threat_owner

Defines this entity as a host for music threat level.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| decay_rate| | How fast threat value interpolates when decaying towards base value. |
| Decimal| grow_rate| | How fast threat value interpolates when increasing towards base value. |
| Decimal| influence_distance| | How far away will this host broadcast it's threat level. |
| Decimal| max_threat| | Max possible threat value for this host. |
| Decimal| min_threat| | Min threat value for this host. |




### badger:threat_source

Defines this entity as a contributor to threat level for an owning source village/base.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| base_value| | How much threat this entity contributes after the transition time has passed. |
| Decimal| spawn_value| | How much threat this entity contributes when spawned. |
| Decimal| transition_time| | Time in seconds it takes for this entity to transition in threat value from the spawn value to the base value. |




### badger:toggleable_decorative_child

Defines an entity archetype to add as a child of this entity, that will be destroyed and recreated as necessary to hide and display it.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| child_entity_id| | Defines the name of the entity archetype to use. |
| Integer| molang_variant_id| | Sets the molang parameter 'variable.variant_id' on the child when it is created. This is used to create visual variants of the child entity using things like material swaps. |
| Boolean| start_enabled| | Defines whether the child should be enabled by default. |




### badger:variable_propagation

Allows specification of what variables propagate from a parent to a parented entity



### badger:verlet_dynamics

Specifies a list of verlet dynamics to apply.



### badger:visual_only_invulnerability_decal

Triggers invulnerability decal on entity along with offsets for modifying the bounds of the AABB stored by the decal

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Vector [a, b, c]| max_aabb_subtractive_offset| | Offset vector to subtract from max AABB bound of the decal |
| Vector [a, b, c]| min_aabb_additive_offset| | Offset vector to add to min AABB bound of the decal |
| List| states| | A list of invulnerability states this entity can have. By default the first state is active. |




### badger:visualize_local_player_allegiance

This flags an entity to apply a molang variable encoding allegiance to the local player for visual purposes.



### minecraft:camera

Defines Badger functionality to the existing Bedrock camera.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| far_plane| | The far clipping plane distance. |
| Decimal| field_of_view| | The angle in degrees that determines the visible area from the camera's perspective |
| Decimal| max_shadow_range| | Constrains the range of the shadow cascades by overriding the max shadow distance. |
| Decimal| min_shadow_range| | Constrains the range of the shadow cascades by moving the starting point further from the camera. |
| String| name| | Identifies the type of camera. |
| Decimal| near_plane| | The near clipping plane distance. |
| Vector [a, b, c]| orientation| | In degrees: The pitch around the x axis, yaw around the y axis, and roll around the z axis. |
| Vector [a, b, c]| position| | The location of the camera in world coordinates. |
| Integer| priority| | The priority of this camera relative to other cameras. This is used to resolve conflicts when multiple cameras can activate. |
| Boolean| render_player_model| | Determines if the player's model should render while this camera is active. |
| Integer| sensitivity_input_option| | Identifies which user camera sensitivity slider to refer to. |
| Decimal| shadow_depth_bias| | Overrides the depth bias used for shadow cascades. |
| Decimal| shadow_slope_bias| | Overrides the slope bias used for shadow cascades. |




### minecraft:camera_attach

Describes how a camera entity should attach to another entity.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| locator| | The name of the locator where the camera will be attached. |
| Vector [a, b, c]| offset| | The offset from the locator/entity where the camera will be attached. |
| Boolean| use_locator_orientation| | True if the camera should use the locator's orientation as it's view orientation. |




### minecraft:camera_avoidance

Describes how cameras that orbit a target should avoid collision and occlusion.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| String| relax_distance_smoothing_spring| | How quickly the camera will return to it's desired distance once a collison or occulsion is cleared. |




### minecraft:camera_blend_in_default

Describes how a camera can pitch around the x axis and yaw around the y axis.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| blend_time| | The duration of the blend in seconds. |
| Boolean| camera_to_accepts_input| | Determines if the camera being blended to will accept input during the blend. |
| String| ease| | The type of easing function used to control the blend. |
| Decimal| input_dampening_coefficient| | Dampens the input on the camera to if the camera to is accepting input during the blend. |




### minecraft:camera_fly

Describes how a camera flies around.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| speed| | The speed of the camera when flying. |
| Decimal| speed_alt| | The alternative speed of the camera when flying. |
| Decimal| sprint_multiplier| | The multiplier set by /sprint of the speed of the camera when flying. |




### minecraft:camera_look_at

Describes how a camera frames it's look target.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Vector [a, b]| hard_bounds_max| | The top right coordinates of the hard bounds. |
| Vector [a, b]| hard_bounds_min| | The bottom left coordinates of the hard bounds. |
| Vector [a, b, c]| look_at_offset| | Offsets the point that the camera looks at in look target relative space. |
| Decimal| look_target_vertical_offset| | Offsets the point that the camera looks at up or down in world space. |
| Vector [a, b]| soft_bounds_max| | The top right coordinates of the soft bounds. |
| Vector [a, b]| soft_bounds_min| | The bottom left coordinates of the soft bounds. |
| Decimal| soft_bounds_smoothing_spring| | How quickly the camera's orientation will correct to keep it's look target within the soft bounds. |




### minecraft:camera_orbit

Describes how a camera orbits around it's follow target.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| azimuth_smoothing_spring| | How quickly the camera's azimuth will correct to match the desired azimuth. |
| Decimal| distance_smoothing_spring| | How quickly the camera's distance will correct to match the desired distance. |
| Decimal| pivot_point_vertical_offset| | Offsets the point that the camera orbits around up or down. |
| Decimal| polar_angle_max| | Maximum polar angle. |
| Decimal| polar_angle_min| | Minimum polar angle. |
| Decimal| polar_smoothing_spring| | How quickly the camera's polar angle will correct to match the desired azimuth. |
| Decimal| radius| | The ideal distance the camera will keep from it's follow target. |




### minecraft:camera_speed_modifier

Used as a multiplier for the fly camera / first person camera.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| look_at_speed_modifier| | Multiplier for the look at speed. |
| Boolean| slow_mode_modified_by_sprint| | Boolean for whether or not slow mode speed is affected by sprint multiplier. |
| Decimal| translation_speed_modifier| | Multiplier for the translation speed. |




### minecraft:first_person_look

Describes how a camera can pitch around the x axis and yaw around the y axis.

| Type| Name| Default Value| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| Decimal| pitch_max| | The maximum pitch angle in degrees that the camera can have. |
| Decimal| pitch_min| | The minimum pitch angle in degrees that the camera can have. |




### minecraft:follow_target

A target to follow.



### minecraft:look_target

A target to look at.



## identifier

The identifier is used to register the entity with the server. In the Client Entity Definitions JSON the identifier sets the appearance of the entity(materials, textures, geometry, etc.) The matching identifier in the Entity Behavior JSON in the Behavior Pack is what gives the entity its behaviors.



## materials, textures, animations

Players can set the materials, texture and geometry used for the entity in this section. Players can set one or more materials, textures, and geometries that can be used by the mob. Players must set user defined names for them. These names are used in the Render Controllers JSON. Players can reference materials, textures, and geometry from the vanilla Minecraft Resource Pack or create their own.  Custom materials, textures, and geometry should be in the corresponding folder at the root of the Resource Pack.



## scripts

Scripts allow players to use MoLang to compute calculations once and store that value. This value than can be used over and over again without the need to constantly recompute the calculations. Scripts currently support pre - animation and scale.More script types will be added later.
-Pre-animation scripts are evaluated immediately before animations are processed.
-Scale sets the scale of the mob's geometry.


**Example pre-animation script for cod**
```
"scripts": {
  "pre_animation": [
    "variable.ZRot = !query.is_in_water ? Math.cos((query.time_stamp + global.frame_alpha) * 14.32) * 90 : 0.0;",
    "variable.AnimationAmountBlend = Math.lerp(variable.AnimationAmountPrev, variable.AnimationAmount, global.frame_alpha);"
  ]
},
```

**Example scale script for the bat**
```
"scripts": {
  "scale": "0.35"
},
```



## animations

Allows the player to assign names to reference the long name for animations. These names are used by the animation controller JSON. Players can reference animations from the vanilla Minecraft Resource Pack or create their own. Custom animations should be in the animation folder at the root of the Resource Pack.



## render_controllers

Specifies the names of render controllers. This name needs to match the name of a corresponding JSON located in the Render Controllers folder. Players can reference Render Controllers from the vanilla Minecraft Resource Pack or create their own. Custom Render Controllers should be in the textures folder at the root of the Resource Pack.



## enable_attachables

Legacy, not used.

