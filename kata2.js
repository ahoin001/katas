function alphabetize(word) {

    word = word.split('').sort().join('');
    // split string into array 
    word = word.split('');

    // sort arra in alphabetical order
    word = word.sort();
    
    // join array back into string now in alpha order
    word = word.join('');

return word;

}

alphabetize('cba');


