
///Thanks DevXor-Team
/**
 * @typedef {Object} SlashCommand
 * @property {any} data - The data of the command
 * @property {import('../types/index').Categorys} category - The category of the command
 * @property {function({client: import('discord.js').Client,interaction:import('discord.js').CommandInteraction,db:import("st.db").Database,utils:import("../types/index").BaseUtils})} execute - Action of the command 
 */
/**
 * Prefix command element template.
 * @type {SlashCommand}
 */
module.exports = {
    data: any,
    category:'',
    execute({client,interaction}) {}
};