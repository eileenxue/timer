// Beep test
// process.stdout.write('\x07');

// Use process.argv
const seconds = process.argv.slice(2);

const timer = function(seconds) {
  // loop through the command line inputs
  for (let i = 0; i < seconds.length; i++) {
    // edge case: skip the negative numbers
    if (seconds[i] < 0) {
      continue;
    }
    // make the beeps after the set delay times
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * seconds[i]);
  }
}

timer(seconds);