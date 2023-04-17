"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardManager = void 0;
const Flashcard_js_1 = require("./Flashcard.js");
class CardManager {
    constructor() {
        this.nextId = 1;
        this.cardMap = new Map();
    }
    getCardById(id) {
        return this.cardMap.get(id);
    }
    addCard(id, question, answer) {
        while (this.getCardById(this.nextId)) {
            this.nextId++;
        }
        this.cardMap.set(this.nextId, new Flashcard_js_1.Flashcard(id, answer, question));
        return this.nextId;
    }
    getAllCards() {
        console.log("hoohoo");
    }
    editCard() {
        throw new Error("Method not implemented.");
    }
    removeCard() {
        throw new Error("Method not implemented.");
    }
}
exports.CardManager = CardManager;
