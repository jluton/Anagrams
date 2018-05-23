// XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require('node-fetch');

/* Fetches all words in dictionary, and stores them in a hash map associated with its alphabetically 
sorted characters. Returns a promise that resolves to hash map. */
const getAnagramsFromDictionary = function () {
  return fetch('http://codekata.com/data/wordlist.txt')
    .then(res => res.text())
    .then(body => body.split('\n'))
    .then((words) => {
      const anagrams = {};
      words.forEach((word) => {
        const alphabetizedWord = word.toUpperCase().split('').sort().join('');
        if (alphabetizedWord in anagrams) {
          anagrams[alphabetizedWord].push(word);
        } else {
          anagrams[alphabetizedWord] = [word];
        }
      })
      return anagrams;
    })



  // const dictionary = new XMLHttpRequest();
  // dictionary.open('GET', 'http://codekata.com/data/wordlist.txt');
  // dictionary.setRequestHeader('Access-Control-Allow-Origin', '*');
  // dictionary.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  // dictionary.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

  // return new Promise((resolve, reject) => {
  //   const anagrams = {};

  //   dictionary.onreadystatechange = () => {
  //     if (dictionary.readyState === 4) {
  //       if (dictionary.status === 200) {
  //         const dictionaryWords = dictionary.responseText.split('\n');

  //         dictionaryWords.forEach((word) => {
  //           const alphabetizedWord = word.toUpperCase().split('').sort().join('');
  //           if (alphabetizedWord in anagrams) {
  //             anagrams[alphabetizedWord].push(word);
  //           } else {
  //             anagrams[alphabetizedWord] = [word];
  //           }
  //         });

  //         resolve(anagrams);
  //       } else {
  //         reject(new Error (`Dictionary request resolved with status code ${dictionary.status}`));
  //       }
  //     } 
  //   }

  //   dictionary.send();  
  // });

  
};

const createAnagramPrinter = async function () {

  try {
    const anagrams = await getAnagramsFromDictionary();
    console.log(anagrams);
  } catch (err) {
    throw err;
  }

  return (filePath) => {
    // Reads .txt file,
    // For each line in the .txt file, coerce to uppercase and sort alphabetically.
    // Access sorted word in hash map, print contents of associated array.
  }
};

const printAnagrams = createAnagramPrinter();