# Project Setup

## The premium_cache folder

The `premium_cache` folder is where we will create our mods. You should create a shortcut to the `premium_cache` folder on your Desktop, so you can easily access it at any time.

### Windows

_Tip: You can type %appdata% into the searchbar to jump directly into the 'C:\Users\<USERNAME>\AppData\' folder._

`C:\Users\<USERNAME>\AppData\Roaming\Minecraft Legends\internalStorage\premium_cache`

## Your Workspace

First of all, you will need to create the proper folders in suitable locations and set up your workspace.
_The remainder of this guide assumes you are using VSCode. You may also follow along with other editors._

Let's create your first mod workspace in Visual Studio Code now.

1. Open VSCode (_Visual Studio Code, the code editor_)
2. Create a folder named "`your_pack_name_RP`" in `resource_packs`. **This guide will refer to this folder as `RP`**
3. Create a folder "`your_pack_name_BP`" in `behavior_packs`. **This guide will refer to this folder as `BP`**.
4. Go to `File > Add folder to workspace...` and choose `BP`. Do the same with `RP`.
5. Press `File > Save Workspace as...` to save the workspace file to your Desktop. Whenever you're working on your mod, all you have to do is open the workspace by double-clicking, and you will get quick access to both BP and RP folders.

## BP Manifest

:::tip
In this guide, you will often be instructed to create files with specific names, placed in specific folders. If the folder doesn't exist yet, please create it!
:::

:::warning
Wrongly named files/folders is a common source of errors. Please check your work carefully against the examples.
:::

The manifest is a file that identifies your pack to Minecraft. Every pack has one manifest. A folder with a correctly formatted manifest will show up in Minecraft, and we consider this the "minimal" pack before we can add additional content.

Manifest files are written in `json`. If this isn't familiar to you, you can learn more about json [here](https://wiki.bedrock.dev/guide/understanding-json.html) from the Bedrock Wiki.

First, create a new file in your BP folder by right-clicking on the folder and selecting `New File`. Call the file `manifest.json`. To begin, you can copy paste the following code into the file.

<CodeHeader>BP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": [1, 0, 0],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "type": "data",
            "uuid": "...",
            "version": [1, 0, 0]
        }
    ]
}
```

### Manifest Explained

-   "`format_version`" defines what version of manifest syntax you are using. Version 2 is the most recent stable version; use it.

-   "`name`" is the name of your behavior pack. "`description`" will show up under it in-game. We are defining these files in "code form" so we can translate them later into other languages. For more information about localization, look [here](https://wiki.bedrock.dev/concepts/text-and-translations.html) from the Bedrock Wiki.

-   The "`UUID`" field is **essential**, and will be discussed in more detail below.

-   "`version`" defines the version of your mod. When you import an mod with a newer version on a device with an older version installed, the more recent version will overwrite the older one.

-   "`min_engine_version`" defines the minimum Minecraft client version that'll be able to read your mod.

-   In "`modules`", the "`type`" is defined to be "`data`". This makes your pack a _Behavior Pack_.

### UUID Explained

A UUID (_Universally Unique Identifier_) identifies your pack for other programs (in this case, Minecraft) to read. It looks something like this: `5c830391-0937-44d6-9774-406de66b6984`

**NEVER USE THE SAME UUID TWICE.** You can generate your own UUIDs [here](https://www.uuidgenerator.net/version4) or, if you use VSCode, you can install [this](https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator) extension. Many other tools like _bridge._ generate UUIDS automatically. Every manifest file uses two different UUIDs.

To ensure that your mod will work correctly you should generate two new UUID's which you will paste into the BP `manifest.json` file, at each `"..."`. When you are finished, it should look something like this:

`"uuid": "5c830391-0937-44d6-9774-406de66b6984"`

## RP Manifest

The next step is to create the `manifest.json` for the RP. The format for a resource-pack manifest is nearly identical to a BP manifests except that the `type` is `resources`, which marks the pack as a _Resource Pack_.

Copy the following code into your newly created `RP/manifest.json` and insert your own UUIDs.

<CodeHeader>RP/manifest.json</CodeHeader>

```json
{
    "format_version": 2,
    "header": {
        "name": "pack.name",
        "description": "pack.description",
        "uuid": "...",
        "version": [1, 0, 0],
        "min_engine_version": [1, 16, 0]
    },
    "modules": [
        {
            "type": "resources",
            "uuid": "...",
            "version": [1, 0, 0]
        }
    ]
}
```

## Registering Your Mod

In order for Legends to detect your mod, you need to register your mod's UUID in the `valid_known_packs.json` file. If you don't have a `valid_known_packs.json`, create one.

### Where to find valid_known_packs.json

-   Microsoft Store: `%APPDATA%\Minecraft Legends\games\com.mojang\minecraftpe\valid_known_packs.json`
-   Steam: `%APPDATA%\Minecraft Legends\<some numbers here for Steam>\games\com.mojang\minecraftpe\valid_known_packs.json`

This is what your `valid_known_packs.json` should look like, remember to use the UUID you defined in your `manifest.json`

<CodeHeader>valid_known_packs.json</CodeHeader>

```json
[
    {
        "file_version": 2
    },

    {
        "file_system": "RawPath",
        "path": "C:/Users/<USERNAME>/AppData/Roaming/Minecraft Legends/internalStorage/premium_cache/resource_packs/your_pack_name_RP",
        "uuid": "...",
        "version": "1.0.0"
    },

    {
        "file_system": "RawPath",
        "path": "C:/Users/<USERNAME>/AppData/Roaming/Minecraft Legends/internalStorage/premium_cache/behavior_packs/your_pack_name_BP",
        "uuid": "...",
        "version": "1.0.0"
    }
]
```

## Pack Icon

The pack icon is an image file which identifies how your mod will look in-game. If you have a low-resolution square image, you can use it. Otherwise, download and use this example icon:

![](/images/mod_ico.png)

You should place a copy of your desired image into `RP/dlc_data`. The image needs to be named `icon.jpg`

## Language Files

The last thing to do is setup language support for your mod. You will need to create a language file for the RP. You can learn more about how Minecraft handles localization [here](https://wiki.bedrock.dev/concepts/text-and-translations.html) from the Bedrock Wiki.

<CodeHeader>RP/texts/en_US.lang</CodeHeader>

```json
pack.name=Wiki Resource Pack
pack.description=A Mythical Guide
wiki.title=Wiki Mod Example
```

<CodeHeader>BP/texts/en_US.lang</CodeHeader>

```json
pack.name=Wiki Behavior Pack
pack.description=A Mythical Guide
```

<CodeHeader>RP/texts/languages.json</CodeHeader>

```json
["en_US"]
```

<CodeHeader>BP/texts/languages.json</CodeHeader>

```json
["en_US"]
```

## Checking your Work

If you have done everything correctly, your mod should show up in Minecraft now! Go to Lost Legends & Myths -> My Myths and it should be there!
