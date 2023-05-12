import { Question, QuestionCollection } from "inquirer";
import { requiredInputs } from "../utils/requiredInputs.js";
import validateEnvFile from "../utils/checkEnvFile.js";

enum Names {
  confirmation = "confirmation",
  port = "PGADMIN_PORT",
  container = "PGADMIN_NAME",
  email = "PGADMIN_DEFAULT_EMAIL",
  password = "PGADMIN_DEFAULT_PASSWORD",
}

const intro: Question = {
  name: Names.confirmation,
  type: "confirm",
  message: "Do you want to run pgadmin with Docker?",
  when: () => validateEnvFile("pgadmin"),
};

const portName: Question = {
  name: Names.port,
  type: "number",
  message: "What will be the port for pgadmin ? (default=82)",
  default: 82,
  when: (opt) => opt.confirmation,
};

const containerName: Question = {
  name: Names.container,
  type: "input",
  message: "What will be the container name for pgadmin ? (default=my-pgadmin)",
  default: "my-pgadmin",
  when: (opt) => opt.confirmation,
};

const email: Question = {
  name: Names.email,
  type: "input",
  message: "What will be the email for pgadmin?",
  when: (opt) => opt.confirmation,
  validate: requiredInputs,
};

const password: Question = {
  name: Names.password,
  type: "password",
  message: "What will be the password for pgadmin?",
  when: (opt) => opt.confirmation,
  validate: requiredInputs,
};

const pgadminQuestions: QuestionCollection = [
  intro,
  portName,
  containerName,
  email,
  password,
];

export default pgadminQuestions;
