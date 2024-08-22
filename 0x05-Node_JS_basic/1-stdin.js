process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input_name = process.stdin.read();

  if (input_name) {
    process.stdout.write(`Your name is: ${input_name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});