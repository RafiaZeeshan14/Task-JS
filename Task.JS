

//**************************First-One************************ */

// Get the input from the user
const userInput = prompt("Enter the numbers (separated by commas):");

// Convert the input string to an array of numbers
const numsInp = userInput.split(",").map(Number);

// Function to find the subarray with the largest product
function maxProduct(numsInp) {
  let maxProd = numsInp[0];
  let minProd = numsInp[0];
  let result = numsInp[0];

  for (let i = 1; i < numsInp.length; i++) {
    const temp = maxProd;
    maxProd = Math.max(Math.max(maxProd * numsInp[i], minProd * numsInp[i]), numsInp[i]);
    minProd = Math.min(Math.min(temp * numsInp[i], minProd * numsInp[i]), numsInp[i]);
    result = Math.max(result, maxProd);
  }

  return result;
}

// Call the function with the user input
const resultInp = maxProduct(numsInp);
console.log("Max Product of subArray",resultInp);




//**************************Second-One************************ */

const numsInput = prompt("Enter the numbers (separated by commas):");
const targetInput = prompt("Enter the target number:");

const nums = numsInput.split(",").map(Number);
const target = Number(targetInput);


function twoSum(nums, target) {
  const complementMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complementMap.has(complement)) {
     
      return [complementMap.get(complement), i];
    }
  
    complementMap.set(nums[i], i);
  }

  return [];
}

const result = twoSum(nums, target);
console.log(result);




// *********************Reverse-String*********************

function reverseString(input) {
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    var str = words.join(" ");
    return str;
}

// var str = "welcome to this class";
var str=prompt("enter string to reverse")
var reversedStr = reverseString(str);
console.log(reversedStr);



// *********************Displaying Books*********************


var library = [
    { author: "bill gates", title: "the road head", readingStatus: true },
    { author: "Steve jobs", title: "MockingJay", readingStatus: true },
    { author: "Suzzane Collins", title: "the road head", readingStatus: false }
  ];
  
  function displayReadingStatus() {
    for (var i = 0; i < library.length; i++) {
      var book = library[i];
      var readingStatus = book.readingStatus ? "already read" : "not read yet";
      console.log("Book title: " + book.title + ", Author: " + book.author + ", Reading status: " + readingStatus);
    }
  }
  displayReadingStatus();



// *********************5th-One*********************

function amountToCoins(amount, coins) {
    coins.sort((a, b) => b - a); 
    let result = [];
  
    for (let i = 0; i < coins.length; i++) {
      while (amount >= coins[i]) {
        result.push(coins[i]);
        amount -= coins[i];
      }
    }
  
    return result;
  }

  const amount = parseInt(prompt("Enter the amount:"));
  const coinsInput = prompt("Enter the coins (separated by commas):");
  const coins = coinsInput.split(",").map(Number);
 
  const resultOne = amountToCoins(amount, coins);
  console.log(resultOne);