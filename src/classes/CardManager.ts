import { Database } from "./Database";

export class CardManager implements ICardManager{
    cards: Flashcard[] = [];
    database = new Database();

    CardManager(){
        const data:String[] = this.database.getAllLines();

        data.forEach(element => {
            this.addCard(new Flashcard(element.questions, element.answer))
        });
    }

    getRandomCard(): Flashcard {
        throw new Error("Method not implemented.");
    }
    getAllCards(): Flashcard[] {
        throw new Error("Method not implemented.");
    }
    addCard(data: Flashcard): boolean {
        throw new Error("Method not implemented.");
    }
    editCard(index: number): boolean {
        throw new Error("Method not implemented.");
    }
    removeCard(index: number): boolean {
        throw new Error("Method not implemented.");
    }
    getCard(index: number): boolean {
        throw new Error("Method not implemented.");
    }
    
}