//___________________________________Function Call Stack________________________________
// function a(){
//     b();
// }
// function b(){
//     c();
// }
// function c(){
//     console.log("done");
// }

// a();





//1]_______________________________________Traverse Nested Comments______________________________
//i]______________________nested json comments print_______________________
// let comments=[
//     {
//         text:"A",
//         replies:[
//             {text:"B",replies:[] },
//             {text:"C",replies:[
//                 {text:"D",replies:[]}
//             ]}
//         ]
//     }
// ];


// function printComments(data){
//     for(let item of data){
//         console.log(item.text);

//         if(item.replies.length > 0){
//             printComments(item.replies);
//         }
//     }
// }

// printComments(comments);




// //ii]total comments count
// function countComments(data){
//   let count = 0;

//   for(let item of data){
//     count++;

//     if(item.replies.length > 0){
//       count += countComments(item.replies);
//     }
//   }

//   return count;
// }

// console.log(countComments(comments)); 





//______________________________________Nested menu print________________________________
// let menu=[
//     {
//         name:"Home",
//         children:[]
//     },
//     {
//         name:"Products",
//         children:[
//             {name:"Mobile",children:[] },
//             {name:"Laptop",children:[] }
//         ]
//     }
// ];


// function showMenu(data){
//     for(let item of data){
//         console.log(item.name);

//         if(item.children.length > 0){
//             showMenu(item.children);
//         }
//     }
// }

// showMenu(menu)






//______________________________Traverse Nested Comments________________________
let comments=[
    {
        text:"A",
        replies:[
            {text:"B",replies:[] },
            {text:"C",replies: [
                {text:"D",replies:[] }
            ]}
        ]
    }
];

function printComments(data){
    for(let i=0;i<data.length;i++){
        console.log(data[i].text);

        if(data[i].replies && data[i].replies.length >0){
            printComments(data[i].replies);
        }
    }
}

printComments(comments)