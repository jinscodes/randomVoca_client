export const useCreateRandom = () => {
  const randomNumber = Math.round(Math.random() * 1000000);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const milliseconds = today.getMilliseconds();

  return `${randomNumber}_${year}${month}${date}${hours}${minutes}${milliseconds}`;
};
