import _ from 'lodash'
export default function printMe() {
    _.join(['1', '2', '3'])
    console.log('I get called from print.js!');
  }