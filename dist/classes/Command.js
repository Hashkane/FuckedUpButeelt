"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const Database_js_1 = require("./Database.js");
const Commands_js_1 = require("./Commands.js");
const CardManager_js_1 = require("./CardManager.js");
let collection = new CardManager_js_1.CardManager();
class Command {
    constructor() {
        const database = new Database_js_1.Database();
        database.initDatabase();
    }
    sayHello() {
        console.log("\n** Тавтай морил! **\n");
    }
    promptUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const answers = yield inquirer_1.default.prompt({
                type: "list",
                name: "option",
                message: "Та юу хийх вэ?",
                choices: Object.values(Commands_js_1.Commands),
            });
            switch (answers["command"]) {
                case Commands_js_1.Commands.Play:
                    console.log("togloh");
                    break;
                case Commands_js_1.Commands.Add:
                    let x = collection.addCard(1, "hi", "snu");
                    console.log("x", x);
                    break;
                case Commands_js_1.Commands.Show:
                    collection.getAllCards();
                    break;
                case Commands_js_1.Commands.Purge:
                    console.log("ustgah");
                    break;
            }
        });
    }
}
exports.Command = Command;
