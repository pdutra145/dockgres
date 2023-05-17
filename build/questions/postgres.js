import { requiredInputs } from "../utils/requiredInputs.js";
import chalk from "chalk";
import validateEnvFile from "../utils/checkEnvFile.js";
var Names;
(function (Names) {
    Names["confirmation"] = "confirmation";
    Names["port"] = "POSTGRES_PORT";
    Names["container"] = "POSTGRES_DB";
    Names["username"] = "POSTGRES_USER";
    Names["password"] = "POSTGRES_PASSWORD";
})(Names || (Names = {}));
var transformer = function (input) {
    return chalk.bold(chalk.blue(input));
};
var intro = {
    name: Names.confirmation,
    type: "confirm",
    message: "Do you want to run PostgresSQL with Docker?",
    // suffix: console.clear(),
    filter: function (inp, confirm) {
        if (!inp) {
            return process.exit();
        }
    },
    when: function () { return validateEnvFile("postgres"); },
};
var portName = {
    name: Names.port,
    type: "number",
    message: "What will be the port for PostgresSQL ? (default=5432)",
    default: 5432,
    when: function (opt) { return opt.confirmation; },
};
var containerName = {
    name: Names.container,
    type: "input",
    message: "What will be the container name for PostgresSQL ? (default=postgresql)",
    default: "postgresql",
    when: function (opt) { return opt.confirmation; },
};
var username = {
    name: Names.username,
    type: "input",
    message: "What will be the username for PostgresSQL?",
    when: function (opt) { return opt.confirmation; },
    validate: requiredInputs,
    transformer: transformer,
};
var password = {
    name: Names.password,
    type: "password",
    message: "What will be the password for PostgresSQL?",
    when: function (opt) { return opt.confirmation; },
};
var postgresQuestions = [
    intro,
    portName,
    containerName,
    username,
    password,
];
export default postgresQuestions;
