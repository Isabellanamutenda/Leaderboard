export default (arr, key) => arr.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    if (Number(x) < Number(y)) {
      return -1;
    }
    return 1;
  });