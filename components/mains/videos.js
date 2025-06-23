const { ESPalesCo } = require("palesco.js");

const palescoES = new ESPalesCo();
const palescoMain = palescoES.selectmenu.mains;
const palescoVideos = palescoES.embeds.videos;
const palescoVideos2 = palescoES.selectmenu.videos;
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
    type:"SM",
    customId: palescoMain.videos.customId,
    /** @param {import("discord.js").SelectMenuInteraction} interaction*/
   async execute(interaction,{value}) {
        const supported = palescoVideos2[value];
        const supported2 = palescoVideos[value];
if (!supported2) {
    return interaction.reply({ content: "Not supported now.", ephemeral: true });
}
return await interaction.update({embeds:[supported2],components:supported.row})
    }
}