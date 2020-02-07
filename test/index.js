const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const isit = require('../index');

const booleanObjFalse = new Boolean(false);
const booleanObjTrue = new Boolean(true);
const testArray = [1, 2, 3, 4];
const testArrayEmpty = [];
const testFileExists = path.join(os.tmpdir(), 'isit_test_file_exists.tmp');
const testFileNotExists = path.join(os.tmpdir(), 'isit_test_file_not_exists.tmp');
const testFunction = () => {};
const testNum = 123;
const testObj = { "a": "b" };
const testString = 'avalue';

// anArray
assert.equal(isit.anArray(), false, 'Undefined is not an array');
assert.equal(isit.anArray(null), false, 'Null is not an array');
assert.equal(isit.anArray(undefined), false, 'Undefined is not an array');
assert.equal(isit.anArray(booleanObjFalse), false, 'Boolean object is not an array');
assert.equal(isit.anArray(booleanObjTrue), false, 'Boolean object is not an array');
assert.equal(isit.anArray(testArrayEmpty), true, 'Empty array is an array');
assert.equal(isit.anArray(testArray), true, 'Array is an array');
assert.equal(isit.anArray(testFunction), false, 'Function is not an array');
assert.equal(isit.anArray(testNum), false, 'Number is not an array');
assert.equal(isit.anArray(testObj), false, 'Object is not an array');
assert.equal(isit.anArray(testString), false, 'String is not an array');
assert.equal(isit.anArray(false), false, 'False is not an array');
assert.equal(isit.anArray(true), false, 'True is not an array');
console.log('anArray testing success');

// notArray
assert.equal(isit.notArray(), true, 'Undefined is not an array');
assert.equal(isit.notArray(null), true, 'Null is not an array');
assert.equal(isit.notArray(undefined), true, 'Undefined is not an array');
assert.equal(isit.notArray(booleanObjFalse), true, 'Boolean object is not an array');
assert.equal(isit.notArray(booleanObjTrue), true, 'Boolean object is not an array');
assert.equal(isit.notArray(testArrayEmpty), false, 'Empty array is an array');
assert.equal(isit.notArray(testArray), false, 'Array is an array');
assert.equal(isit.notArray(testFunction), true, 'Function is not an array');
assert.equal(isit.notArray(testNum), true, 'Number is not an array');
assert.equal(isit.notArray(testObj), true, 'Object is not an array');
assert.equal(isit.notArray(testString), true, 'String is not an array');
assert.equal(isit.notArray(false), true, 'true is not an array');
assert.equal(isit.notArray(true), true, 'false is not an array');
console.log('notArray testing success');

// aBoolean
assert.equal(isit.aBoolean(), false, 'Undefined is not a boolean');
assert.equal(isit.aBoolean(null), false, 'Null is not a boolean');
assert.equal(isit.aBoolean(undefined), false, 'Undefined is not a boolean');
assert.equal(isit.aBoolean(booleanObjFalse), true, 'Boolean object is a boolean');
assert.equal(isit.aBoolean(booleanObjTrue), true, 'Boolean object is a boolean');
assert.equal(isit.aBoolean(testArrayEmpty), false, 'Empty array is not a boolean');
assert.equal(isit.aBoolean(testArray), false, 'Array is not a boolean');
assert.equal(isit.aBoolean(testFunction), false, 'Function is not a boolean');
assert.equal(isit.aBoolean(testNum), false, 'Number is not a boolean');
assert.equal(isit.aBoolean(testObj), false, 'Object is not a boolean');
assert.equal(isit.aBoolean(testString), false, 'String is not a boolean');
assert.equal(isit.aBoolean(false), true, 'False is a boolean');
assert.equal(isit.aBoolean(true), true, 'True is a boolean');
console.log('aBoolean testing success');

// aBoolean primitive only
assert.equal(isit.aBoolean(null, true), false, 'Null is not a boolean primitive');
assert.equal(isit.aBoolean(undefined, true), false, 'Undefined is not a boolean primitive');
assert.equal(isit.aBoolean(booleanObjFalse, true), false, 'Boolean object is not a boolean primitive');
assert.equal(isit.aBoolean(booleanObjTrue, true), false, 'Boolean object is not a boolean primitive');
assert.equal(isit.aBoolean(testArrayEmpty, true), false, 'Empty array is not a boolean primitive');
assert.equal(isit.aBoolean(testArray, true), false, 'Array is not a boolean primitive');
assert.equal(isit.aBoolean(testFunction, true), false, 'Function is not a boolean primitive');
assert.equal(isit.aBoolean(testNum, true), false, 'Number is not a boolean primitive');
assert.equal(isit.aBoolean(testObj, true), false, 'Object is not a boolean primitive');
assert.equal(isit.aBoolean(testString, true), false, 'String is not a boolean primitive');
assert.equal(isit.aBoolean(false, true), true, 'False is a boolean primitive');
assert.equal(isit.aBoolean(true, true), true, 'True is a boolean primitive');
console.log('aBoolean primitive testing success');

