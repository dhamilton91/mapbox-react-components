import isArray from '../../../node_modules/lodash/isArray';
import isEmpty from '../../../node_modules/lodash/isEmpty';


function assert(value) {
	if (!(this instanceof assert)) {
		return new assert(value);
	}
	this.value = value;
}

assert.prototype.isNotEmpty = function (message) {
	if (!isArray(this.value) || isEmpty(this.value)) throw new Error(message);
	return true;
};

export default assert;
