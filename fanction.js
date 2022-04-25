
/**
 * - Total Admnission fees
 */
// let total_admition_fees = 0;

// studentBaioData.sort().map((data, i ) => {

//     total_admition_fees += +data[2];
// });
// console.log(`
// -----------------------------------
// Total_admition_fees = ${total_admition_fees}
// `);

/**
 * - Find All Female Students
 */
// console.log(`
// <==========- Find All Female Students======>
// `);

// let totalFemaleStudents= 0;

// studentBaioData.sort().map((data, i ) =>{

//    if (data[4]=== 'Female') {
//        console.log(`${i+1}.
//             Name : ${ data[0]} 
//             Roll : ${ data[1]}
//             Class : ${ data[3]}
//             Student gender : ${ data[4]}
//        `);
//    }
//    totalFemaleStudents++
// });




/**
 * - Find class wise student result
 */

//  console.log(` <==========-Find class wise student result-======>

//  `);
 
//  let total_student_class= 0;
 
//  classWiseStudentResult.sort().map((data, i) => {
 
//      if (data[3]== 'four') {
//          console.log(`${i+1}.
//              Name : ${ data[0]} 
//              Roll : ${ data[1]}
//              age  : ${data[2]}
//              Class : ${ data[3]}
//              Student gender : ${ data[4]}
//              Location : ${data[5]}
//          `);
       
 
//      }
//      total_student_class++
//  });


/** 
 * - Location wise student result
*/
//   console.log(` <==========-Find class wise student result-======>

//  `);
 
//  location_wise_student= 0;
 
//  LocationWiseStudentResult.sort().map((data, i) => {
 
//      if (data[5]=== 'koyra' || data[5]=='Modina' || data[5]=='Dhaka'){
//          console.log(`${i}.
//              Name : ${ data[0]} 
//              Roll : ${ data[1]}
//              age  : ${data[2]}
//              Class : ${ data[3]}
//              Student gender : ${ data[4]}
//              Location : ${data[5]}
//          `);
       
 
//      }
//  });


/**
 * - find student between 10 - 25 age
 */

   console.log(` <==========-Find class wise student result-======>

 `);
 

 let find_student_between_10_25 = 0;
 
 findStudentBetween10_25age.sort().map((data, i) => {
 
     if (data[2]>= 10 && data[2] <=25) {
         console.log(`${i+1}.
             age  : ${data[2]}
             Name : ${ data[0]} 
             Roll : ${ data[1]}
             Class : ${ data[3]}
             Student gender : ${ data[4]}
             Location : ${data[5]}
         `);
       
         
 
     }
     find_student_between_10_25++
 });
 console.log(`======-find_student_between_10_25 age : ${find_student_between_10_25} =========`);
 
 