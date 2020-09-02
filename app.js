/* 
QUESTION 1:
Given a string and a word, describe a function that will return the number of 
 times that the word appears in the string.
 Example 1: string - "Hello world", word - "Hello" → output: 1
/Example 2: string - “The tiny fox bit the big fox”, word - “fox” → output: 2
*/

// Provide your solution below. Written text, pseudo code, or JavaScript is acceptable
// function takes in a phrase and a word
// create a counter
//split the phrase into an array and make it lower or upper case
//iterate over the array and compare each word to the input (lower or uper case)
//add 1 to the counter if they match

function wordCounter(sentance, word) {
	let counter = 0;
	let wordArray = sentance.toLowerCase().split(' ');
	for (wd of wordArray) {
		if (wd === word.toLowerCase()) {
			counter += 1;
		}
	}
	return counter;
}

console.log(wordCounter('Hello world', 'World'));
console.log(wordCounter('The tiny fox bit the big fox', 'Fox'));

/*
QUESTION 2:
Given a list of numbers, describe how you would find the sum of the squares of the numbers in the list.

Example 1: numbers - [ 4, 3, 12, 6 ], result - 205
Example 2: numbers - [ 0, 8, 1 ], result - 65
*/

// Provide your solution below. Written text, pseudo code, or JavaScript is acceptable

function squareNumbers(numList) {
	let sum = 0;
	for (let i = 0; i < numList.length; i++) {
		sum += numList[i] ** 2;
	}
	return sum;
}

console.log(squareNumbers([ 1, 2, 3, 4, 5 ]));
console.log(squareNumbers([ 4, 3, 12, 6 ]));
console.log(squareNumbers([ 0, 8, 1 ]));

//Teacher:
function squareNums(arr) {
	let sum = 0;
	for (num of arr) {
		sum += num ** 2;
	}
	return sum;
}

console.log(squareNums([ 1, 2, 3, 4, 5 ]));
console.log(squareNums([ 4, 3, 12, 6 ]));
console.log(squareNums([ 0, 8, 1 ]));
/*
BONUS QUESTION:
You’ve been given a function that takes a date and time, and calculates a new date and time 
based on a provided duration.

Example 1: Starting date -> “2020-07-17 13:21:34”, duration -> “10 days”  → Output: “2020-07-27 13:21:34”
Example 2: Starting date -> “2020-07-17 13:21:34”, duration -> “10 minutes”  → Output: “2020-07-17 13:31:34”
*/

// Provide your solution below. Written text, pseudo code, or JavaScript is acceptable

function timeMachine(dateString, durationChange) {
	let startDate = new Date(dateString); // may possibly delete  //Fri Jul 17 2020 13:21:34 GMT-0700 (Pacific Daylight Time) "10 days"
	let initArray = dateString.split(' '); //["2020-07-17", "13:21:34"]
	let dateArray = initArray[0].split('-'); // ["2020", "07", "17"]
	let timeArray = initArray[1].split(':'); //["13", "21", "34"]

	// Extract month day year hour minute seconds into their own variables.

	// compare duration change to month day year hour minute seconds.

	//if it matches one, add the value to the corresponding month day year hour minute seconds variable.

	// handle what happens inside each variable if the new value is >59 sec/min, >23 hours, 29/30/21 days, 12 months.

	//could add more handeling for time zone.
	//combine the variables back into a new date

	//output new date.
}

timeMachine('2020-07-17 13:21:34', '10 days');
