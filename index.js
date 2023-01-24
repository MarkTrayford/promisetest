console.log("hello")

var ar = [1, 2, 3, 4, 5, 6];
    
 var ar2 =  ar[4]; // delete element with index 4

    console.log( ar2 ); 
    
    // [1, 2, 3, 4, undefined, 6]

//var listOfPromises = Promise.arguments

const axios = require('axios');
console.log(axios.isCancel('something'));

 axios.get('http://localhost:8123/wait').then ( responseArr => {
    //this will be executed only when all requests are complete
    console.log('Response - ', responseArr.data);
    
  }).catch( error => console.log(error.response.data) )  ;

// var prom = new Promise( async (resolve, reject) => {  
//      reject('rejecting message goes here');
//     console.log('after the error') });

//  var prom2 = new Promise( async (resolve, reject) => {  
//    console.log('in the promise code');
//         resolve('resolving');
//     }     );

// const allPromise = Promise.all([prom, prom2])
// allPromise.then( (value) =>  console.log('all done') ).catch( (error) => console.log('error ' ))
// allPromise.then( function(values) {
//     document.write(values);
// } ).catch( function(err) {
//     console.log('caught the error !!' + err );
//     ;
// } );
