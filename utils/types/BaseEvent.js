/**
 * @typedef {'rateLimit'|'invalidRequestWarning'|'apiResponse'|'apiRequest'|'ready'|'applicationCommandCreate'|'applicationCommandDelete'|'applicationCommandPermissionsUpdate'|'applicationCommandUpdate'|'autoModerationActionExecution'|'autoModerationRuleCreate'|'autoModerationRuleDelete'|'autoModerationRuleUpdate'|'guildAvailable'|'guildCreate'|'guildDelete'|'guildUpdate'|'guildUnavailable'|'guildMemberAdd'|'guildMemberRemove'|'guildMemberUpdate'|'guildMemberAvailable'|'guildMembersChunk'|'guildIntegrationsUpdate'|'roleCreate'|'roleDelete'|'inviteCreate'|'inviteDelete'|'roleUpdate'|'emojiCreate'|'emojiDelete'|'emojiUpdate'|'guildBanAdd'|'guildBanRemove'|'channelCreate'|'channelDelete'|'channelUpdate'|'channelPinsUpdate'|'messageCreate'|'messageDelete'|'messageUpdate'|'messageDeleteBulk'|'messageReactionAdd'|'messageReactionRemove'|'messageReactionRemoveAll'|'messageReactionRemoveEmoji'|'threadCreate'|'threadDelete'|'threadUpdate'|'threadListSync'|'threadMemberUpdate'|'threadMembersUpdate'|'userUpdate'|'presenceUpdate'|'voiceServerUpdate'|'voiceStateUpdate'|'typingStart'|'webhookUpdate'|'interactionCreate'|'error'|'warn'|'debug'|'cacheSweep'|'shardDisconnect'|'shardError'|'shardReconnecting'|'shardReady'|'shardResume'|'invalidated'|'raw'|'stageInstanceCreate'|'stageInstanceUpdate'| 'stageInstanceDelete'|'stickerCreate'|'stickerDelete'|'stickerUpdate'|'guildScheduledEventCreate'|'guildScheduledEventUpdate'|'guildScheduledEventDelete'|'guildScheduledEventUserAdd'|'guildScheduledEventUserRemove'|'guildAuditLogEntryCreate'} EventsName
 */
///Thanks DevXor-Team
/**

 * @typedef {Object} BaseEvent
 * @property {EventsName} name - Event name
 * @property {boolean} once - Whether the listener should be called only once
 * @property {import("../types/index.ts").EventExecute} execute - listener Function
 */

/**@type {BaseEvent}*/
module.exports = {
  name: "messageCreate",
  once: false,
  execute(message, { client }) {},
};
