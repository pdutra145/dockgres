import { Command } from "commander";
import { actions } from "./actions.js";
import postgresQuestions from "./questions/postgres.js";
import pgadminQuestions from "./questions/pgadmin.js";
import inquirer from "inquirer";
import fs from "fs";
const program = new Command("dockerpostgres");
const validStartOptions = ["postgresql", "pgadmin"];
const postgres = inquirer.createPromptModule();
const pgadmin = inquirer.createPromptModule();
if (!fs.existsSync(".env")) {
    fs.writeFileSync(".env", "# Setting env variables");
}
if (process.argv[2] !== "build" &&
    (process.argv.length !== 4 ||
        !validStartOptions.includes(process.argv[3]))) {
    throw new Error("Invalid Args");
}
program
    .command("build")
    .argument("<service>", "build postgresql or pgadmin service")
    .action(async (service) => {
    if (service == "postgresql") {
        await actions(".env", postgres, postgresQuestions);
    }
    else {
        await actions(".env", pgadmin, pgadminQuestions);
    }
});
program.parse(process.argv);
