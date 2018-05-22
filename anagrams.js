XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const createAnagramPrinter = function () {
  // Generate Hash Map with all sorted letter combinations, associated with array of valid anagrams
  const dictionary = new XMLHttpRequest();
  dictionary.open('GET', 'http://codekata.com/data/wordlist.txt');

  dictionary.setRequestHeader('Access-Control-Allow-Origin', '*');
  dictionary.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  dictionary.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');


  dictionary.onreadystatechange = () => {
    if (dictionary.readyState === 4 && dictionary.status === 200) {
      console.log(dictionary.responseText);
    }
  }

  dictionary.send();

  return (filePath) => {
    // Reads .txt file,
    // For each line in the .txt file, coerce to uppercase and sort alphabetically.
    // Access sorted word in hash map, print contents of associated array.
  }
};

const printAnagrams = createAnagramPrinter();