export const getRandomId = () => {
  return Math.ceil(Math.random() * (500 - 15) + 15)
}
export const fotmatDate = (date: Date) => {
  return new Date(date).toLocaleString('en', {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}