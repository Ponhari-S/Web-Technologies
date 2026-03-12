let studentName = "Hari";
let physicsMark = 95;
let chemistryMark = 95;
let mathMark = 92;

const calculateTotal = (m1, m2, m3) => m1 + m2 + m3;
const calculateAverage = (total, subjectCount) => total / subjectCount;

let totalMarks = calculateTotal(physicsMark, chemistryMark, mathMark);
let averageMarks = calculateAverage(totalMarks, 3);

console.log(`Student Name: ${studentName}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);