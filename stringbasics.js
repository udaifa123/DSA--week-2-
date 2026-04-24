//__________________________________Traverse String___________________________________
// let str="hello";
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }



//_____________________________Reverse String_____________________________________
// let str="hello";
// let rev="";

// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i]
// }
// console.log(rev)





//__________________________________PALINDROME_______________________________________
// let str="madam";
// let rev="";

// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i]
// }
// console.log(str===rev)





//________________________________ANAGRAM_____________________________________
// let a ="listen";
// let b ="silent";

// function sortStr(s){
//     return s.split("").sort().join("");
// }
// console.log(sortStr(a)===sortStr(b))






//____________________________Two pointer(Reverse Array/String)_______________________________
// let arr=["a","b","c","d"]

// let left=0;
// let right=arr.length-1;

// while(left<right){
//     let temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp

//     left++
//     right--
// }
// console.log(arr)





//_____________________________SUBSTRING BASICS____________________________
// let str="hello"
// console.log(str.substring(1,4))




//_____________________________RECURSION DEEP_____________________________
//______________________________Print 1 to N_______________________________
// function print(n){
//     if(n===0) return;

//     print(n-1);
//     console.log(n)
// }

// print(5)





//_______________________________Reverse String(Recursion)__________________________
// function reverse(str){
//     if(str===""){
//         return"";
//     }
//     return reverse(str.substr(1)) + str[0];
// }

// console.log(reverse("hello"))




