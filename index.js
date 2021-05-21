// Modifies String object to add reverse method
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

// Reverses a string
// function reverse(string) {
//     return Array.from(string).reverse().join("");
// }

// Add a blank method to String object
String.prototype.blank = function () {
  return !!this.match(/^\s*$/g);
};

// Add a 'last' method to the Array object to return last element in an array
Array.prototype.last = function () {
  return this[this.length - 1];
};

// Returns an array of the username and domain for a standard email address
function emailParts(email) {
  return email.toLowerCase().split("@");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function (string) {
    return string.toLowerCase();
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  // Makes the phrase LOUDER
  this.louder = function louder() {
    return this.content.toUpperCase();
  };
}

// Defines a TranslatedPhrase object;
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  };
}
