export type phantomstring<_Min, _Max> = string & {
  readonly phantomstring: unique symbol;
};

export type stringOfLength<_Length> = string & {
  readonly stringOfLength: unique symbol;
};

const isStringOfLength = <Length extends number>(
  str: string,
  length: Length
): str is stringOfLength<Length> => str.length === length;

const isStringOfLengthBetween = <Min extends number, Max extends number>(
  str: string,
  min: Min,
  max: Max
): str is phantomstring<Min, Max> => str.length >= min && str.length <= max;

export const createPhantomString = (
  input: unknown,
  min: number,
  max: number
) => {
  if (typeof input !== "string") {
    throw new Error("lmfao");
  }

  if (!isStringOfLengthBetween(input, min, max)) {
    throw new Error("nice man");
  }

  return input;
};

export const createstringOfLength = <Length extends number>(
  input: unknown,
  length: Length
): stringOfLength<Length> => {
  if (typeof input !== "string") {
    throw new Error("invalid input");
  }

  if (!isStringOfLength(input, length)) {
    throw new Error(
      "input is not available to be turned into a phantom string lol"
    );
  }

  return input;
};
