export const replaceMongoIdInArray = (array) => {
  return array.map((item) => {
    const { _id, ...rest } = item;
    return { id: _id.toString(), ...rest };
  });
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...rest } = obj;
  return { id: _id.toString(), ...rest };
};
