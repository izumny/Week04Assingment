//1, Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];        // created array.

//1a, 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.

ages.shift();           /// array.shift() -> substructed the first element in the array.
console.log(ages);                              




//1b, Add a new age to your array and repeat the step above to ensure it is dynamic. works for arrays of different lengths).

ages.push(18);          /// array.push() -> added the element in () into the last part of the array.
console.log(ages);

ages.shift();           /// repeated substruct from the last again to check it is dynamic. 
console.log(ages);




//1c, Use a loop to iterate through the array and calculate the average age.
 
let total = 0;                              // to calculate the age total in the array  
for (let i = 0; i < ages.length; i++){      /// using for loop
    total += ages[i];                       /// added each age into the total to get total
}
let average = total / ages.length;          /// to calcluate the average, divided total by the length of the ages in the array.
console.log("The average age is " + average);


function getAverage(ages){                  // I also created the function method without using for loop.
    let ave = 0;
    for (let age of ages)
    ave += age / ages.length;
return ave;
}
console.log("The average age is " +getAverage(ages));




//2, Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//2a, Use a loop to iterate through the array and calculate the average number of letters per name.`) 

let totalLetters = 0;                           // set variable to get total letters in the array
for (let i = 0; i < names.length; i++){         /// usign for loop
    totalLetters += names[i].length;            /// added each name letters length into the variable to get total letters
}
let average2 = totalLetters / names.length;     /// to get average number of letters per name, divided variable by the length of name in the array.

console.log("The average number of letters per name is " + average2);




//2b, Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let joinsName = " "                             // declared new variable to put names in a new way as described.
for (let i = 0; i < names.length; i++){         /// using for loop
    joinsName += names[i] + " ";                /// added each names with space into the variable.
}
console.log(joinsName);




//3, How do you access the last element of any array?`

console.log(names[names.length -1]);            /// array count start from 0, executed the length of the array "-1"
                                                



//4, How do you access the first element of any array?
 
console.log(names[0]);                          /// array count start from 0 for access first element




//5, Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']    // Reassigned array from above.

let nameLengths = [];                                      // created new array
for (let i = 0; i < names.length; i++){                    /// uisng for loop
    nameLengths.push(names[i].length);                     /// and using array.push() to overwrite in the names array to create new array
}
console.log(nameLengths);




//6, Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let elementsSum = 0;                                       // created new variable
for (let i = 0; i < nameLengths.length; i++){              /// using for loop
    elementsSum += nameLengths[i];                         /// to get sum, added the each name length into the variable
}
console.log(elementsSum);      




//7, Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

const someFunction = (a, b) => {                           /// using arrow function, two parameters are declared. a is word and b is number
    let result = ' ';                                      
    for (let i = 0; i < b; i++){                           /// using for loop, made result to repeat a until b times.
        result += a;
    }
    return result;
}
console.log(someFunction('Happy', 5));                     /// passed the word and number to repeat to get return from this function.




//8, Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

const createFullname = (firstName, lastName) => `${firstName} ${lastName}`;        /// using arrow function, we got expression with template literals
console.log(createFullname('Minnie','Mouse'));                                     /// pass the desired names to get return




//9, Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

nameLengths.push(1000)                              // added 1000 in the last part of the nameLength array above to use.
function myArray(anyArray){                         
    console.log(anyArray)                           
    let sumNumbers = 0;                             // declared new variable to add sum of all the numbers in the array
    for(let i = 0; i < anyArray.length; i++){        
        sumNumbers += anyArray[i]                   /// in the function using for loop, get sum of all the numbers
    } 
      if(sumNumbers > 100){                         /// to meet the condition, used if statement
        return true;
       }  else {
        return false;
       }
        
}    
console.log(myArray(nameLengths));                  // passed the array to get return of true or false




//10, Write a function that takes an array of numbers and returns the average of all the elements in the array.

function yourArray(yo){                             /// this is the same as #9 
    let sumTotal = 0;
    for (let i = 0; i < yo.length; i++){
        sumTotal += yo[i]
    }
    return sumTotal / yo.length                     /// then divided by the length of the elements to get average of all the elements
}
console.log("The average of all elements is " + yourArray([5, 10, 7]));     // passed the array to get return


//11, Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`
  
function compareAverage(arrayA, arrayB){            /// name 2 arrays and declare the variable
    let totalA = 0;
    for (let a = 0; a < arrayA.length; a++){        /// I got 2 arrays each total with for loop
        totalA += arrayA[a]
    } 
    let totalB = 0;
    for (let b = 0; b < arrayB.length; b++){
        totalB += arrayB[b]
    } 
    if ((totalA / arrayA.length) > (totalB / arrayB.length)){   /// compared the average divided by the each length with the condition
        return true;                                            
    }   else {
        return false;
    }
}   
console.log(compareAverage([20, 30, 40], [10, 11, 12]));        /// passed the 2 arrays to get return
console.log(compareAverage([10, 11, 12], [20, 30, 40]));




//12, Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){    /// create function declaration following the question,        
    if (isHotOutside && moneyInPocket > 10.50){        /// to meet the condition, created if statement
    return true;
    }   else {
    return false;
}
}
console.log(willBuyDrink(true, 12.00));       /// passed the true or false and amount the money in pocket to get return
console.log(willBuyDrink(true, 5.00));
console.log(willBuyDrink(false, 15));
console.log(willBuyDrink(false, 7.00));


//13, Create a function of your own that solves a problem. 

let arr1 = [46, 52, 13, 74]                 // created 2 arrays to concatenate 
let arr2 = [11, 68, 33, 59]

function convineArrays(arr1, arr2){
    let newArray = arr1.concat(arr2);       /// first array.concat(second array) -> conbine 2 arrays
    return newArray;
}
console.log(convineArrays(arr1, arr2));     /// passed the array names to get return


//In comments, write what the function does and why you created it.