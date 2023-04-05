import * as fs from "fs";

export class Database implements IDataBaseFile {
  writeline(data: any): boolean {
    // throw new Error("Method not implemented.");


    const rawdata = fs.readFileSync("db.json", "utf8");
    let jsonData = JSON.parse(rawdata);
    
    jsonData.push(data);

    fs.writeFileSync("db.json", JSON.stringify(this.flashcards), "utf8");

    return true;
  }

  readline(index: number): string {
    const rawdata = fs.readFileSync("db.json", "utf8");
    let jsonData = JSON.parse(rawdata);
    return jsonData[index];
  }
  
  private flashcards: Flashcard[] = [];

  Database(){
    const data = fs.readFileSync("db.json", "utf8");
    this.flashcards = JSON.parse(data);
  }

  private updateDB(){
    fs.writeFileSync("db.json", JSON.stringify(this.flashcards), "utf8");
  }

  getAllLines(){
    fs.readFile("db.json", "utf8", (err, data) => {
      this.flashcards = JSON.parse(data);
    });
  }

  initDatabase() {
    return new Promise((resolve, reject) => {
      fs.readFile("db.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        this.flashcards = JSON.parse(data);
        resolve(this.flashcards);
      });
    });
  }

  updateDatabase(dataString: string) {
    return new Promise((resolve, reject) => {
      fs.writeFile("./db.json", dataString, (err) => {
        if (err) {
          console.log("__ Алдаатай __");
          reject(true);
        } else {
          console.log("** Амжилттай! **");
          this.initDatabase();
          resolve(true);
        }
      });
    });
  }
}
