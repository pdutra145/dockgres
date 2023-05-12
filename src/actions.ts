import { PromptModule, QuestionCollection } from "inquirer";
import { writeFileSync } from "fs";

export const actions = async (
  envPath: string,
  prompt: PromptModule,
  questions: QuestionCollection
) => {
  const inputs = await prompt(questions);

  delete inputs["confirmation"];

  if (Object.keys(inputs).length === 0) {
    process.exit();
  }
  console.clear();
  const envContent =
    "\n" +
    Object.entries(inputs)
      .map((entry) => entry.join("="))
      .join("\n");
  // console.log(postgres);

  writeFileSync(envPath, envContent, { flag: "a" });
};
