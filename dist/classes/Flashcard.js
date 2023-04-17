"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flashcard = void 0;
class Flashcard {
    constructor(id, question, answer) {
        this.id = id;
        this.question = question;
        this.answer = answer;
    }
    getId() {
        return this.id;
    }
    getQuestion() {
        return this.question;
    }
    getAnswer() {
        return this.answer;
    }
}
exports.Flashcard = Flashcard;
