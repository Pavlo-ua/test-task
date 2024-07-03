export function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    return date
  }
  return date.getFullYear() + '-' + checkLength(date.getMonth() +1) + '-' + checkLength(date.getDate())
}

function checkLength(i: number | string) {
  return i.toString().length < 2 ? '0' + i : i
}
