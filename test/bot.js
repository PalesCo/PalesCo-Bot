require('module-alias/register');
const commandLoader = require("@handler/command");
const client = require("@utils/JS/client");
require("dotenv").config();
const eventsLoader = require("@handler/events.js");
const componentLoader = require("@handler/components.js");

commandLoader();
componentLoader();
eventsLoader();

client.login(process.env.TOKEN).then(()=>{
    client.destroy();
    console.log("END")
})