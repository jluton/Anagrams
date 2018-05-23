const fetch = require('node-fetch');
const fs = require('fs');

let anagrams;

/* Returns the characters of a word, forced to upper case and sorted alphabetically */
const sortWordCharacters = function (word) {
  return word.toUpperCase().split('').sort().join('');
};

/* Given a list of words, returns a hash table with arrays of valid anagrams associated with
alphabetized characters */
const generateAnagramsForListOfWords = function (words) {
  anagrams = {};
  words.forEach((word) => {
    const alphabetizedWord = sortWordCharacters(word);
    if (alphabetizedWord in anagrams) {
      anagrams[alphabetizedWord].push(word);
    } else {
      anagrams[alphabetizedWord] = [word];
    }
  });
  printAnagrams(__dirname + '/exampleInput.txt')
};

/* Fetches all words in dictionary, and splits them into an array */
const getAnagramsFromDictionary = function (url = 'http://codekata.com/data/wordlist.txt') {
  return fetch(url)
    .then(res => res.text())
    .then(body => body.split('\n'))
    .then(generateAnagramsForListOfWords)
    .catch((err) => { throw err; });
};

/* Reads .txt file, and prints anagrams to the console */
const printAnagrams = function (filePath = __dirname + '/exampleInput.txt') {
  if (!anagrams) {
    throw new Error('Cannot print anagrams until anagrams hash table is ready!');
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    const words = data.split('\n');
    words.forEach((word) => {
      const alphabetizedWord = sortWordCharacters(word);
      console.log(...anagrams[alphabetizedWord]);
    });
  });
}

getAnagramsFromDictionary();

module.exports.printAnagrams = printAnagrams;