// notBoolean
assert.equal(isit.notBoolean(), true, 'Undefined is not a boolean');
assert.equal(isit.notBoolean(null), true, 'Null is not a boolean');
assert.equal(isit.notBoolean(undefined), true, 'Undefined is not a boolean');
assert.equal(isit.notBoolean(booleanObjFalse), false, 'Boolean object is a boolean');
assert.equal(isit.notBoolean(booleanObjTrue), false, 'Boolean object is a boolean');
assert.equal(isit.notBoolean(testArrayEmpty), true, 'Empty array is not a boolean');
assert.equal(isit.notBoolean(testArray), true, 'Array is not a boolean');
assert.equal(isit.notBoolean(testFunction), true, 'Function is not a boolean');
assert.equal(isit.notBoolean(testNum), true, 'Number is not a boolean');
assert.equal(isit.notBoolean(testObj), true, 'Object is not a boolean');
assert.equal(isit.notBoolean(testString), true, 'String is not a boolean');
assert.equal(isit.notBoolean(false), false, 'Boolean is a boolean');
assert.equal(isit.notBoolean(true), false, 'Boolean is a boolean');
console.log('notBoolean testing success');

// notBoolean primitive
assert.equal(isit.notBoolean(null, true), true, 'Null is not a boolean primitive');
assert.equal(isit.notBoolean(undefined, true), true, 'Undefined is not a boolean primitive');
assert.equal(isit.notBoolean(booleanObjFalse, true), true, 'Boolean object is a not boolean primitive');
assert.equal(isit.notBoolean(booleanObjTrue, true), true, 'Boolean object is a not boolean primitive');
assert.equal(isit.notBoolean(testArrayEmpty, true), true, 'Empty array is not a boolean primitive');
assert.equal(isit.notBoolean(testArray, true), true, 'Array is not a boolean primitive');
assert.equal(isit.notBoolean(testFunction, true), true, 'Function is not a boolean primitive');
assert.equal(isit.notBoolean(testNum, true), true, 'Number is not a boolean primitive');
assert.equal(isit.notBoolean(testObj, true), true, 'Object is not a boolean primitive');
assert.equal(isit.notBoolean(testString, true), true, 'String is not a boolean primitive');
assert.equal(isit.notBoolean(false, true), false, 'Boolean is a boolean primitive');
assert.equal(isit.notBoolean(true, true), false, 'Boolean is a boolean primitive');
console.log('notBoolean primitive testing success');

// Defined
assert.equal(isit.Defined(), false, 'Undefined is not defined');
assert.equal(isit.Defined(null), true, 'Null is not defined');
assert.equal(isit.Defined(undefined), false, 'Undefined is not defined');
assert.equal(isit.Defined(booleanObjFalse), true, 'Boolean object is not defined');
assert.equal(isit.Defined(booleanObjTrue), true, 'Boolean object is not defined');
assert.equal(isit.Defined(testArrayEmpty), true, 'Empty array is not defined');
assert.equal(isit.Defined(testArray), true, 'Array is not defined');
assert.equal(isit.Defined(testFunction), true, 'Function is not defined');
assert.equal(isit.Defined(testNum), true, 'Number is not defined');
assert.equal(isit.Defined(testObj), true, 'Object is not defined');
assert.equal(isit.Defined(testString), true, 'String is not defined');
assert.equal(isit.Defined(false), true, 'Boolean is not defined');
assert.equal(isit.Defined(true), true, 'Boolean is not defined');
console.log('Defined testing success');

