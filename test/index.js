// code snippet from https://github.com/30-seconds/30-seconds-of-code#chunk
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

chunk([1, 3, 5, 8], 2);
