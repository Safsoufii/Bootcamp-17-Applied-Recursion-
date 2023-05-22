function reverseSent(sentence) {
    // If the length of the sentence is 0, we've reached the end of the recursion
    if (sentence.length === 0) {
      // Return an empty string to stop the recursion
      return "";
    }
    // Add the first character of the sentence to the reversed string
    // Then recursively call the function with the rest of the sentence (excluding the first character)
    return reverseSent(sentence.slice(1)) + sentence[0];
  }
  let reversed = reverseSent("Hello, world!");
  console.log(reversed); // Outputs "!dlrow ,olleH"
  