// notDefined
assert.equal(isit.notDefined(), true, 'Undefined is defined');
assert.equal(isit.notDefined(null), false, 'Null is not defined');
assert.equal(isit.notDefined(undefined), true, 'Undefined is defined');
assert.equal(isit.notDefined(booleanObjFalse), false, 'Boolean object is not defined');
assert.equal(isit.notDefined(booleanObjTrue), false, 'Boolean object is not defined');
assert.equal(isit.notDefined(testArrayEmpty), false, 'Empty array is not defined');
assert.equal(isit.notDefined(testArray), false, 'Array is not defined');
assert.equal(isit.notDefined(testFunction), false, 'Function is not defined');
assert.equal(isit.notDefined(testNum), false, 'Number is not defined');
assert.equal(isit.notDefined(testObj), false, 'Object is not defined');
assert.equal(isit.notDefined(testString), false, 'String is not defined');
assert.equal(isit.notDefined(false), false, 'Boolean is not defined');
assert.equal(isit.notDefined(true), false, 'Boolean is not defined');
console.log('notDefined testing success');

// aFile
fs.writeFileSync(testFileExists, 'testfileexists');
assert.equal(isit.aFile(), false, 'Undefined is not a file');
assert.equal(isit.aFile(null), false, 'Null is not a file');
assert.equal(isit.aFile(undefined), false, 'Undefined is not a file');
assert.equal(isit.aFile(booleanObjFalse), false, 'Boolean object is not a file');
assert.equal(isit.aFile(booleanObjTrue), false, 'Boolean object is not a file');
assert.equal(isit.aFile(testArrayEmpty), false, 'Empty array is not a file');
assert.equal(isit.aFile(testArray), false, 'Array is not a file');
assert.equal(isit.aFile(testNum), false, 'Number is not a file');
assert.equal(isit.aFile(testObj), false, 'Object is not a file');
assert.equal(isit.aFile(testString), false, 'String is not a file');
assert.equal(isit.aFile(testFileExists), true, 'Object is an existing file');
assert.equal(isit.aFile(testFileNotExists), false, 'Object is not an existing file');
console.log('aFile testing success');

// notFile
assert.equal(isit.notFile(), true, 'Undefined is not a file');
assert.equal(isit.notFile(null), true, 'Null is not a file');
assert.equal(isit.notFile(undefined), true, 'Undefined is not a file');
assert.equal(isit.notFile(booleanObjFalse), true, 'Boolean object is not a file');
assert.equal(isit.notFile(booleanObjTrue), true, 'Boolean object is not a file');
assert.equal(isit.notFile(testArrayEmpty), true, 'Empty array is not a file');
assert.equal(isit.notFile(testArray), true, 'Array is not a file');
assert.equal(isit.notFile(testNum), true, 'Number is not a file');
assert.equal(isit.notFile(testObj), true, 'Object is not a file');
assert.equal(isit.notFile(testString), true, 'String is not a file');
assert.equal(isit.notFile(testFileExists), false, 'Object is an existing file');
assert.equal(isit.notFile(testFileNotExists), true, 'Object is not an existing file');
console.log('notFile testing success');

// aFunction
assert.equal(isit.aFunction(), false, 'Undefined is a not a function');
assert.equal(isit.aFunction(null), false, 'Null is not a function');
assert.equal(isit.aFunction(undefined), false, 'Undefined is a not a function');
assert.equal(isit.aFunction(booleanObjFalse), false, 'Boolean object is not a function');
assert.equal(isit.aFunction(booleanObjTrue), false, 'Boolean object is not a function');
assert.equal(isit.aFunction(testArrayEmpty), false, 'Empty array is not a function');
assert.equal(isit.aFunction(testArray), false, 'Array is not a function');
assert.equal(isit.aFunction(testFunction), true, 'Function is a function');
assert.equal(isit.aFunction(testNum), false, 'Number is not a function');
assert.equal(isit.aFunction(testObj), false, 'Object is not a function');
assert.equal(isit.aFunction(testString), false, 'String is not a function');
assert.equal(isit.aFunction(false), false, 'Boolean is not a function');
assert.equal(isit.aFunction(true), false, 'Boolean is not a function');
console.log('aFunction testing success');

// notFunction
assert.equal(isit.notFunction(), true, 'Undefined is a not a function');
assert.equal(isit.notFunction(null), true, 'Null is not a function');
assert.equal(isit.notFunction(undefined), true, 'Undefined is a not a function');
assert.equal(isit.notFunction(booleanObjFalse), true, 'Boolean object is not a function');
assert.equal(isit.notFunction(booleanObjTrue), true, 'Boolean object is not a function');
assert.equal(isit.notFunction(testArrayEmpty), true, 'Empty array is not a function');
assert.equal(isit.notFunction(testArray), true, 'Array is not a function');
assert.equal(isit.notFunction(testFunction), false, 'Function is a function');
assert.equal(isit.notFunction(testNum), true, 'Number is not a function');
assert.equal(isit.notFunction(testObj), true, 'Object is not a function');
assert.equal(isit.notFunction(testString), true, 'String is not a function');
assert.equal(isit.notFunction(true), true, 'Boolean is not a function');
assert.equal(isit.notFunction(true), true, 'Boolean is not a function');
console.log('notFunction testing success');

