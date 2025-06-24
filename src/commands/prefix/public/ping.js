//const { name } = require("../../../JS/prefixElement.js");
//Thx: DevXor-Team
/**
 * @type {import("../../../utils/types/SlashCommand").SlashCommand}
 */
module.exports = {
    name:'ping',
    description:'Pong!!',
    short:["po"],
    category:"Public",
  async execute({message}) {
await message.reply(`Pong 🏓 ${message.client.ws.ping}ms`)
    }
}