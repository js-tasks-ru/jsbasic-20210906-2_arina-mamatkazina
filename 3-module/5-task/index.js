function getMinMax(str) {
  let result = {
    min: null,
    max: null,
  };

  let array = str.split(/[ ,]+/);

  let minV = +array[0];
  let maxV = minV;
  for (let i = 0; i < array.length; i++) {
    let e = +array[i];
    if (e < minV) minV = e;
    if (e > maxV) maxV = e;
  }
  result.min = minV;
  result.max = maxV;
  return result;
}