// Nil
assert.equal(isit.nil(), true, 'Undefined is nil');
assert.equal(isit.nil(null), true, 'Null is nil');
assert.equal(isit.nil(undefined), true, 'Undefined is nil');
assert.equal(isit.nil(booleanObjFalse), false, 'Boolean object is not nil');
assert.equal(isit.nil(booleanObjTrue), false, 'Boolean object is not nil');
assert.equal(isit.nil(testArrayEmpty), false, 'Empty array is not nil');
assert.equal(isit.nil(testArray), false, 'Array is not nil');
assert.equal(isit.nil(testFunction), false, 'Function is not nil');
assert.equal(isit.nil(testNum), false, 'Number is not nil');
assert.equal(isit.nil(testObj), false, 'Object is not nil');
assert.equal(isit.nil(testString), false, 'String is not nil');
assert.equal(isit.nil(false), false, 'Boolean is not nil');
assert.equal(isit.nil(true), false, 'Boolean is not nil');
console.log('Nil testing success');

// notNil
assert.equal(isit.notNil(), false, 'Undefined is nil');
assert.equal(isit.notNil(null), false, 'Null is nil');
assert.equal(isit.notNil(undefined), false, 'Undefined is nil');
assert.equal(isit.notNil(booleanObjFalse), true, 'Boolean object is not nil');
assert.equal(isit.notNil(booleanObjTrue), true, 'Boolean object is not nil');
assert.equal(isit.notNil(testArrayEmpty), true, 'Empty array is not nil');
assert.equal(isit.notNil(testArray), true, 'Array is not nil');
assert.equal(isit.notNil(testFunction), true, 'Function is not nil');
assert.equal(isit.notNil(testNum), true, 'Number is not nil');
assert.equal(isit.notNil(testObj), true, 'Object is not nil');
assert.equal(isit.notNil(testString), true, 'String is not nil');
assert.equal(isit.notNil(false), true, 'Boolean is not nil');
assert.equal(isit.notNil(true), true, 'Boolean is not nil');
console.log('notNil testing success');

// not
assert.equal(isit.not(), true, 'Undefined is false so returns true');
assert.equal(isit.not(null), true, 'null is false so returns true');
assert.equal(isit.not(undefined), true, 'Undefined is false so returns true');
assert.equal(isit.not(true), false, 'true will return false');
assert.equal(isit.not(false), true, 'false will return true');
assert.equal(isit.not(Boolean(true)), false, 'true will return false');
assert.equal(isit.not(Boolean(false)), true, 'false will return true');
console.log('not testing success');

// Null
assert.equal(isit.null(), false, 'Undefined is not null');
assert.equal(isit.null(null), true, 'Null is null');
assert.equal(isit.null(undefined), false, 'Undefined is not null');
assert.equal(isit.null(booleanObjFalse), false, 'Boolean object is not null');
assert.equal(isit.null(booleanObjTrue), false, 'Boolean object is not null');
assert.equal(isit.null(testArrayEmpty), false, 'Empty array is not null');
assert.equal(isit.null(testArray), false, 'Array is not null');
assert.equal(isit.null(testFunction), false, 'Function is not null');
assert.equal(isit.null(testNum), false, 'Number is not null');
assert.equal(isit.null(testObj), false, 'Object is not null');
assert.equal(isit.null(testString), false, 'String is not null');
assert.equal(isit.null(false), false, 'Boolean is not null');
assert.equal(isit.null(true), false, 'Boolean is not null');
console.log('Null testing success');

// notNull
assert.equal(isit.notNull(), true, 'Undefined is not null');
assert.equal(isit.notNull(null), false, 'Null is null');
assert.equal(isit.notNull(undefined), true, 'Undefined is not null');
assert.equal(isit.notNull(booleanObjFalse), true, 'Boolean object is not null');
assert.equal(isit.notNull(booleanObjTrue), true, 'Boolean object is not null');
assert.equal(isit.notNull(testArrayEmpty), true, 'Empty array is not null');
assert.equal(isit.notNull(testArray), true, 'Array is not null');
assert.equal(isit.notNull(testFunction), true, 'Function is not null');
assert.equal(isit.notNull(testNum), true, 'Number is not null');
assert.equal(isit.notNull(testObj), true, 'Object is not null');
assert.equal(isit.notNull(testString), true, 'String is not null');
assert.equal(isit.notNull(false), true, 'Boolean is not null');
assert.equal(isit.notNull(true), true, 'Boolean is not null');
console.log('notNull testing success');

