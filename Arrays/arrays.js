//declaration
var array1 = [1, 2, 3];

array1.push(4);
console.log("hello world");
console.log(array1[1]);
console.log(array1);
console.log(`array length is ${array1.length}`);
for (var i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
//for loop with in syntax.
//The variable specified before in is the index of the array
for (var index in array1) {
  console.log(array1[index]);
}
//for loop with of syntac.
//The variable specified before of is the element (the value) of the array
for (var element of array1) {
  console.log(element);
}

//foreach syntax using arraw syntax
array1.forEach((element, index) => console.log(`${index} - ${element}`));

//foreach Syntax
array1.forEach(function (element, index) {
  console.log(`${index} - ${element}`);
});


var array2 = ['a','b','c'];
var array3 = ['d','e','f'];

array3 = array2.concat(array3);
console.log(array3);
console.log(array2);

//spread operator
//spread opeartor is denoted by three dots ... is used to expand arguments where
//zero arguments are expected

function addFourNumbers(n1,n2,n3,n4){
    return n1+n2+n3+n4;
}

var numberArray = [5,6,7,8];

console.log(addFourNumbers(...numberArray)); 
var maxValue = Math.max(...numberArray)
var minValue = Math.min(...numberArray);
//to return max value of array
console.log(maxValue);
//to return max value of array
console.log(minValue);


//Problem: Given the array arr, find and return two indices of the array that add up to weight
//or return -1 if there is no combination that adds up to weight.
var myArray = [1,3,4,6,2,10,12];
var isCombinationFound = false;
for(var i = 0 ; i<= myArray.length; i++ ){
    for(var j = i+1 ; j<= myArray.length; j++)
    if(myArray[i] + myArray[j] == 8){
        console.log(`indices : ${i}  and ${j}`);
        isCombinationFound = true;
    }
}
if(!isCombinationFound){
    console.log('no combination adds up to 8');
}

//JavaScript Functional Array Methods
//Map : The map function applies passed function transformation to every element in the array
//and returns a new array with those transformations applied

var arrayk1 = [1,2,3,4,5,6,7];

arrayk2 = arrayk1.map(function(value){
    return value*10;
});

console.log(arrayk2);//[10, 20, 30, 40,50, 60, 70]

//Filter:The filter function returns only those elements of the array that meet a passed
//condition parameter
var arrayk3 = [100,2003,10,203,333,12];

var filteredArray = arrayk3.filter(function(value){
return value > 300;
});

console.log(filteredArray);//[ 2003, 333 ]

//Reduce: The reduce function combines all the elements in the array into one value

var arrayk4 = [0,1,2,3,4];

var sum = arrayk4.reduce(function(prevVal,currentVal,index,array){
    return prevVal + currentVal;
});

console.log(sum);//10

