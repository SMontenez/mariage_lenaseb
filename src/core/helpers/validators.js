const emailRegexp = /^.+@\w+\.\w+$/;

export function email(value) {
  return value && emailRegexp.test(value);
}
