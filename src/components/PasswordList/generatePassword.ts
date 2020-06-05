export const generatePassword = (symbols: string, passwordLength: number): string => {
  let result = '';
  const symbolLength = symbols.length;
  if (!symbolLength) {
    return result;
  }
  for (let index = 0; index < passwordLength; index += 1) {
    result += symbols[Math.floor(Math.random() * symbolLength)];
  }
  return result;
};
