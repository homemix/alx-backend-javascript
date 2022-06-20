export default function cleanSet(set, startString) {
  let newString = '';
  if (startString === '') {
    return newString;
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      newString += `${item.slice(startString.length)}-`;
    }
  }
  return newString.slice(-1) === '-' ? newString.slice(0, -1) : newString;
}
