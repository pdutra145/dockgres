import fs from "fs";
export default function validateEnvFile(prompt) {
    var content = fs.readFileSync(".env", { encoding: "utf-8" });
    var regex = prompt === "postgres" ? /POSTGRES.+/ : /PGADMIN.+/;
    if (content.match(regex)) {
        console.log("Enviroment variables created");
        return false;
    }
    return true;
}
