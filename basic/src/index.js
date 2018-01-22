_ = require('lodash');
import './style.css'
import Icon from './icon.png'
import DataXml from './data.xml'
import DataJson from './data.json'
import printMe from './print.js'
import * as MyMath from './math.js';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(DataXml);
    console.log(DataJson);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    var square_element = document.createElement('pre');
    square_element.innerHTML = [
        'hello webpack',
        '5 squared is equal to ' + MyMath.square(5)
    ].join('\n\n');

    element.appendChild(square_element);

    return element;
}

document.body.appendChild(component());