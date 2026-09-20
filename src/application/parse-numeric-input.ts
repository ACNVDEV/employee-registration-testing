export const parseNumericInput = (value: string): number | string => {
  const trimmedValue = value.trim();

  if (trimmedValue === '') {
    return '';
  }

  const numericValue = Number(trimmedValue);

  if (Number.isNaN(numericValue)) {
    return value;
  }

  return numericValue;
};