// aNumber
assert.equal(isit.aNumber(), false, 'Undefined is not a number');
assert.equal(isit.aNumber(null), false, 'Null is a not number');
assert.equal(isit.aNumber(undefined), false, 'Undefined is not a number');
assert.equal(isit.aNumber(booleanObjFalse), false, 'Boolean object is not a number');
assert.equal(isit.aNumber(booleanObjTrue), false, 'Boolean object is not a number');
assert.equal(isit.aNumber(testArrayEmpty), false, 'Empty array is not a number');
assert.equal(isit.aNumber(testArray), false, 'Array is not a number');
assert.equal(isit.aNumber(testFunction), false, 'Function is not a number');
assert.equal(isit.aNumber(testNum), true, 'Number is a number');
assert.equal(isit.aNumber(testObj), false, 'Object is not a number');
assert.equal(isit.aNumber(testString), false, 'String is not a number');
assert.equal(isit.aNumber(false), false, 'Boolean is not a number');
assert.equal(isit.aNumber(true), false, 'Boolean is not a number');
console.log('aNumber testing success');

// notNumber
assert.equal(isit.notNumber(), true, 'Undefined is not a number');
assert.equal(isit.notNumber(null), true, 'Null is a not number');
assert.equal(isit.notNumber(undefined), true, 'Undefined is not a number');
assert.equal(isit.notNumber(booleanObjFalse), true, 'Boolean object is not a number');
assert.equal(isit.notNumber(booleanObjTrue), true, 'Boolean object is not a number');
assert.equal(isit.notNumber(testArrayEmpty), true, 'Empty array is not a number');
assert.equal(isit.notNumber(testArray), true, 'Array is not a number');
assert.equal(isit.notNumber(testFunction), true, 'Function is not a number');
assert.equal(isit.notNumber(testNum), false, 'Number is a number');
assert.equal(isit.notNumber(testObj), true, 'Object is not a number');
assert.equal(isit.notNumber(testString), true, 'String is not a number');
assert.equal(isit.notNumber(false), true, 'Boolean is not a number');
assert.equal(isit.notNumber(true), true, 'Boolean is not a number');
console.log('notNumber testing success');

// anObject
assert.equal(isit.anObject(), false, 'Undefined is not an object');
assert.equal(isit.anObject(null), false, 'Null is a not object');
assert.equal(isit.anObject(undefined), false, 'Undefined is not an object');
assert.equal(isit.anObject(booleanObjFalse), true, 'Boolean object is an object');
assert.equal(isit.anObject(booleanObjTrue), true, 'Boolean object is an object');
assert.equal(isit.anObject(testArrayEmpty), false, 'Empty array is not an object');
assert.equal(isit.anObject(testArray), false, 'Array is not an object');
assert.equal(isit.anObject(testFunction), false, 'Function is not an object');
assert.equal(isit.anObject(testNum), false, 'Number is an object');
assert.equal(isit.anObject(testObj), true, 'Object is not an object');
assert.equal(isit.anObject(testString), false, 'String is not an object');
assert.equal(isit.anObject(false), false, 'Boolean is not an object');
assert.equal(isit.anObject(true), false, 'Boolean is not an object');
console.log('anObject testing success');

// notObject
assert.equal(isit.notObject(), true, 'Undefined is not an object');
assert.equal(isit.notObject(null), true, 'Null is a not object');
assert.equal(isit.notObject(undefined), true, 'Undefined is not an object');
assert.equal(isit.notObject(booleanObjFalse), false, 'Boolean object is an object');
assert.equal(isit.notObject(booleanObjTrue), false, 'Boolean object is an object');
assert.equal(isit.notObject(testArrayEmpty), true, 'Empty array is not an object');
assert.equal(isit.notObject(testArray), true, 'Array is not an object');
assert.equal(isit.notObject(testFunction), true, 'Function is not an object');
assert.equal(isit.notObject(testNum), true, 'Number is an object');
assert.equal(isit.notObject(testObj), false, 'Object is not an object');
assert.equal(isit.notObject(testString), true, 'String is not an object');
assert.equal(isit.notObject(false), true, 'Boolean is not an object');
assert.equal(isit.notObject(true), true, 'Boolean is not an object');
console.log('notObject testing success');

