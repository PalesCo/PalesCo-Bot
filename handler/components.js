const fs = require("fs");
const path = require("path");
const client = require("../utils/JS/client");

//const loader = require("../functions/loader");

function componentLoader() {
  const eventsFolders1Path = path.join(__dirname, "../components");
  fs.readdirSync(eventsFolders1Path).forEach((folder) => {
    const eventsFolders2Path = path.join(eventsFolders1Path, folder);
    fs.readdirSync(eventsFolders2Path)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const filePath = path.join(eventsFolders2Path, file);
        const event = require(filePath);
        //const event = loader('components');

        client.on("interactionCreate", async (interaction) => {
          if (event.type === "Button") {
            if (interaction.isButton()) {
              if (!event.customId)
                return console.log(`ButtonError: [NO_CUSTOM_ID]`, file);
              if (interaction.customId === event.customId) {
                try {
                  await event.execute(interaction, { client });
                } catch (error) {
                  console.log(
                    `ButtonError: [EXECUTE_ + ${event.customId}]:`,
                    error
                  );
                }
              }
            }
          } else if (event.type === "SM") {
            if (interaction.isSelectMenu()) {
              if (!event.customId)
                return console.log(`Error: [NO_CUSTOM_ID]`, file);
              if (interaction.customId === event.customId) {
                const value = interaction.values[0];

                try {
                  await event.execute(interaction, { value, client });
                } catch (error) {
                  console.log(
                    `SelectMenuError: [EXECUTE_${event.customId}]:`,
                    error
                  );
                }
              }
            }
          } else if (event.type === "Modal") {
            if (interaction.isModalSubmit()) {
              if (!event.customId)
                return console.log(`ModalError: [NO_CUSTOM_ID]:`, file);
              if (interaction.customId === event.customId) {
                try {
                  await event.execute(interaction, { client });
                } catch (error) {
                  console.log(
                    `ModalError: [EXECUTE_${event.customId}]:`,
                    error
                  );
                }
              }
            }
          }
        });
      });
  });
}
module.exports = componentLoader;
