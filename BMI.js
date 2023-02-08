// 01
const markHeight = 1.65;
const markMass = 72.5;

const johnHeight = 1.9;
const johnMass = 120;

//02
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

//03

const markMoreBeefCake = markBMI > johnBMI;

// console.log(markMoreBeefCake);

//04

// console.log(`Q4: Is Mark's BMI higher than John's?${markMoreBeefCake}.`);
if (markMoreBeefCake) {
     console.log(
         `Q4: Is Mark's BMI higher than John's? Why yes, 
         it's ${markMoreBeefCake},it is`
     );
    
} else {
     console.log(
         `Q4: Is Mark's BMI higher than John's? 
       Why no, it's ${markMoreBeefCake}, 
       John may be has more haight or mass !!`
     );
}
//05
if (markBMI > johnBMI) {
    console.log(`Q5: Mark ${markBMI.toFixed(2)}`);
    
} else {
    console.log(`Q5: John ${johnBMI.toFixed(2)}`);
    
}