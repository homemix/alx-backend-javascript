export default function cleanSet(set, startString) {
  const strings = [];
  if (startString && typeof startString === 'string' && startString.length > 0) {
    for (const item of set) {
      if (item.startsWith(startString)) {
        strings.push(item.slice(startString.length));
      }
    }
  }
  return strings.join('-');
}
