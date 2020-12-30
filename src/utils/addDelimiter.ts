export default function addDelimiter(str: number) {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
