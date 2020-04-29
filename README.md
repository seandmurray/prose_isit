# Prose_isit

Copyright (c) 2020 Seán D. Murray
SEE MIT LICENSE FILE

A type Utility. Make writing node easier, prettier and less error prone. Writes and reads more like prose

A utility to help discover what type a variable is... or is not.

## Notes

A new concept of *nil* has been added. Nil is anything that is either undefined or null.

This util considers an Array as not an Object, so isit.anObject(['somearray']) is false. However isit.anArray(['somearray']) is true.

## Usage

```javascript
const isit = require('prose_isit');

/**
True if item is nil (null or undefined), a boolean false or an emtpy: String, Array, Object
**/
isit.empty(obj); //True for null, undefined, empty string '', empty array [], empty object {}. False for boolean, functions and files.

/**
False if item is not nil (null or undefined), a boolean true or not an emtpy: String, Array, Object
**/
isit.notEmpty(obj); //True non empty strings, array with values, object with key/values, booleans, files, functions and files.

/**
True if item is an Array
**/
isit.anArray(obj); //True if array.

/**
False if item is an Array
**/
isit.notArray(obj); //True of not an array, undefined or null.

/**
True if item is a Boolean
if primitiveOnly is false (default) then true only for primative/non-object boolean
if primitiveOnly is true, then true for primative and object boolean
**/
isit.aBoolean(obj, primitiveOnly); //True if a boolean, if primitiveOnly false (default) then boolean primitives or boolean objects return true, if primitiveOnly true, then only boolean primitives return true

/**
False if item is a Boolean
if primitiveOnly is false (default) then flase only for primative/non-object boolean
if primitiveOnly is true, then false for primative and object boolean
**/
isit.notBoolean(obj, primitiveOnly); //The inverse of aBoolean.

/**
True if item is a function
**/
isit.aFunction (obj); //True if a function.

/**
False if item is a function
**/
isit.notFunction (obj); //True if not a function.

/**
True if item is a number
**/
isit.aNumber(obj); //True if a valid number.

/**
False if item is a number
**/
isit.notNumber(obj); //True if not a valid number.

/**
True if item is an object
**/
isit.anObject(obj); //True if an object, false if an array.

/**
False if item is an object
**/
isit.notObject(obj); //True not an object and true if an array.

/**
True if item is a primative: nil (nul or undefined), number, string or boolean (not object boolean).
**/
isit.aPrimitive(obj); //True if a primitive value: undefined, null, number, string, boolean primitive, else false.

/**
False if item is a primative: nil (nul or undefined), number, string or boolean (not object boolean).
**/
isit.notPrimitive(obj); //True if not a primitive value: undefined, null, number, string, boolean primitive, else false.

/**
True if item is a string
**/
isit.aString(obj); //True if a string.

/**
False if item is a string
**/
isit.notString(obj); //True if not a string.

/**
True if item is a file
**/
isit.aFile(obj); //True if a file that exists else false.

/**
True if item is a file
**/
isit.notFile(obj); //False if a file that exists else true;
```
