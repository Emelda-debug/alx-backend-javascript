const updateUniqueItems = (item) => {
  if (!(item instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [x, y] of item.entries()) {
    if (y === 1) {
      item.set(x, 100);
    }
  }
  return item;
};

export default updateUniqueItems;
