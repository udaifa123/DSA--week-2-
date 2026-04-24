//_________________________________Reverse String(Two Pointer)_____________________________
// let str="hello";
// let arr=str.split("");

// let left=0;
// let right=arr.length-1;

// while(left<right){
//     let temp=arr[left]
//     arr[left]=arr[right];
//     arr[right]=temp;

//     left++;
//     right--;
// }
// console.log(arr.join(""))





//_________________________Pair Sum(Sorted Array)__________________________
// let arr=[1,2,3,7,8,9]
// let target=10;

// let left=0;
// let right=arr.length-1;

// while(left<right){
//     let sum=arr[left] +arr[right];

//     if(sum === target){
//         console.log(arr[left],arr[right]);
//         break;
//     }
//     else if(sum<target){
//         left++;
//     }else{
//         right--;
//     }
// }