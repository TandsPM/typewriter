const sentence = "hello there from lighthouse labs";
// animate the sentence, revealing one character at a time.
// This would make it look as though it is being typed in by
// someone, as shown in the GIF above.

// initialize an index point
let index = 0;

// iterate over each character
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 200 * index);
  index++;
};

setTimeout(() => {
  process.stdout.write('\n');
}, 200 * index);


