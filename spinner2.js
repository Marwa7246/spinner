let input = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ' , '\n'];
let i = 0;
for (const element of input) {
  setTimeout(() => {
    process.stdout.write(element);
  }, 100 + i);
  i += 200;
  if (i === input.length) {
    break;
  }
}
