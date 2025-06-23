const {PalesCo,ESPalesCo, DataPalesCo} = require("palesco.js");
const palescoES = new ESPalesCo();
/**
 * @type {import("../../../utils/types/PerfixCommand").PrefixCommand}
 */
module.exports = {
    name:"palesco",
    description:"The main command",
    short:['p','palestine'],
    category:"Main",
 async execute({message}) {
await message.reply({
    embeds:[palescoES.embeds.mains.main],
    components:palescoES.selectmenu.mains.main.row
})
    }
}