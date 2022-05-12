export type stringLengthInRange<_Min, _Max> = string & {
  readonly stringLengthInRange: unique symbol;
};

export type stringOfLength<_Length> = string & {
  readonly stringOfLength: unique symbol;
};

const isStringOfLength = <Length extends number>(str: string, length: Length): str is stringOfLength<Length> =>
  str.length === length;

const isStringOfLengthBetween = <Min extends number, Max extends number>(
  str: string,
  min: Min,
  max: Max,
): str is stringLengthInRange<Min, Max> => str.length >= min && str.length <= max;

export const createstringLengthInRange = (input: unknown, min: number, max: number) => {
  if (typeof input !== 'string') {
    throw new Error("Input is not of type 'string'");
  }

  if (!isStringOfLengthBetween(input, min, max)) {
    throw new Error('Input is not valid');
  }

  return input;
};

export const createstringOfLength = <Length extends number>(input: unknown, length: Length): stringOfLength<Length> => {
  if (typeof input !== 'string') {
    throw new Error('invalid input');
  }

  if (!isStringOfLength(input, length)) {
    throw new Error('input is not valid');
  }

  return input;
};
