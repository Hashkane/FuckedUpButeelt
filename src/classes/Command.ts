import inquirer, { QuestionCollection } from "inquirer";
import { Database } from "./Database.js";
import { Commands } from "../enum/Commands.js";
import { CardManager } from "./CardManager.js";

let collection = new CardManager();

export class Command {
  sayHello() {
    console.log("\n** Тавтай морил! **\n");
  }

  async promptUser(): Promise<void> {
    const answers = await inquirer.prompt({
      type: "list",
      name: "option",
      message: "Та юу хийх вэ?",
      choices: Object.values(Commands),
    });
    switch (answers["command"]) {
      case Commands.Play:
        console.log("togloh");
        break;
      case Commands.Add:
        let x = collection.addCard(1, "hi", "snu");
        console.log("x", x);
        break;
      case Commands.Show:
        collection.getAllCards();
        break;
      case Commands.Purge:
        console.log("ustgah");
        break;
    }
  }
}
