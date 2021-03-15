//console.log(process.argv);
//const tab = process.argv
let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
  sum = sum + parseInt(process.argv[i]);
}
console.log(sum);
