let word= prompt("write a number").split("");

for (var i = 0; i < word.length - 1; i+=3) 
{
     word[i] = "x";
}
let a= word.join("");
console.log(a);
