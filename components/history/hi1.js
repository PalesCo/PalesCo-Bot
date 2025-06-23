const { ESPalesCo,PalesCo,DataPalesCo } = require("palesco.js");
const data = new DataPalesCo();
const palescoES = new ESPalesCo();
const palescoMain = palescoES.selectmenu.history;
const palescoHistory = palescoES.embeds.history;
const palescoHistory2 = palescoES.selectmenu.history;
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
    type:"SM",
    customId: palescoMain.hi1.customId,
    /** @param {import("discord.js").SelectMenuInteraction} interaction*/
   async execute(interaction,{value}) {
      const dataEm = data.data.json.text.history.hi1;
      if (value === palescoHistory2.hi1.value.find(value=>value.endsWith("return"))) {
          return await interaction.update({embeds:[palescoES.embeds.mains.history],components:palescoES.selectmenu.mains.history.row})
        }
        if (!dataEm[value]) return interaction.reply({content:'not supported',ephemeral:true})
return await interaction.update({
    embeds:[palescoES.embeds.createEmbedByData(dataEm[value],interaction.user)],
    components:palescoHistory2.hi1.row,
    files:[]
})
    }
}