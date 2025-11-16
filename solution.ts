const formatValue = (value: string | number | boolean) => {
  let result = null;
  if (value === '' || value === 0) {
    return 'This value is not allow!';
  }

  if (typeof value === 'string') {
    result = value.toUpperCase();

    return result;
  } else if (typeof value === 'number') {
    result = value * 10;

    return result;
  } else if (typeof value === 'boolean') {
    result = value === true ? false : true;

    return result;
  } else {
    return 'Sorry you do not provide any value';
  }
};

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
