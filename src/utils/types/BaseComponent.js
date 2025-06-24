/**
 * @typedef {'SM'|'Modal'|'Button'} ComponentsType
 * @typedef {import('discord.js').ButtonInteraction | import("discord.js").SelectMenuInteraction | import("discord.js").ModalSubmitInteraction} ComponentsInteraction
 */
///Thanks DevXor-Team
/**
 * @typedef  {Object} BaseComponent
 * @property {string} customId - The key of components
 * @property {ComponentsType} type - The type of components
 * @property {import("./index").ComponentsExecute} execute - Action of the components
 */
/**
 * Components element template.
 * @type {BaseComponent}
 */
module.exports = {
  customId: "",
  type: "",
  execute(interaction,{ value,client }) {},
};
