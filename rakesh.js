let sum = 0; 
for (let i=1; i<=5; i++) {
    sum = sum+i;
 console.log(sum); 
}
console.log("loop has ended")

for (let i = 1; i <= 5; i++) {
console.log("i = ", i);
} 
let i = 5;
console.log(i);

let n = 1;
while(n<=5){
    console.log("n = ",n)
    n++;
}

let j = 1;
do{
    console.log("j = ",j);
    j++;
}   while(j<=5);

let str = "RAKESH"
let size = 0;
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("string size = ",size)


let student = {
    name: "Rakesh",
    age: 24,
    cgpa :8.7,
    ispass : true
};

for (let key in student){
    console.log("key = ", key, "value = ",student[key]);
}
