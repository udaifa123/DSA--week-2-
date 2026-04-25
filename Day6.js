//_____________________________STRING PROBLEM 1_________________________________
//Palindrome(Login Validation)
// function isPalindrome(str){
//     str=str.toLowerCase();

//     let left=0;
//     let right=str.length-1;

//     while(left<right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrome("Madam"))




//________________________________STRING PROBLEM 2_____________________________________________
//Duplicate Word Check
// let words=["apple","banana","apple","orange"];

// let set=new Set();
// let duplicate=false;

// for(let word of words){
//     if(set.has(word)){
//         duplicate=true;
//         break;
//     }
//     set.add(word);
// }

// console.log(duplicate)





//______________________________REVERSE SEARCH HISTORY____________________________________
// let history=["google","youtube","chatgpt"];

// let left=0;
// let right=history.length-1;

// while(left<right){
//     let temp=history[left];
//     history[left]=history[right];
//     history[right]=temp;

//     left++;
//     right--;
// }

// console.log(history)





//_______________________RECURSION(Nested Category Search)___________________________________
let categories=[
    {
        name:"Electronics",
        children:[
            {name:"Mobile",children:[] },
            {name:"Laptop",children:[] }
        ]
    },
    {
        name:"Clothing",
        children:[]
    }
];

function findCategory(data,target){
    for(let item of data){
        if(item.name === target){
            return true;
        }

        if(item.children.length >0){
            if(findCategory(item.children,target)){
                return true;
            }
        }
    }
    return false;
}

console.log(findCategory(categories,"Laptop"))