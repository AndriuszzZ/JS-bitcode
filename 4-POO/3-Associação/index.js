const Address = require('./Address')
const Person = require('./Person')

const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
const andre = new Person('Andre Lima', addr)

console.log(andre)
console.log(andre.address.fullAddress())