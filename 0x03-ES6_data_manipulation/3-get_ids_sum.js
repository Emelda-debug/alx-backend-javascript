export default function (students) {
  return students.reduce((arg, student) => arg + student.id, 0);

}
