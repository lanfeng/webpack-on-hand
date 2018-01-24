import _ from 'lodash'
console.log('The print.js module has loaded! See the network tab in dev tools...');
export default function printMe() {
    console.log('call lodash to concat: ', _.join(['1', '2', '3'], ", "))
    console.log('I get called from print.js!');
  }