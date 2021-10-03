export const formatDate = (today, dayCounter = 0) => {
  let day = new Date(today.getTime() + dayCounter * 86400000).getDate();
  let month = new Date(today.getTime() + dayCounter * 86400000).getMonth() + 1;
  let year = new Date(today).getFullYear();
  day = addLeadingZero(day);
  month = addLeadingZero(month);
  const fullDate = `${year}-${month}-${day}`;
  return { day, month, fullDate};
}

const addLeadingZero = (str) => {
  return +str < 10 ? `0${str}` : String(str);
}