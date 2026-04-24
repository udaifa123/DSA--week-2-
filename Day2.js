//_____________________________________1)PALINDROME_____________________________________
//________________________Method 1--(Reverse & Compare(Simple))__________________________
// let str="madam";
// let rev="";
// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i];
// }

// if(str===rev){
//     console.log("Palindrome");
// }else{
//     console.log("Not Palindrome")
// }





//________________________________Method 2--(Two Pointer)__________________________________
// let str="madam";

// let left=0;
// let right=str.length-1;

// let isPalindrome=true;

// while(left<right){
//     if(str[left] !== str[right]){
//         isPalindrome = false;
//         break;
//     }
//     left++;
//     right--;
// }
// console.log(isPalindrome)

//⏱️Complexity
//Reverse method->Time O(n),Space O(n) 
//Two pointer->Time O(n),Space O(1)


//____________________________________2)ANAGRAM_____________________________________
//__________________________________Method 1-Sort(Simple)_______________________________
// let a= "listen";
// let b="silent";

// function sortStr(s){
//     return s.split("").sort().join("");
// }

// console.log(sortStr(a) === sortStr(b))





//__________________________________Method 2-Frequency(Best)___________________________
// let a="listen";
// let b="silent";

// if(a.length !== b.length){
//     console.log(false);
// }else{

//     let freq={};

//     for(let ch of a){
//         freq[ch] = (freq[ch] || 0)+1;
//     }

//     let isAnagram=true;

//     for(let ch of b){
//         if(!freq[ch]){
//             isAnagram=false;
//             break;
//         }
//         freq[ch]--;
//     }
//     console.log(isAnagram)
// }

//⏱️ Complexity
//Sort method->O(n log n)
//Frequency->O(n)





//_____________________________3)STRING NORMALIZATION__________________________
// let str="Madam";
// str=str.toLowerCase();
// console.log(str === str.split("").reverse().join(""))