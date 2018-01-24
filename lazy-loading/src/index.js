
import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import DataXml from './data.xml'
import DataJson from './data.json'
//import printMe from './print.js'
import * as MyMath from './math.js';

console.log('current run mode: ' + process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
    console.log('not in production mode: ' + process.env.NODE_ENV)
}

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

    var btn1 = document.createElement('button1');
    btn1.innerHTML = 'Click me and check the console!';

    btn1.onclick = e => import(/*click to import and load print.js*/ './print.js')
        .then(x => {
            console.log("import module: " + JSON.stringify(x))
            var print = x.default;
            print();
        }
        )

    element.appendChild(btn1);

    var btn2 = document.createElement('button2');
    btn2.innerHTML = 'Click me and check the console!';

    btn2.onclick = e => import(/*click to import and load print.js*/ './another-print.js')
        .then(x => {
            console.log("import module: " + JSON.stringify(x))
            var print = x.default;
            print();
        }
        )

    element.appendChild(btn2);

    var square_element = document.createElement('pre');
    square_element.innerHTML = [
        'hello webpack',
        '5 squared is equal to ' + MyMath.square(5)
    ].join('\n\n');

    element.appendChild(square_element);

    return element;
}

document.body.appendChild(component());