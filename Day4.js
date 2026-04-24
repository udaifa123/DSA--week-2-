//_________________________Reverse String(Recursion)___________________________
// function reverse(str){
//     if(str === "") return "";

//     return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse("abc"))





//______________________________Sum of Digits(Recursion)__________________________
//______________________eg:123->1+2+3=6_____________________________
// function sum(n){
//     if(n === 0) return 0;

//     return (n % 10) + sum(Math.floor(n/10));
// }

// console.log(sum(123))