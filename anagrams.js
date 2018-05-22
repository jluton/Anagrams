// I: Text file - one word per line
// O: No return value - print all anagrams of each word, on own line
// C: Dictionary is large, so constant time complexity with respect to dictionary would be ideal
// E: None

const createAnagramPrinter = function () {
  // Generate Hash Map with all sorted letter combinations, associated with array of valid anagrams

  return function (filePath) {
    // Reads .txt file,
    // For each line in the .txt file, coerce to uppercase and sort alphabetically.
    // Access sorted word in hash map, print contents of associated array.
  }
};

const printAnagrams = createAnagramPrinter();