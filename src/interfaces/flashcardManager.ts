interface flashcardManager {
    getCardById(id:number):any;
    addCard(id:number,question:string,answer:string):number;

    editCard():any;
    removeCard():any;
    getAllCards():any;
}