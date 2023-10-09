export const emailValidator = (email: string): boolean => {
  const emailRegex = /^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/i;
  return emailRegex.test(email);
};
