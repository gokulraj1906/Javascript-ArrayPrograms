// Program-1

// let arr0=[1,2,3,4,5];
// console.log('score=',arr0);






//  //Program-2
 
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


// //  //Program-3

//  let arr5=[1,2,3,4,5,6];
//  console.log(arr5.indexOf(2));
//  console.log(arr5.includes(7));


//Program-4



// let arr6=[1,2,3,4,5,6];
// let arr7=arr6.map(x=>x*2);
// console.log(arr7)


//Program-5

let arr8=[3,4,6,7,9,12];
let arr9=[];
let j=0;
for(i=0;i<arr8.length;i++){
    if(arr8[i]%3==0){
        arr9[j]=arr8[i];
        j=j+1;
    }
}
console.log(arr8)
console.log(arr9);

 

 