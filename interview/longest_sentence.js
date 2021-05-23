/*
P
- input: string, output: longest sentence of that string and length
- rules:
  - setence is terminated by ., ?, or !
  - display length of words
  - words do not include ., ?, or !

E
- given

D
- string

A
- make a copy of the text
- find every instance where there is a punctuation and then a space
- split the phrase at that location
- sort the array largest length and keep the first element
- display the sentence at that location and the length of the sentence by words
*/

// function longestSentence(string) {
//   let regex = /(?<=[.!?])\s/g;
//   let longestSentence = string.split(regex)
//     .map(sentence => sentence.split(" "))
//     .sort((a, b) => b.length - a.length)[0];
//   console.log(longestSentence.join(" "));
//   console.log(`The longest sentence has ${longestSentence.length} words.`);
// }


/*
A
- find the index where there is a puncuation
- if there is a space after that punctuation, replace it with |
- split the text by |
- sort by the words
- displace the longest sentence
- displace the length of the longest sentence
*/

function longestSentence(string) {
  let splitString = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    if ((string[idx] === ' ')
      && ('.!?'.includes(string[idx - 1]))
      && (idx !== 0)) {
      splitString += '|';
    } else {
      splitString += string[idx];
    }
  }

  let longestSentence = splitString.split('|')
    .map(sentence => sentence.split(' '))
    .sort( (a, b) => b.length - a.length)[0];
  console.log(longestSentence.join(' '));
  console.log(`The longest sentence has ${longestSentence.length} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.