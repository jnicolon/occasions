const isDateInPast = (inputDate) => {
  const userDate = new Date(`${inputDate} 00:00:00`).getTime();
  const currentDate = new Date().getTime();
  if (userDate < currentDate) {
    return true;
  } else return false;
};

export default isDateInPast;
