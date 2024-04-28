// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let strandNum = 0;
function newStrandNumber() {
  strandNum++;                //+= Math.floor(Math.random() * 10);
  return strandNum;
}
//console.log(newStrandNumber());
//console.log(newStrandNumber());

function pAequorFactory(orgNum, dnaBases) {
  return pAequorObj = {
    specimenNum: orgNum,
    dna: dnaBases,
    mutate() {
      let randomBase = returnRandBase();
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      //let selectMutate = this.dna[Math.floor(Math.random() * this.dna.length)];  //can't reassign the value back to array object property this way, it is separate from the array this way
      //if (selectMutate === randomBase) {        //while loop takes care of this, if statement not needed to check the same thing as while loop
      while (this.dna[randomIndex] === randomBase) {
        randomBase = returnRandBase();
      }
      this.dna[randomIndex] = randomBase;
      /*} else {
        selectMutate = randomBase;
      }*/
      return this.dna;
    },
    compareDNA(otherPAequorObj) {
      let identicalDNA = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequorObj.dna[i]){
          identicalDNA++;
        }
      }
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequorObj.specimenNum} have ${(identicalDNA / 15) * 100}% DNA in common.`);
    },
    willLikelySurvive() {
      let count = 0;
      for (const base of this.dna) {
        if (base === 'C' || base === 'G') {
          count++;
        }
      }
      return ((count / 15) * 100 >= 60) ? true : false;
    },
    complementStrand(){
      let complementDNA = this.dna.slice();
      complementDNA = complementDNA.map(base => {
        switch (base) {
          case 'A':
            return 'T';
          case 'T':
            return 'A';
          case 'C':
            return 'G';
          default: 
            return 'C';
        }
      });
      return complementDNA;
    }
  }
}

const firstPAequor = pAequorFactory(newStrandNumber(), mockUpStrand());
//console.log(firstPAequor.dna)
//console.log(firstPAequor.mutate());

//const firstPAequor = pAequorFactory(newStrandNumber(), mockUpStrand());
//console.log(firstPAequor);

//const secondPAequor = pAequorFactory(newStrandNumber(), mockUpStrand());
//const thirdPAequor = pAequorFactory(newStrandNumber(), mockUpStrand());

//firstPAequor.compareDNA(thirdPAequor);
//console.log(firstPAequor.willLikelySurvive());

function canSurvive(){
  let liveArray = [];
  while (liveArray.length < 30) {
    let newStrand = pAequorFactory(newStrandNumber(), mockUpStrand());
    if (newStrand.willLikelySurvive()){
      liveArray.push(newStrand);
    }
  }
  return liveArray;
}

const canSurviveArray = canSurvive();
//console.log(canSurviveArray);

//console.log(firstPAequor.dna);
//console.log(firstPAequor.complementStrand());

//TODO: use .compareDNA to find the two most related instances of pAequor