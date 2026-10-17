**Simple Obsidian plugin which sets the interface zoom level when the application starts.**

# Motivation

On Linux Mint, Obsidian couldn't save/restore this setting for me. So I asked Copilot to write me a plugin for that.

# Usage

1. Create a plugin folder: `<path to your vault>/.obsidian/plugins/juzraai-scale-onload`
2. [Download the files of this repo in a ZIP](https://github.com/juzraai/obsidian-scale-onload/archive/refs/heads/main.zip)
3. Extract the ZIP contents into that folder
4. Edit the percentage value in `main.js` to your liking, e.g.:

```js
const DESIRED_ZOOM_LEVEL_PERCENTAGE = 120;
```

5. Restart Obsidian
6. Enable **juzraai-scale-onload** plugin under *Community plugins*
7. Restart Obsidian
8. Enjoy :)