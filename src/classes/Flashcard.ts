export class Flashcard implements flashcardData {
    id:number;
    question: string;
    answer: string;

    constructor(id:number,question:string,answer:string){
        this.id = id
        this.question = question;
        this.answer = answer;
    }

    getId():number {
        return this.id;
    }
    getQuestion():string {
        return this.question;
    }
    getAnswer():string {
        return this.answer;
    }
}