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

let pAequorFactory = (number, arr) => {
let pAequor = {
  spicemenNum : number,
  dna : arr,
  mutate (){
    let randomlySelectedBase = this.dna[Math.floor(Math.random() * 15)]
    let uniqueBases = ["A","T","C","G"];
    let filteredBase = uniqueBases.filter(elm => elm !== randomlySelectedBase);
    let newBase = filteredBase[Math.floor(Math.random() * 3)]
    return this.dna.map(elm => {
      if(elm !== randomlySelectedBase) return elm
        elm = newBase;
        return elm   
    }
    )
    
  },
  compareDNA(obj){
    if(this.spicemenNum === obj["specimenNum"]) return "Two DNAs cannot have the same specimen number";
    let count = 0;
    for(let i = 0; i<this.dna.length;i++){
      for(j = 0; j<obj["dna"].length; j++){
        if(obj["dna"][j] === this.dna[i] && i === j){
          count += 1;
        }
      }
    }
    let percentage = count/this.dna.length * 100;
    console.log(`Spicemen #${pAequor.spicemenNum} and Specimen #${obj["specimenNumber"]} have ${percentage}% DNA in common`)
  },
  willLikelySurvive(){
    let numberOfC = this.dna.filter(elm => elm === "C")
    let probabilityOfC = numberOfC.length/this.dna.length
    let numberOfG = this.dna.filter(elm => elm === "G")
    let probabilityOfG = numberOfG.length/this.dna.length;
    if(probabilityOfC <= 0.6 || probabilityOfG <= 0.6) return false
      return true;
  }
}
return pAequor;
}
let pAequor = pAequorFactory(1,["A","C","T","G"])
// pAequor.compareDNA({specimenNumber : 2, dna : ["C","A", "T", "T"]})
