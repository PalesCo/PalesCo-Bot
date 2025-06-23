const { ESPalesCo } = require("palesco.js");

const palescoES = new ESPalesCo();
const palescoMain = palescoES.selectmenu.mains;
const palescoMain2 = palescoES.embeds.mains;
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
    type:"SM",
    customId: palescoMain.main.customId,
    /** @param {import("discord.js").SelectMenuInteraction} interaction*/
  async  execute(interaction,{value}) {
        const supported = palescoMain[value];
        const supported2 = palescoMain2[value];
if (!supported) {
    return interaction.reply({ content: "Not supported now.", ephemeral: true });
}
return await interaction.update({embeds:[supported2],components:supported.row})
    }
}