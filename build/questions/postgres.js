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
const transformer = (input) => {
    return chalk.bold(chalk.blue(input));
};
const intro = {
    name: Names.confirmation,
    type: "confirm",
    message: "Do you want to run PostgresSQL with Docker?",
    // suffix: console.clear(),
    filter: (inp, confirm) => {
        if (!inp) {
            return process.exit();
        }
    },
    when: () => validateEnvFile("postgres"),
};
const portName = {
    name: Names.port,
    type: "number",
    message: "What will be the port for PostgresSQL ? (default=5432)",
    default: 5432,
    when: (opt) => opt.confirmation,
};
const containerName = {
    name: Names.container,
    type: "input",
    message: "What will be the container name for PostgresSQL ? (default=postgresql)",
    default: "postgresql",
    when: (opt) => opt.confirmation,
};
const username = {
    name: Names.username,
    type: "input",
    message: "What will be the username for PostgresSQL?",
    when: (opt) => opt.confirmation,
    validate: requiredInputs,
    transformer: transformer,
};
const password = {
    name: Names.password,
    type: "password",
    message: "What will be the password for PostgresSQL?",
    when: (opt) => opt.confirmation,
};
const postgresQuestions = [
    intro,
    portName,
    containerName,
    username,
    password,
];
export default postgresQuestions;
