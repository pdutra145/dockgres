import fs from "fs";

export default function validateEnvFile(prompt: string) {
  const content = fs.readFileSync(".env", { encoding: "utf-8" });

  const regex = prompt === "postgres" ? /POSTGRES.+/ : /PGADMIN.+/;

  if (content.match(regex)) {
    console.log("Enviroment variables created");
    return false;
  }
  return true;
}
