const isEmailValid = (value) => {
  const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
};

export default isEmailValid;