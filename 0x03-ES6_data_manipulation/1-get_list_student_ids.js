export default function getListStudentIds(ar) {
  let newArray = [];
  if (ar instanceof Array) {
    newArray = ar.map((item) => item.id);
  }

  return newArray;
}
