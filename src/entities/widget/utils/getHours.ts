export default function getHours(number: number): string {
  if (number % 10 === 1 && number % 100 !== 11) {
    return "час";
  } else if (
    (number % 10 === 2 && number % 100 !== 12) ||
    (number % 10 === 3 && number % 100 !== 13) ||
    (number % 10 === 4 && number % 100 !== 14)
  ) {
    return "часа";
  } else {
    return "часов";
  }
}
