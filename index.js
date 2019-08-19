//Daniel Kenny 19/08/19
//String Reverse Challenge


//This function will be used to output the reverse of a given string.
function reverseString1(str){
const strArray = str.split(''); //Seperates the string into an array of each char.
strArray.reverse();

return strArray.join(''); //Returns the reverse as a string and not an array
}
////////////////////////////////////////////////////////////////////////////////////////////////

//This function will be used to output the reverse of a given string.
//This is a cleaner version of the first function
function reverseString2(str){
  //splits the string, reverses it and joins it all in one return.
  return str.split('').reverse().join(''); 
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////

  //This function will be used to output the reverse of a given string.
//This version avoids using the reverse array method
function reverseString3(str){
  let revStr = '';
  for(let i = str.length -1; i >= 0; i--){
      revStr = revStr + str[i];
  }
  return revStr;
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
    //This function will be used to output the reverse of a given string.
//This version avoids using the reverse array method
function reverseString4(str){
  let revStr = '';
  for(let i = 0; i <= str.length -1; i++){
      revStr = str[i] + revStr;
  }
  return revStr;
  }
////////////////////////////////////////////////////////////////////////////////////////////////
//Use of ES6 for of loop  
function reverseString5(str){
  let revStr = '';
  for(let char of str){
      revStr = char + revStr;
  }
  return revStr;
  }
/////////////////////////////////////////////////////////////////////////////////////////////////
// High order array method For each  
function reverseString6(str){
    let revStr = '';
    str.split('').forEach(function(char){
      revStr = char + revStr;
    });
    return revStr;
    }
/////////////////////////////////////////////////////////////////////////////////////////////////
    // High order array method arrow function  
function reverseString7(str){
  let revStr = '';
  str.split('').forEach((char) => revStr = char + revStr);
  return revStr;
  }
/////////////////////////////////////////////////////////////////////////////////////////////
     // High order array method reduce
function reverseString8(str){
  return str.split('').reduce(function(revString, char){
    return char + revString;
  }, '');
  }

       // High order array method reduce as arrow function
function reverseString9(str){
  return str.split('').reduce((revString, char) => char + revString, '');
  }
////////////////////////////////////////////////////////////////////////////////////////////

let stringOne = "Hello";
console.log(reverseString1(stringOne));

let stringTwo = "Goodbye";
console.log(reverseString2(stringTwo));

let stringThree = "Daniel";
console.log(reverseString3(stringThree));

let stringFour = "Timmy";
console.log(reverseString4(stringFour));

let stringFive = "Daisy";
console.log(reverseString5(stringFive));

let stringSix = "Micky";
console.log(reverseString6(stringSix));

let stringSeven = "Tommy";
console.log(reverseString7(stringSeven));

let stringEight = "Happy";
console.log(reverseString8(stringEight));

let stringNine = "Edgar";
console.log(reverseString9(stringNine));