const b1 = Buffer.from('test');

// prints the hexadecimal representation of the binary value of the string
console.log('b1', b1);
// <Buffer 74 65 73 74>
// t character has a character code of 116 in decimal or
// 7*16 = 112
// 4*1 = 4
// total = 116

// console.log(buffer[0]);
// 116

// enumeration methods on the buffer object will return
// the decimal value of each byte
const b2 = Buffer.from('test€');
console.log('b2:', b2);
b2.forEach((d) => console.log(d));

const b3 = b1.map((i) => {
  return i + 1;
});

console.log(b3.toString());