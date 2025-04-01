let sum = 0;
for (let i=1; i<=5; i++){
    sum = sum+i;
    
}
console.log(sum);
console.log("loop has ended")


for (let i = 1; i <= 5; i++) {  // The semicolon ends the loop
    console.log("i = ", i);      // This block doesn't run with the loop
}
let i = 5;                       // Re-declares `i` as 5
console.log(i);                  // Logs the new value of `i`
