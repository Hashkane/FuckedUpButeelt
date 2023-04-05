interface ICardManager{
    getAllCards():Array<Flashcard>;
    getRandomCard():Flashcard;


    addCard(data:Flashcard):boolean;
    editCard(index:number):boolean;
    removeCard(index:number):boolean;
    getCard(index:number):boolean;

}