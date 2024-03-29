/* 

Introduction: 
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

*/ 

// TODO Make accept any year ever 

//can return century of any year up to 9999
function century(year) {
     // Finish this :)

  //if less than 101, return first century
  if (year < 101 && year > 0)
  {
    return 1
  }
  
  // if year is greater than 100
  //get first 2 digits of number
  
  // turn year into string to be able to split digits into an array 
  let yearDigitsArray = year.toString().split('');
  console.log(yearDigitsArray);

  // if last digit one or greater, we will add the centur value later
  let addToCentury = 0;
  // get last index of array , -1 from array length because index starts from 0
  let lastIndex = yearDigitsArray.length - 1 
  // console.log('Last index: '+lastIndex);

  //if single digit place is greater than 0 , 190(1) new century
  if(Number(yearDigitsArray[lastIndex]) >= 1)
  {
    addToCentury = 1;
  }
  //if tens digit place is greater than 0 , 19(1)0 , new century
  else if(Number(yearDigitsArray[lastIndex-1]) >= 1)
  {
    addToCentury = 1;
  }

  // remove the last two "digits" in array to get century
  // 1900 = 19th century 19000 = 190th century 
  yearDigitsArray.pop();
  yearDigitsArray.pop();

  // merge the remaining digits back together as a number
  // join returns a string, does not actually transform value otherwise
  // yearDigitsArray.join('')
  // console.log(yearDigitsArray);

  remmainingDigitsForCentury = yearDigitsArray.join('')
  console.log('Remaining digits: '+remmainingDigitsForCentury);

  // add 1 if begining or later into new century (If not 1700 for ex.) 
  let theCentury = Number(remmainingDigitsForCentury) + addToCentury;
   console.log(`We are in the ${theCentury} century`);

  // set back to 0 so it can be reused on next call 
  addToCentury = 0;

  return theCentury ;
  }
  
  century(89);
  
   century(1705);// 18 
   century(1900) // 19 ;
   century(1601) // 17 ;
   century(2000) // 20 ;
   century(89)   // 1 ;