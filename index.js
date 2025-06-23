require("dotenv").config();
const client = require("./utils/JS/client.js");
//const discordModals = require("discord-modals");
//Loaders
const eventsLoader = require("./handler/events.js");
const componentLoader = require("./handler/components.js");
const commandLoader = require("./handler/command.js");

//discordModals(client);


commandLoader();
componentLoader();
eventsLoader();


client.login(process.env.TOKEN);