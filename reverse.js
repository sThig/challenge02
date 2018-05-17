function reverseWord(str) {
  if (typeof str === 'string') {
    return str
      .split('')
      .reverse()
      .join('');
  } else if (str instanceof Array) {
    throw new Error('This is an array, not a string');
  } else if (Number.isInteger(str)) {
    throw new Error('This is a number, not a string');
  } else if (typeof str === 'boolean') {
    throw new Error('This is a boolean, not a string');
  }
}

reverseWord('Pensacola Beach');
