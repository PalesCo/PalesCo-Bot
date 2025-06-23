const { ESPalesCo } = require("palesco.js");

const palescoES = new ESPalesCo();
const palescoMain = palescoES.selectmenu.mains;
const palescoHistory = palescoES.embeds.history;
const palescoHistory2 = palescoES.selectmenu.history;
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
    type:"SM",
    customId: palescoMain.history.customId,
    /** @param {import("discord.js").SelectMenuInteraction} interaction*/
   async execute(interaction,{value}) {
        const supported = palescoHistory2[value];
        const supported2 = palescoHistory[value];

if (supported2 && supported) {
    return await interaction.update({embeds:[supported2],components:supported.row})
} else {
    return await interaction.reply({ content: "Not supported now.", ephemeral: true });
}
    }
}