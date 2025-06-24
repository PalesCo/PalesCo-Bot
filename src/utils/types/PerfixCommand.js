
/**
 * @typedef {Object} PrefixCommand
 * @property {string} name - The name of the command
 * @property {string} description - The description of the command
 * @property {string[]} [short] - Shortcuts for the command
 * @property {import('./index').Categorys} category - The category of the command
 * @property {function({client:import('discord.js').Client,message:import('discord.js').Message,args:string[]})} execute - Action of the command
 */
/**
 * Prefix command element template.
 * @type {PrefixCommand}
 */
module.exports = {
  name: "ping",
  description: "Say pong",
  short: ["Pg"],
  category: "Public",
  execute({client,message, args}) {},
};
