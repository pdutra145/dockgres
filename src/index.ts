import { Command } from "commander";
import { actions } from "./actions.js";
import postgresQuestions from "./questions/postgres.js";
import pgadminQuestions from "./questions/pgadmin.js";
import inquirer from "inquirer";
import fs from "fs";

const program = new Command("dockerpostgres");

// type startOptions = "postgresql" | "pgadmin";
// const validStartOptions: startOptions[] = ["postgresql", "pgadmin"];

const postgres = inquirer.createPromptModule();
const pgadmin = inquirer.createPromptModule();

if (!fs.existsSync(".env")) {
  fs.writeFileSync(".env", "# Setting env variables");
}

program
  .command("set")
  .argument("<service>", "set postgresql or pgadmin env variables")
  .action(async (service) => {
    if (service == "postgresql") {
      await actions(".env", postgres, postgresQuestions);
    } else if (service == "pgadmin") {
      await actions(".env", pgadmin, pgadminQuestions);
    } else {
      throw new Error("Invalid Service");
    }
  });

program.parse(process.argv);
