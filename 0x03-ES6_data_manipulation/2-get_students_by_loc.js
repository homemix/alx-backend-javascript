export default function getStudentsByLocation(students, location) {
  if (!(students instanceof Array)) return [];
  return students.filter((item) => item.location === location);
}
