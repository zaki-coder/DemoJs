function reverseStr(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'that is not a string!';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverseStr1(str) {
  return str.split('').reverse().join('');
}

reverseStr('hi my name is zaki');