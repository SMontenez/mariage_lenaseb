const emailRegexp = /^.+@\w+\.\w+$/;
const phoneRegexp = /^0[2-7]\d{8}$/;

export function email(value) {
  return value && emailRegexp.test(value);
}

export function phone(value) {
  return value && phoneRegexp.test(value);
}
