const isDateInPast = (inputDate) => {
  const userDate = new Date(`${inputDate} 00:00:00`).getTime();
  const currentDate = new Date().getTime();
  if (userDate >= currentDate) {
    return false;
  } else return true;
};

export default isDateInPast;
