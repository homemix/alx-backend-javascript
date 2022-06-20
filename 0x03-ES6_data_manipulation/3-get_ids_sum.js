export default function getStudentIdsSum(students) {
  if (!(students instanceof Array)) return 0;
  return students.reduce((acc, item) => acc + item.id, 0);
}
