/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let mp = new Map();
    if (str1.length !== str2.length) {
        return false;
    }

    for(let i=0; i<str1.length; i++) {
       let char1 = str1[i].toLowerCase();
       let char2 = str2[i].toLowerCase();

       if(mp.has(char1)) {
           mp.set(char1, mp.get(char1) + 1);
       }
       else {
           mp.set(char1, 1);
       }


       if(mp.has(char2)){
         mp.set(char2, mp.get(char2) - 1);
       }else {
           mp.set(char2, -1);
       }
    }

    for(let value of mp.values()) {
        if(value !== 0) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;
