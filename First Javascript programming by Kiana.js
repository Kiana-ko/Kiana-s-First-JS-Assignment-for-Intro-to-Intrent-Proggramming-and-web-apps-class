  // * Kiana's First Javascriprt Assignment of Inro To Intrent Programming And Web Apps course * //
  // I started ansewing questions reversely (From Q3 to Q1) cuz I found the last 2 questions easier! //


  //  * // 
 // Q3 //
//  * // 

let Name = 'kiana';

//Looping through the letters of our string
console.log(Name)

for (let i = 0; i < Name.length; i++) {
    console.log(Name[i]);
}


console.log(Name.length);


function NameCharacterCounter(Name) {
  return Name.length
}

console.log(NameCharacterCounter('kiana'));
console.log ("The Name" + " " + Name + " Has 5 letters !");
 /* Passing Name as a paramater and then getting it's lenght using .lenght to get the lenght of
  our string that is later defiend as Kiana and then console logging the result that we got */


  





 

  //  * // 
 // Q2 //
//  * // 
  
let ArrayOfNumbers = [200 , 2 ,0, 5, 7,-7, 15 , 25];
console.log(Math.min(...ArrayOfNumbers));

/*Definging an array called "ArrayOfNumbers" and putting some numbers inside of it, then using math.min 
 function to find the lowest number, and using ... or the spreed operator to allow the numbers of
 "ArrayOfNumbers" array tto be succsefuly passed to math.min function as indviuasls in order for math.min 
 to go through the numbers and give us the lowest number
 */
 
 //But this is not enough cuz we need to return the lowest number inside of a HOF function so:

  let smallestNumber = 0;
  function MinNumberFinder(MyNumbers) {
    return Math.min(...MyNumbers);
  }
  smallestNumber = MinNumberFinder([200 , 2, 0, 5, 7, -7, 15 , 25]);
  console.log ("The minimum value of this array is " + " " +  smallestNumber + "!");

   /* Setting our minimum value as 0 and then Creating a function called  MinNumberFinder and passing minValue
   as a parameter, then using ... or the spreed operator to allow the numbers of "ArrayOfNumbers" array to be 
   succsefuly passed to math.min function as indviuals in order for math.min to go through the numbers and 
   give us the lowest number*/


   /* So this way we have succefuly created a function which returns the minimum value 
   (lowest number) of an array and we used 2 functions, our main function (MinValue) and then putting the math.min function inside 
   of our main function */









  //  *  // 
 // Q1 //
//  * // 

let student = [ 
  {
    name: "Daniel",
    email: "daniel@gmail.com", 
    marks: [80, 60, 50, 70, 95] 
  },

  { 
    name: "Mark", 
    email: "mark@gmail.com", 
    marks: [99, 40, 84, 72, 60] 
  }, 

  {
    name: "Stacy", 
    email: "stacy@gmail.com", 
    marks: [8, 30, 11, 0, 20] 
  },

  { 
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99] 
  } 
];

  /* Here we have an array of Javascript Objects, and each object we have the info of each student, there 
  was an extra ' quetation mark at the end of line 2 which caused JS to throw an error and I removed it
  */
  
 
function studentWithHighestMarks(StudentMarks) { //
}

//For Daniel//
let maxMarkOfDaniel = 0
function highestMarkFinder(DanielGrades) {
   return maxMarkOfDaniel = Math.max(...DanielGrades);
}
highestMarkFinder([100, 99, 95, 85, 99]);
console.log ("Daniel's highest grade is " + " " +  maxMarkOfDaniel + "!");

/* First we declare the variable called maxMarkOfDaniel and set it to 0 
that will store the highest garades in it and after that we created a
function which takes in an array of Daniel's Grades, then we used the math.max method to
find the highest grade like the way we used math.min in the previous 
question  and finally we called our function with an array of numbers as an
argumentt*/

//For Mark//
let MarkMaxGrade = 0
function highestMarkFinder2(MarkGrades) {
  return MarkMaxGrade = Math.max(...MarkGrades);
}
highestMarkFinder2([98, 40, 84, 72, 60] );
console.log ("Mark's highest grade is " + " " +  MarkMaxGrade + "!");

//For Stacy//
let StacyMaxGrade = 0
function highestMarkFinder3(MarkGrades) {
  return StacyMaxGrade = Math.max(...MarkGrades);
}
highestMarkFinder3([8, 30, 11, 0, 20]  );
console.log ("Stacy's highest grade is " + " " +  StacyMaxGrade + "!");

//For Geri//
let GeriMaxGrade = 0
function highestMarkFinder4(MarkGrades) {
 return GeriMaxGrade = Math.max(...MarkGrades);
}
highestMarkFinder4([110, 99, 95, 85, 99]  );
console.log ("Geri's highest grade is " + " " +  GeriMaxGrade + "!");


/*We used the same function as the first one in the question(the one for
Daniel's grades) for all the student and got their highest marks! */