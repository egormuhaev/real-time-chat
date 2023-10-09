export const Regex = {
  lowercaseRegex: /[a-z]/,
  uppercaseRegex: /[A-Z]/,
  digitRegex: /[0-9]/,
  specialCharRegex: /[@#$%^&+=!]/g,
};

export interface ValidationResolve {
  message: string;
  status: boolean;
}

export const passwordLength = (str: string): ValidationResolve => ({
  message: "Длинна пароля более 8 символов",
  status: str.length > 8,
});

export const lowercaseRegex = (str: string): ValidationResolve => ({
  message: "Пароль не содержит символы в нижнем регистре",
  status: Regex.lowercaseRegex.test(str),
});

export const uppercaseRegex = (str: string): ValidationResolve => ({
  message: "Пароль не содержит символы в верхнем регистре",
  status: Regex.uppercaseRegex.test(str),
});

export const digitRegex = (str: string): ValidationResolve => ({
  message: "Пароль не содержит цифры",
  status: Regex.digitRegex.test(str),
});

export const specialCharRegex = (str: string): ValidationResolve => ({
  message: "Пароль не содержит специальные символы",
  status: Regex.specialCharRegex.test(str),
});

export const passwordValidator = (
  password: string
): { messages: ValidationResolve[]; status: boolean } => ({
  status:
    lowercaseRegex(password).status &&
    uppercaseRegex(password).status &&
    digitRegex(password).status &&
    specialCharRegex(password).status &&
    passwordLength(password).status,
  messages: [
    lowercaseRegex(password),
    uppercaseRegex(password),
    digitRegex(password),
    specialCharRegex(password),
    passwordLength(password),
  ],
});
