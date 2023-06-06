var x = [2, 3, [4, 5, [8, 12, 9]]];

Array.prototype.flatFunc = function (depth = 1) {
  const result = [];
  this.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...item.flatFunc(depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
};

console.log(x.flatFunc(2));