// aPrimitive
assert.equal(isit.aPrimitive(), true, 'Undefined is a primitive');
assert.equal(isit.aPrimitive(null), true, 'Null is a primitive');
assert.equal(isit.aPrimitive(undefined), true, 'Undefined is a primitive');
assert.equal(isit.aPrimitive(booleanObjFalse), false, 'Boolean object is not a primitive');
assert.equal(isit.aPrimitive(booleanObjTrue), false, 'Boolean object is not primitive a primitive');
assert.equal(isit.aPrimitive(testArrayEmpty), false, 'Empty array is not a primitive');
assert.equal(isit.aPrimitive(testArray), false, 'Array is not a primitive');
assert.equal(isit.aPrimitive(testFunction), false, 'Function is not a primitive');
assert.equal(isit.aPrimitive(testNum), true, 'Number is a primitive');
assert.equal(isit.aPrimitive(testObj), false, 'Object is not a primitive');
assert.equal(isit.aPrimitive(testString), true, 'String is a primitive');
assert.equal(isit.aPrimitive(false), true, 'Boolean primitive is a primitive');
assert.equal(isit.aPrimitive(true), true, 'Boolean primitive ia a primitive');
console.log('aPrimitive testing success');

// notPrimitive
assert.equal(isit.notPrimitive(), false, 'Undefined is a primitive');
assert.equal(isit.notPrimitive(null), false, 'Null is a primitive');
assert.equal(isit.notPrimitive(undefined), false, 'Undefined is a primitive');
assert.equal(isit.notPrimitive(booleanObjFalse), true, 'Boolean object is not a primitive');
assert.equal(isit.notPrimitive(booleanObjTrue), true, 'Boolean object is not a primitive');
assert.equal(isit.notPrimitive(testArrayEmpty), true, 'Empty array is not a primitive');
assert.equal(isit.notPrimitive(testArray), true, 'Array is not a primitive');
assert.equal(isit.notPrimitive(testFunction), true, 'Function is not a primitive');
assert.equal(isit.notPrimitive(testNum), false, 'Number is a primitive');
assert.equal(isit.notPrimitive(testObj), true, 'Object is not a primitive');
assert.equal(isit.notPrimitive(testString), false, 'String is a primitive');
assert.equal(isit.notPrimitive(false), false, 'Boolean primitive is a primitive');
assert.equal(isit.notPrimitive(true), false, 'Boolean primitive ia a primitive');
console.log('notprimitive testing success');

// aString
assert.equal(isit.aString(), false, 'Undefined is not a string');
assert.equal(isit.aString(null), false, 'Null is a not object');
assert.equal(isit.aString(undefined), false, 'Undefined is not a string');
assert.equal(isit.aString(booleanObjFalse), false, 'Boolean object is a string');
assert.equal(isit.aString(booleanObjTrue), false, 'Boolean object is a string');
assert.equal(isit.aString(testArrayEmpty), false, 'Empty array is not a string');
assert.equal(isit.aString(testArray), false, 'Array is not a string');
assert.equal(isit.aString(testFunction), false, 'Function is not a string');
assert.equal(isit.aString(testNum), false, 'Number is a string');
assert.equal(isit.aString(testObj), false, 'Object is not a string');
assert.equal(isit.aString(testString), true, 'String is a string');
assert.equal(isit.aString(false), false, 'Boolean is not a string');
assert.equal(isit.aString(true), false, 'Boolean is not a string');
console.log('aString testing success');

// notString
assert.equal(isit.notString(), true, 'Undefined is not a string');
assert.equal(isit.notString(null), true, 'Null is a not object');
assert.equal(isit.notString(undefined), true, 'Undefined is not a string');
assert.equal(isit.notString(booleanObjFalse), true, 'Boolean object is a string');
assert.equal(isit.notString(booleanObjTrue), true, 'Boolean object is a string');
assert.equal(isit.notString(testArrayEmpty), true, 'Empty array is not a string');
assert.equal(isit.notString(testArray), true, 'Array is not a string');
assert.equal(isit.notString(testFunction), true, 'Function is not a string');
assert.equal(isit.notString(testNum), true, 'Number is a string');
assert.equal(isit.notString(testObj), true, 'Object is not a string');
assert.equal(isit.notString(testString), false, 'String is a string');
assert.equal(isit.notString(false), true, 'Boolean is not a string');
assert.equal(isit.notString(true), true, 'Boolean is not a string');
console.log('notString testing success');

console.log('Isit testing done');
