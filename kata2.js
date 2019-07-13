// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. 
//An example of this is "angel", which is an anagram of "glean".
// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

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

// version with everything in it
function anagramGrouper(words){
    // object used to hold key and value relationships
    const anagrams = {};

    // counter tto keep track of anagrams added
    let counter = 0;

    // iterate through passed in array , for each element do this
    words.forEach((word)=>{

        // alphabetize the word 
        // const normalizedWord = alphabetize(word);

        const normalizedWord = (word) => {
    
        //    // split string into array 
           word = word.split('');

        //    // sort arra in alphabetical order
           word = word.sort();
    
        //    // join array back into string now in alpha order
           word = word.join('');

           return word;

         }

        

        // if there is key of the word already
        
        /* anagrams = {
           ourWord : values
        };

        */
        if (anagrams[normalizedWord(word)]) {
            // put the current  word as value in an array for that key
            counter++;
            return anagrams[normalizedWord(word)].push(word);

        }

        // create new key for word 
        // this is one of a couple syntaxs to add a property to an 
        //  object
        anagrams[normalizedWord(word)] = [word];

    });

    return counter;

}