export const RegExps = {
  required: '^(?!s*$).+',
  email: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
  min: '^.{value,}$',
  max: '^.{0,value}$',
};

export const RegExpMessages = {
  required: 'is required!!',
  email: 'is not a valid email!!',
  min: 'must have',
  max: 'can have',
};
