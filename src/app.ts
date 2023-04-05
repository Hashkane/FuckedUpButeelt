import { Commander } from "./classes/Commander.js";
import {CardManager} from "./classes/CardManager.js";
// global.db = new CardManager();

declare const db: CardManager;

const commander = new Commander();

commander.sayHello();
commander.startApp();
