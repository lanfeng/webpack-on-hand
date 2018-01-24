import _ from 'lodash'
console.log('The another-print.js module has loaded! See the network tab in dev tools...');
export default function printMe() {
    console.log('call lodash to concat: ', _.join(['4', '5', '6'], ", "))
    console.log('I get called from another-print.js!');
  }