import { Flashcard } from "./Flashcard.js";
import { Database } from "./Database.js";

export class CardManager implements flashcardManager {
  private nextId: number = 1;
  protected cardMap = new Map<number, Flashcard>();

  getCardById(id: number): Flashcard | undefined {
    return this.cardMap.get(id);
  }

  addCard(id: number, question: string, answer: string): number {
    while (this.getCardById(this.nextId)) {
      this.nextId++;
    }
    this.cardMap.set(this.nextId, new Flashcard(id, answer, question));
    return this.nextId;
  }

  getAllCards() {
    console.log("hoohoo");
  }

  editCard(): boolean {
    throw new Error("Method not implemented.");
  }
  removeCard(): boolean {
    throw new Error("Method not implemented.");
  }
}
