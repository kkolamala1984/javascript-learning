//sets: a set is a group of
//unordered unique (no duplicate) elements

var exampleSet = new Set();
exampleSet.add(1);
exampleSet.add(2);
exampleSet.add(1);//{ 1, 2 }

console.log(exampleSet);

exampleSet.delete(1);
console.log(exampleSet);//{ 2 }

console.log(exampleSet.has(1));//false
console.log(exampleSet.has(2));//true
