const ascii = require("ascii-table");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");

const { bot } = require("../utils/JS/config.js");

let PASS = 0;
let FAIL = 0;

let tableCommand = new ascii("PalesCo-Project").setHeading(
  "File",
  "Commands",
  "Description",
  "category",
  "Test"
);
const slashCommandsPath = path.join(__dirname, "../commands/slash");
fs.readdirSync(slashCommandsPath).forEach((file) => {
  const slashCommandFolder = path.join(slashCommandsPath, file);
  fs.readdirSync(slashCommandFolder)
    .filter((file) => file.endsWith(".js"))
    .forEach((file, index) => {
      const filePath = path.join(slashCommandFolder, file);
      const command = require(filePath);
      if (!command.data || !command.data.name) {
        tableCommand.addRow(         
          file,
          "Undefined",
          "Undefined",
          "Undefined",
          chalk.red.bold("FAIL")
        );
        FAIL++;
      } else {
        tableCommand.addRow(
          file,
          "/" + command.data.name,
          command.data.description,
          command.category,
          chalk.green.bold("PASS")
        );
        PASS++;
      }
    });
});

const prefixCommandsPath = path.join(__dirname, "../commands/prefix");
fs.readdirSync(prefixCommandsPath).forEach((file) => {
  const prefixCommandFolder = path.join(prefixCommandsPath, file);
  fs.readdirSync(prefixCommandFolder)
    .filter((file) => file.endsWith(".js"))
    .forEach((file, index) => {
      const filePath = path.join(prefixCommandFolder, file);
      const command = require(filePath);
      if (!command || !command.name) {
        tableCommand.addRow(
          file,
          "Undefined",
          "Undefined",
          "Undefined",
          chalk.red.bold("FAIL")
        );
        FAIL++;
      } else {
        tableCommand.addRow(      
          file,
          bot.prefix + command.name,
          command.description,
          command.category,
          chalk.green.bold("PASS")
        );
        PASS++;
      }
    });
});

console.log(tableCommand.toString());
console.log(`Loaded ${chalk.green(PASS)} commands successfully.`);
console.log(`Failed to load ${chalk.red(FAIL)} commands.`);

