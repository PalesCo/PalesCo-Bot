require("dotenv").config();
require('module-alias/register');
const client = require("@utils/JS/client.js");

//Loaders
const eventsLoader = require("@handler/events.js");
const componentLoader = require("@handler/components.js");
const commandLoader = require("@handler/command.js");

commandLoader();
componentLoader();
eventsLoader();


client.login(process.env.TOKEN);