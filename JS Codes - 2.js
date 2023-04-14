let a= 3;
let b= 5;
let num= prompt("write a number");
console.log(num);{
    
if (num%a ==0) {
    result = 'fizz';
} 
else { 
    result = num
}

console.log(result)

if (num%b ==0) {
    result = 'buzz';
} else { result = num}
console.log(result)

if (num%b ==0 & num%a==0) {
    result = 'fizzbuzz';
} else { result = num}
console.log(result)
