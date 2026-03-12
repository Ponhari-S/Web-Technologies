const student = {
  id: 205,
  name: "Kiran",
  department: "ECE",
  marks: 85
};

const { id, name, department, marks } = student;

console.log(`${id} ${name} ${department} ${marks}`);

const getGrade = (score) => {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
};

const updatedStudent = {
  ...student,
  grade: getGrade(marks)
};

console.log(updatedStudent);