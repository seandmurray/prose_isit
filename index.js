/* jshint esversion: 6 */
// Copyright (c) 2020 Seán D. Murray
// SEE MIT LICENSE FILE
const fs = require('fs');

const TYPEOF_BOOLEAN = typeof true;
const TYPEOF_NUMBER = typeof 1;
const TYPEOF_OBJECT = typeof {};
const TYPEOF_STRING = typeof '';
const TYPEOF_FUNCTION = typeof(() => {});

// Array
exports.anArray = (item) => {
	if (exports.nil(item)) {
		return false;
	}
	return Array.isArray(item);
};

exports.notArray = (item) => {
	return exports.anArray(item) ? false : true;
};

// Boolean
exports.aBoolean = (item, primitiveOnly = false) => {
	if (exports.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_BOOLEAN) {
		return true;
	}
	if (primitiveOnly) {
		return false;
	}
	// if new Boolean() a an object
	if (typeof item === TYPEOF_OBJECT) {
		if (exports.anArray(item)) {
			return false;
		}
		if (true == item || false == item) {
			return true;
		}
	}
	return false;
};

exports.notBoolean = (item, primitiveOnly = false) => {
	return exports.aBoolean(item, primitiveOnly) ? false : true;
};

// Defined
exports.Defined = (item) => {
	if (undefined === item) {
		return false;
	}
	return true;
};

exports.notDefined = (item) => {
	return exports.Defined(item) ? false : true;
};

// Empty
exports.empty = (item) => {
	if (exports.nil(item)) return true;
	if (exports.aBoolean(item)) return false;
	if (exports.aString(item) && (item.length == 0)) return true;
	if (exports.anArray(item) && (item.length == 0)) return true;
	if (exports.anObject(item) && (Object.keys(item).length == 0)) return true;
	// a file, a function, anything else return false.
	return false;
}

exports.notEmpty = (item) => {
	return exports.empty(item) ? false : true;
};

// File
exports.aFile = (item) => {
	if (exports.aString(item) && fs.existsSync(item)) {
		return true;
	}
	return false;
};

exports.notFile = (item) => {
	return exports.aFile(item) ? false : true;
};

// Function
exports.aFunction = (item) => {
	if (exports.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_FUNCTION) {
		return true;
	}
	return false;
};

exports.notFunction = (item) => {
	return exports.aFunction(item) ? false : true;
};

// Nil = undefined or null
exports.nil = (item) => {
	if (exports.notDefined(item)) {
		return true;
	} else if (exports.null(item)) {
		return true;
	}
	return false;
};

exports.notNil = (item) => {
	return exports.nil(item) ? false : true;
};

// Intended to replace the ! which IMHO is very easy to miss.
exports.not = (item) => {
	if (exports.nil(item)) return true;
	if (item) return false;
	return true;
}

// Null
exports.null = (item) => {
	if (null === item) {
		return true;
	}
	return false;
};

exports.notNull = (item) => {
	return exports.null(item) ? false : true;
};

// Number
exports.aNumber = (item) => {
	if (exports.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_NUMBER) {
		if (Number.isNaN(item)) {
			return false;
		}
		return true;
	}
	return false;
};

exports.notNumber = (item) => {
	return exports.aNumber(item) ? false : true;
};

// Object
exports.anObject = (item) => {
	if (exports.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_OBJECT) {
		if (exports.anArray(item)) {
			return false;
		}
		return true;
	}
	return false;
};

exports.notObject = (item) => {
	return exports.anObject(item) ? false : true;
};

// Primative
exports.aPrimitive = (item) => {
	if (exports.nil(item) || exports.aNumber(item) || exports.aString(item) || exports.aBoolean(item, true)) {
		return true;
	}
	return false;
};

exports.notPrimitive = (item) => {
	return exports.aPrimitive(item) ? false : true;
};

// String
exports.aString = (item) => {
	if (exports.nil(item)) {
		return false;
	}
	if (typeof item === TYPEOF_STRING) {
		return true;
	}
	return false;
};

exports.notString = (item) => {
	return exports.aString(item) ? false : true;
};
