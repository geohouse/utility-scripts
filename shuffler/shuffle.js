function shuffleArray(inputMessageArray) {
  const shuffledOutput = [];
  //const inputArray = [...inputMessageArray];
  let cutIndex = 0;
  console.log("starting while");
  while (inputMessageArray.length > 0) {
    console.log(inputMessageArray.length);
    cutIndex = Math.floor(Math.random() * inputMessageArray.length);
    console.log({ cutIndex });
    // splice returns a list of the removed element, so need to index into the list
    // to access the number before pushing to the output array.
    const removed = inputMessageArray.splice(cutIndex, 1)[0];
    console.log({ removed });
    shuffledOutput.push(removed);
  }
  return shuffledOutput;
}

let testOut = shuffleArray([1, 2, 3, 4, 5]);

console.log({ testOut });

function shuffleTest() {
  let testArray = [1, 2, 3];

  let outputTabulate = {};

  for (let index = 0; index < 10000; index++) {
    // Array spread to create a new immutable copy for the function
    // to work on each time, otherwise the splicing in the function
    // (as the input function parameter var) splices the input argument
    // var and leaves it empty for future iterations.
    let shuffledOutput = shuffleArray([...testArray]);
    console.log(shuffledOutput);
    // CSV
    let shuffledOutputString = shuffledOutput.join();
    if (outputTabulate.hasOwnProperty(shuffledOutputString)) {
      outputTabulate[shuffledOutputString] += 1;
    } else {
      outputTabulate[shuffledOutputString] = 1;
    }
  }

  for (key in outputTabulate) {
    console.log(`${outputTabulate[key]} times for ${key}`);
  }
}

shuffleTest();

// let testArray = [1,2,3];
// let shuffledOutput2 = shuffleArray(testArray);
// console.log({testArray})
// let shuffledOutput3 = shuffleArray(testArray);
// console.log(shuffledOutput2)
// console.log(shuffledOutput3)
