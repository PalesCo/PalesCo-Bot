const fs = require("fs");
const path = require("path");
const client = require("../utils/JS/client");
const chalk = require("chalk");

function eventsLoader() {
  const eventsFolders1Path = path.join(__dirname, "../events");
  fs.readdirSync(eventsFolders1Path).forEach((folder) => {
    const eventsFolders2Path = path.join(eventsFolders1Path, folder);
    fs.readdirSync(eventsFolders2Path)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const filePath = path.join(eventsFolders2Path, file);
        const event = require(filePath);
        if (event.once) {
          client.once(event.name, async (...args) => {
            try {
              await event.execute(...args,{client});
            } catch (error) {
              console.log(`Error [EXECUTE_EVENTS_ONCE]: `,file,error);
            }
          });
        } else {
          client.on(event.name, async (...args) => {
        
            try {
              await event.execute(...args,{client});
            } catch (error) {
              console.log(`Error [EXECUTE_EVENTS]: `,file,error);
            }
          });
        }
      });
  });
    console.log('EventsLoader:', chalk.green.bold('Process is end: Events'));
}
module.exports = eventsLoader;
