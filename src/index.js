import _ from 'lodash';

import { Nijou, NAME } from './utilities';

console.log(Nijou(2));
console.log(NAME)

function component() {
	const element = document.createElement('div');
	const array = ['Hello', 'webpack', '!!!']
	element.innerHTML = _.join(array, ' ')
	return element;
}

document.body.appendChild(component());