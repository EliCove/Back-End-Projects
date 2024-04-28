// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
let batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
let testNumbers = ['4716723033016654', '4539364833164660', '4539182292700044031', '5194727635742391', '2720996056716388', '5401082474200534', '372945456263025', '343202122558735', '370078786115277', '6011628311453981', '6011447918286763', '6011266562786753664'];
let testNumbersTwoFalse = ['3544171939504525', '344801968305414'];

// Add your functions below:

//Converts a string array to a number array:
const strToNumArray = str => {
  const newArray = str.split('');
  let numArray = [];
  for (const character of newArray){
    numArray.push(+character);
  }
  return numArray;
};


//gets the sum of the cards numbers ready to check if valid or not:
const validCheckerSum = numArr => {
  let even = 0;
  let sumArr = numArr.toReversed();

  sumArr = sumArr.map(num => {
    if (even % 2 !== 0) {
      even++;
      if (num * 2 > 9) {
          return (num * 2) - 9;
      } else {
          return num * 2;
      }   
    } else {
      even++;
      return num;
    }
  });

  return sumArr.reduce((accum, currentVal) => accum + currentVal);
}
//console.log(strToNumArray('4716723033016654'));


//checks if a card is valid and returns true or false:
const validateCred = numArr => {
  const sum = validCheckerSum(numArr);

  if (sum % 10 === 0) {
    return true;
  }
  return false;
};
//console.log(validateCred(mystery2));


//checks nested arrays for invalid cards and returns a nested array of invalid cards:
const findInvalidCards = numNestArr => {
  let invalidCards = [];
  for (let card of numNestArr) {
    if (typeof card === 'string'){
      card = strToNumArray(card);
    }
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
};
//console.log(findInvalidCards(batch));
//console.log(findInvalidCards(testNumbers));
//console.log(findInvalidCards(testNumbersTwo));



//takes a nested array of invalid cards and returns an array of known companies have issued those cards out
const idInvalidCardCompanies = numNestArr => {
  let invalidCardCompanies = [];
  for (const card of numNestArr) {
    if (card[0] === 3  && card[1] === 7 && !invalidCardCompanies.includes('Amek (American Express)')){
      invalidCardCompanies.push('Amek (American Express)');
    } else if (card[0] === 4 && !invalidCardCompanies.includes('Visa')){
      invalidCardCompanies.push('Visa');
    } else if (card[0] === 5 && !invalidCardCompanies.includes('MasterCard')){
      invalidCardCompanies.push('MasterCard');
    } else if (card[0] === 6 && !invalidCardCompanies.includes('Discover')){
      invalidCardCompanies.push('Discover');
    } else if (!(card[0] === 3 && card[1] == 7 || card[0] === 4 || card[0] === 5 || card[0] === 6)) {
      //invalidCardCompanies.push('Company not found');
      console.log('Company not found');
    }
  }
  return invalidCardCompanies;
};
//console.log(idInvalidCardCompanies(findInvalidCards(batch)));
//console.log(idInvalidCardCompanies(findInvalidCards(testNumbers)));
//console.log(idInvalidCardCompanies(findInvalidCards(testNumbersTwo)));



//takes in an invalid card array and converts it into new valid card, which is returned:
const convertInvalid = invalidCardArray => {
  let card = invalidCardArray.slice();
  const sum = validCheckerSum(invalidCardArray);
  const thirdLast = card.length - 3;
  const fifthLast = card.length - 5;
  const seventhLast = card.length - 7;
  const ninthLast = card.length - 9;
  const eleventhLast = card.length - 11;

  const repeatCheckSub = caseNum => {
    if (card[thirdLast] > (caseNum - 1)) {
      card[thirdLast] -= caseNum;
    } else if (card[fifthLast] > (caseNum - 1)) {
      card[fifthLast] -= caseNum;
    } else if (card[seventhLast] > (caseNum - 1)) {
      card[seventhLast] -= caseNum;
    } else if (card[ninthLast] > (caseNum - 1)) {
      card[ninthLast] -= caseNum;
    } else {
      card[eleventhLast] -= caseNum;
    }
  };
  const repeatCheckAdd = caseNum => {
    if (card[thirdLast] < caseNum) {
        card[thirdLast] += (10 - caseNum);
      } else if (card[fifthLast] < caseNum) {
        card[fifthLast] += (10 - caseNum);
      } else if (card[seventhLast] < caseNum) {
        card[seventhLast] += (10 - caseNum);
      } else if (card[ninthLast] < caseNum) {
        card[ninthLast] += (10 - caseNum);
      } else {
        card[eleventhLast] += (10 - caseNum);
      }
  };

  switch (sum % 10) {
    case 1:
      repeatCheckSub(1);
      break;
    case 2:
      repeatCheckSub(2);
      break;
    case 3:
      repeatCheckSub(3);
      break;
    case 4:
      repeatCheckSub(4);
      break;
    case 5:
      repeatCheckSub(5);
      break;
    case 6:
      repeatCheckAdd(6);
      break;
    case 7:
      repeatCheckAdd(7);
      break;
    case 8: 
      repeatCheckAdd(8);
      break;
    case 9:
      repeatCheckAdd(9);
      break;
    default:
      return 'This is not an invalid card';
  }
    return card;
};



const newValidCard1 = convertInvalid(invalid1);
const newValidCard2 = convertInvalid(invalid2);

console.log(newValidCard1);
console.log(validateCred(newValidCard1));

console.log(newValidCard2);
console.log(validateCred(newValidCard2));