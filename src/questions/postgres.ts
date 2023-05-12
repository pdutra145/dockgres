import { Question, QuestionCollection } from "inquirer";
import { requiredInputs } from "../utils/requiredInputs.js";
import chalk from "chalk";
import validateEnvFile from "../utils/checkEnvFile.js";

enum Names {
  confirmation = "confirmation",
  port = "POSTGRES_PORT",
  container = "POSTGRES_DB",
  username = "POSTGRES_USER",
  password = "POSTGRES_PASSWORD",
}

const transformer = (input: string) => {
  return chalk.bold(chalk.blue(input));
};

const intro: Question = {
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

const portName: Question = {
  name: Names.port,
  type: "number",
  message: "What will be the port for PostgresSQL ? (default=5432)",
  default: 5432,
  when: (opt) => opt.confirmation,
};

const containerName: Question = {
  name: Names.container,
  type: "input",
  message:
    "What will be the container name for PostgresSQL ? (default=postgresql)",
  default: "postgresql",
  when: (opt) => opt.confirmation,
};

const username: Question & { transformer?: (input: string) => string } = {
  name: Names.username,
  type: "input",
  message: "What will be the username for PostgresSQL?",
  when: (opt) => opt.confirmation,
  validate: requiredInputs,
  transformer: transformer,
};

const password: Question = {
  name: Names.password,
  type: "password",
  message: "What will be the password for PostgresSQL?",
  when: (opt) => opt.confirmation,
};

const postgresQuestions: QuestionCollection = [
  intro,
  portName,
  containerName,
  username,
  password,
];

export default postgresQuestions;
