/*
P
- input: template, ouput: template with certain words replaced randomly
- rules:
  - template must have location to replace words
  - words must be inputed randomly from list
  - returns the updated string template

E
- given

D
- strings / arrays?

A
- build two templates that have a 'noun', 'verb', 'adverb', and 'adjective'
- the funciton will iterate through each word of the template
- when the word is either a 'noun', 'verb', 'adverb', or 'adjective'
  - the function will find the appropriate list and randomly replace it
- after iteration, the new string is returned
C
*/

let template1 = `Do you &verb your &adjective &noun &adverb? That's hilarious!
The &adjective &noun &verbs &adverb over the lazy &noun.
The &noun &adverb &verbs up &adjective Joe's turtle.`;

function getRandomIndex () {
  return Math.floor(Math.random() * 5);
}

function madlibs(template) {
  let replacements = {
    noun : ['dog', 'cat', 'pizza', 'phone', 'ring'],
    adjective : ['quick', 'lazy', 'spleepy', 'noisy', 'hungry'],
    verb : ['jump', 'lift', 'lick', 'pat', 'stack'],
    adverb: ['easily', 'lazily', 'noisly', 'excitedly', 'loudly']
  };


  let result = template.split(' ').map(word => {
    let match = Object.keys(replacements)
      .filter(key => word.includes(key))
      .sort((a,b) => b.length - a.length)[0];
    if (match) {
      return word.replace(`&${match}`,replacements[match][getRandomIndex()]);
    } else {
      return word;
    }
  });

  return result.join(' ');

}

console.log(madlibs(template1));