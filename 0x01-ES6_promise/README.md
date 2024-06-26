0x01-ES6_promise task
promise basic syntax including chaining :
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error('Number is too large'));
    }
  }, 1000);
});

promise
  .then((value) => {
    console.log('Resolved:', value);
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });

