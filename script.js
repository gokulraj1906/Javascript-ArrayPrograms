// Program-1--Array creation 

// let arr0=[1,2,3,4,5];
// console.log('score=',arr0);






//  //Program-2--Array Manipulation
 
//  //adding elements
//  let arr1=[1,2,3,4,5,6];
//  arr1.push(0);
//  console.log(arr1);
//  //removing elements
//  let arr2=[1,2,3,4,5,6];
//  arr2.pop(1);
//  console.log(arr2);
//  //shifting
//  let arr3=[1,2,3,4,5,6];
//  arr3.shift(1);
//  console.log(arr3);
//  //upshift
//  let arr4=[1,2,3,4,5,6];
//  arr4.unshift(3);
//  console.log(arr4);


// //  //Program-3--Array searching

//  let arr5=[1,2,3,4,5,6];
//  console.log(arr5.indexOf(2));
//  console.log(arr5.includes(7));


//Program-4--Array mapping



// let arr6=[1,2,3,4,5,6];
// let arr7=arr6.map(x=>x*2);
// console.log(arr7)


//Program-5---Array filtering

// let arr8=[3,4,6,7,9,12];
// let arr9=[];
// let j=0;
// for(i=0;i<arr8.length;i++){
//     if(arr8[i]%3==0){
//         arr9[j]=arr8[i];
//         j=j+1;
//     }
// }
// console.log(arr8)
console.log(arr9);

//Program-Array intersection of two sets

// function intersect2sets(set1,set2){
//     const ans=new Set();
//     for(i of set2){
//         if(set1.has(i)){
//             ans.add(i);
//         }
//     }
//     return ans;
// }
// const set1=new Set([1,2,3,4,5]);
// const set2=new Set([1,2,3]);
// const result=intersect2sets(set1,set2);
// console.log(result);

// //Program-Array manipulation with slice

// const arr=[1,2,3,4,5];
// const arr2=arr.slice(1,3);
// console.log(arr2);

//Program-Creating array of arrays

// var arr3=new Array(10);
// let c=0;
// for(i=0;i<arr3.length;i++){
//      arr3[i]=new Array(3);
//      for(j=0;j<arr3[i].length;j++){
//         c=c+1;
//         arr3[i][j]=c;
//      }
// }
// console.log(arr3);


//Program-Rotating an array

// let arr=[1,2,3,4,5];
// let r=4;
// for(i=1;i<=r;i++){
//     let c=arr.pop();
//     arr.unshift(c);
// }
// console.log(arr);

//Program-Comparing two arrays of equality

// let arr=[1,2,3,4,5,6,7];
// let arr2=[1,2,3,4,5,6,7];
// let c=0;
// if(arr.length!=arr2.length){
//     console.log("Array with diffrent sizes");
// }
// else{
//     for(i=0,j=0;i<arr.length,j<arr2.length;i++,j++){
//         if(arr[i]==arr2[j]){
//             c=c+1;
//         }
//         else{
//             c=0;
//         }
//     }
//     if(c==arr.length){
//         console.log("Equal");
//     }
//     else{
//         console.log("Not equal");
//     }
// }


 

 
