console.log("try to solve as many as possible");
/* 1. Print all even numbers from 0 – 10
*/
// let i =0,da=[];
// let p = prompt("enter till a number for which you want all the even numbers from 0");
// do{
// if (i%2 ===0){
// console.log(i);
// da.push(i)}
// i++
// }while(i<=parseInt(p))
// let el1 =document.createElement("h1");
// el1.innerHTML =`the even number are ${da}`;
// document.body.appendChild(el1);
/* 2. Print a table containing multiplication tables
*/
// let m =parseInt(prompt("enter the no for which you want mutliplication table"));
// let r =[];
// let t =parseInt(prompt("how many times mutliplication tabel you need"));
// for(i=1;i<=t;i++){
//    r.push(m*i);
//    console.log(` ${m} * ${i} = ${r[i-1]}`);
// }
/* 3. Create a length converter function 
*/
// function conert(kilo){
//     let mil = kilo *0.621371;
//     return(mil);
// }
// let kilo = parseInt(prompt("enter the kilometers"));
// console.log("the miles for the kilometers entered",conert(kilo));
// const convert=(kilo)=>{
// let mil = kilo *0.621371;
// return mil;
// }
// let kilo = parseInt(prompt("please enter the kilometer "));
// console.log(convert(kilo));
/* Calculate the sum of numbers within an array
*/
// let num_ar =[];
// let n = parseInt(prompt("how many numbers you want to add in array"));
// let i =1;
// do{
//     let n1 = parseInt(prompt(`please enter a ${i}th number`));
//     num_ar.push(n1);
//     i++;
// }while (i<=n);
// console.log(num_ar);
// let sum =0;
// for( let p in num_ar){
//    sum +=num_ar[p];
//  }
// console.log(`the sum of the all numbers ${sum}`);

/*5. Create a function that reverses an array */
// let num_ar =[];
// let n = parseInt(prompt("how many numbers you want to add in array"));
// let i =1;
// do{
//      let n1 = parseInt(prompt(`please enter a ${i}th number`));
//      num_ar.push(n1);
//      i++;
//  }while (i<=n);
// const rev= (num_ar)=>{
//     let l=num_ar.length;
//     for(let i=0;i!=(l-(i+1));i++){
//     r=num_ar[i];
//     num_ar[i]=num_ar[l-(i+1)];
//     num_ar[l-(i+1)]=r;
//     }
// }
// rev(num_ar);
// console.log(num_ar);
// let ne1 =document.createElement("h2");
// ne1.innerHTML=`${num_ar}`;
// document.body.appendChild(ne1);
/* 6. Sort an array from lowest to highest*/
// let num_ar =[];
// let n = Number(prompt("how many numbers you want to add in array"));
// let i =1;
// do{
//      let n1 = Number(prompt(`please enter a ${i}th number`));
//      num_ar.push(n1);
//      i++;
//  }while (i<=n);

//  for (let j=0;j<num_ar.length;j++){
//     for (let p =j+1;p<num_ar.length;p++){
//         if (num_ar[j] > num_ar[p]){
//             let r=num_ar[j];
//             num_ar[j]=num_ar[p];
//             num_ar[p]=r;      
//         console.log(num_ar[j],num_ar[p])  }
//     }  
//     console.log(num_ar);
//  }
// let uu =document.createElement("h4");
// uu.innerHTML=num_ar;
// document.body.appendChild(uu);
/*7.Create a function that filters out negative numbers */
// let a =[];
// let l  = Number(prompt("enter how many numbers you want to enter"));
// let i =0;
// do{
//    let p = Number(prompt("please a enter a number"));
//    a.push(p);
//    i++
// }while(i<l);

// const fliter=(a)=>{
//     let r =[];
// for (i=0;i<l;i++){
//     if (a[i] >= 0){
//        r.push(a[i]);
//       }
// }
// return r ;
// }
// let p = document.createElement("h1");
// p.innerHTML= `${fliter(a)}`;
// document.body.appendChild(p);
// console.log(a);
// console.log("there is ",q);
/*8. Remove the spaces found in a string */
// let p= prompt("enter the string");
// const space =(p)=>{
// let r ="";
//    for(i=0;i<p.length;i++){
//     if(p[i]!==" "){
//         r +=p[i];
//     }
//    }
// return r;
// }
// console.log(space(p));
/* 9. Return a Boolean if a number is divisible by 10 */
// let n = Number(prompt("please enter the number"));
// function boldiv(n){
//     if (n %10 == 0){
//         return true;
//     } else{
//         return false;
//     }
// }
// console.log(boldiv(n));

/* 10. Return the number of vowels in a string */
// let p =prompt("enter your string");
// function vow(p) {
//     let q=0;
//  for (i=0; i<p.length; i ++){
//     if (p[i] === "a" || p[i] ===  "e" || p[i] ==="i"||p[i] ==="o"||p[i] ==="u"){
//      q++;
//     }
//  }
// return q;
// }
// console.log(vow(p));
