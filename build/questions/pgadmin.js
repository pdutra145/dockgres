import { requiredInputs } from "../utils/requiredInputs.js";
import validateEnvFile from "../utils/checkEnvFile.js";
var Names;
(function (Names) {
    Names["confirmation"] = "confirmation";
    Names["port"] = "PGADMIN_PORT";
    Names["container"] = "PGADMIN_NAME";
    Names["email"] = "PGADMIN_DEFAULT_EMAIL";
    Names["password"] = "PGADMIN_DEFAULT_PASSWORD";
})(Names || (Names = {}));
var intro = {
    name: Names.confirmation,
    type: "confirm",
    message: "Do you want to run pgadmin with Docker?",
    when: function () { return validateEnvFile("pgadmin"); },
};
var portName = {
    name: Names.port,
    type: "number",
    message: "What will be the port for pgadmin ? (default=82)",
    default: 82,
    when: function (opt) { return opt.confirmation; },
};
var containerName = {
    name: Names.container,
    type: "input",
    message: "What will be the container name for pgadmin ? (default=my-pgadmin)",
    default: "my-pgadmin",
    when: function (opt) { return opt.confirmation; },
};
var email = {
    name: Names.email,
    type: "input",
    message: "What will be the email for pgadmin?",
    when: function (opt) { return opt.confirmation; },
    validate: requiredInputs,
};
var password = {
    name: Names.password,
    type: "password",
    message: "What will be the password for pgadmin?",
    when: function (opt) { return opt.confirmation; },
    validate: requiredInputs,
};
var pgadminQuestions = [
    intro,
    portName,
    containerName,
    email,
    password,
];
export default pgadminQuestions;
