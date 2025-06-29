const fs = require("fs");
const path = require("path");
const { prefixCommands, slashCommands } = require("@utils/JS/commands");
const chalk = require("chalk");

function commandLoader() {
  const prefixFolders1Path = path.join(__dirname, "../commands/prefix");
  fs.readdirSync(prefixFolders1Path).forEach((folder) => {
    const prefixFolders2Path = path.join(prefixFolders1Path, folder);
    fs.readdirSync(prefixFolders2Path)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const filePath = path.join(prefixFolders2Path, file);
        const command = require(filePath);
        if (!command.name && !command.execute) {
          console.log(
            `PrefixError: [LOADING_ERROR] ${file}: name or execute function is missing.`
          );
        } else {
          prefixCommands.set(command.name, command);
        }
      });
    });
    console.log('CommandLoader:', chalk.green.bold('Process is end: Prefix'));

  const slashFolders1Path = path.join(__dirname, "../commands/slash");
  fs.readdirSync(slashFolders1Path).forEach((folder) => {
    const slashFolders2Path = path.join(slashFolders1Path, folder);
    fs.readdirSync(slashFolders2Path)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const filePath = path.join(slashFolders2Path, file);
        const command = require(filePath);
        if (!command.data.name && !command.execute && !command.data) {
          console.log(
            `SlashError: [LOADING_ERROR] ${file}: data or name or execute function is missing.`
          );
        } else {
          slashCommands.set(command.data.name, command);
        }
      });
  });
  console.log('CommandLoader:', chalk.green.bold('Process is end: Slash'));
}
module.exports = commandLoader;
