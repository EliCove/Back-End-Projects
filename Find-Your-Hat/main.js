const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//Field class
class Field {
  constructor(field) {
    this._field = field;
    this._horPlayerLoca = 0;
    this._vertPlayerLoca = 0; 
    this._gamePlay = true;
    this._direction = '';
  }

  get field() {
    return this._field;
  }

  get horPlayerLoca() {
    return this._horPlayerLoca;
  }

  get vertPlayerLoca() {
    return this._vertPlayerLoca;
  }

  //used to stop gameplay loop
  get gamePlay() {
    return this._gamePlay;
  }

  get direction() {
    return this._direction;
  }

  //checks if player went out of bounds or fell in a hole
  fail() {
    switch(true){
      case(!(this._vertPlayerLoca > 0) && 
      (this._direction === 'U')):
      case(!(this._vertPlayerLoca < this._field.length - 1) && 
      (this._direction === 'D')):
      case(!(this._horPlayerLoca > 0) && 
      (this._direction === 'L')):
      case(!(this._horPlayerLoca < this._field[0].length - 1) && 
      (this._direction === 'R')):
        console.log('Out of bounds!');
        this._gamePlay = false;
        break;
      case((this._vertPlayerLoca > 0) && 
      (this._field[this._vertPlayerLoca - 1][this._horPlayerLoca] === hole) && 
      (this._direction === 'U')): 
      case((this._vertPlayerLoca < this._field.length - 1) && 
      (this._field[this._vertPlayerLoca + 1][this._horPlayerLoca] === hole) && 
      (this._direction === 'D')):
      case((this._horPlayerLoca > 0) && 
      (this._field[this._vertPlayerLoca][this._horPlayerLoca - 1] === hole) && 
      (this._direction === 'L')):
      case((this._horPlayerLoca < this._field[0].length - 1) && 
      (this._field[this._vertPlayerLoca][this._horPlayerLoca + 1] === hole) && 
      (this._direction === 'R')):
        console.log('Sorry, you fell down a hole!');
        this._gamePlay = false;
        break;
    }
  }

  //checks if player has reached hat
  win() {
    switch(true){
      case((this._vertPlayerLoca > 0) && 
      (this._field[this._vertPlayerLoca - 1][this._horPlayerLoca] === hat) && 
      (this._direction === 'U')):
      case((this._vertPlayerLoca < this._field.length - 1) && 
      (this._field[this._vertPlayerLoca + 1][this._horPlayerLoca] === hat) && 
      (this._direction === 'D')):
      case((this._horPlayerLoca > 0) && 
      (this._field[this._vertPlayerLoca][this._horPlayerLoca - 1] === hat) && 
      (this._direction === 'L')):
      case((this._horPlayerLoca < this._field[0].length - 1) && 
      (this._field[this._vertPlayerLoca][this._horPlayerLoca + 1] === hat) && 
      (this._direction === 'R')):
        console.log('You found your hat!!!');
        this._gamePlay = false;
        break;
    }
  }

  location(whichWay) {
    this._direction = whichWay;
    this.fail();
    this.win();

    //moves player by modifying arrays
    switch(true){
      case(whichWay === 'U' && this._gamePlay):
        this._vertPlayerLoca -= 1;
        this._field[this._vertPlayerLoca].splice(this._horPlayerLoca, 1, pathCharacter);
        break;
      case(whichWay === 'D' && this._gamePlay):
        this._vertPlayerLoca += 1;
        this._field[this._vertPlayerLoca].splice(this._horPlayerLoca, 1, pathCharacter);
        break;
      case(whichWay === 'L' && this._gamePlay):
        this._horPlayerLoca -= 1;
        this._field[this._vertPlayerLoca].splice(this.horPlayerLoca, 1, pathCharacter);
        break;
      case(whichWay === 'R' && this._gamePlay):
        this._horPlayerLoca += 1;
        this._field[this.vertPlayerLoca].splice(this._horPlayerLoca, 1, pathCharacter);
        break;
      case(this._gamePlay):
        console.log('Not a valid direction!');
        break;
    }
  }

  //used to print field each round
  print() {
    this._field.forEach(value => {
      console.log(value.join(''));
    });
    //!console.log(this._field.join('\n').replaceAll(',', ''));
  }

  //used to create standard field with field parameters
  static generateField(height, width, percentage) {
    let fieldArray = [hat];
    const holeNum = Math.floor(height * width * percentage);

    for (let items = 0; items < holeNum; items++){
      fieldArray.push(hole);
    }
    for (let items = 0; items < (height * width) - holeNum - 2; items++){
      fieldArray.push(fieldCharacter);
    }
    
    let newField = new Array();

    for (let rows = 0; rows < height; rows++) {
      let newRow = [];
      for (let columns = 0; columns < width; columns++){
        if (rows === 0 && columns === 0) {
          newRow.push(pathCharacter);
        } else {
          let fieldItem = fieldArray.splice(Math.floor(Math .random() * fieldArray.length), 1).toString();
          newRow.push(fieldItem);
        }
      }
      newField.push(newRow);
    }
    return newField;
  }
}

const myField = new Field(Field.generateField(10, 15, .25));

//function created to play the find your hat game
function hatFinderGame() {
  let playGame = true;
  //used to set each play of the game
  while(playGame) {
    myField.print();
    let direction = prompt('Which way?');
    direction = direction.toUpperCase();
    myField.location(direction);
    playGame = myField.gamePlay;
  }
}
hatFinderGame();