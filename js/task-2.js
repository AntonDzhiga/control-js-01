const findLongestWord = function (string) {
  let args = string.split(" ");
    let longestWord = "";
  
    for (const word of args) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  };
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));   
  console.log(findLongestWord("Google do a roll"));
  console.log(findLongestWord("May the force be with you")); 
  