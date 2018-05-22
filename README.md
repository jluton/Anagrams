## Anagrams

#Assumptions
1. We want our output to print to the console. Other options would be to write the output to a new .txt file using fs.writefile(), or to output the results as an object or array.
2. Our anagram-printing function will operate by taking in the filepath to a local .txt file that contains the words for which we will find anagrams.

#Notes on this design
1. I decided to create the anagrams hash map and the printAnagrams function inside of a closure into order to privatize the anagrams variable.

2. This approach words by iterating over the dictionary once to generate a hash map of all letter combinations and their associated anagrams. This allows us perform one expensive operation upfront so that printAnagrams can run with great time efficiency thereafter. 

The downsides of this approach are A.) The initial generation of the Hash Map occurs in O(n) time, where n is the size of the dictionary. Given that n is large, this will be a time consuming operation. B.) The hash map will take up O(n) space. Given that n is large, this will take up quite a bit of memory.

3. If I were implementing this algorithm as part of a real application, I would strongly consider storing the anagrams hash map in a NoSQL database rather than as an in-memory variable. This would reduce lookup speed but would significantly decrease memory usage.