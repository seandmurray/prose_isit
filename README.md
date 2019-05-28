# Prose/Isit

A type Utility. Make writing node easier, prettier and less error prone. Writes and reads more like prose

A utility to help discover that type a variable is or is not.

## Notes

A new concept of *nil* has been added. Nil is anything that is either undefined or null.

This util considers an Array as not an Object, so isit.anObject(['somearray']) is false. However isit.anArray(['somearray']) is true.

## Usage

```javascript
const isit = require('prose_isit');

isit.anArray(obj); //True if array.
isit.notArray(obj); //True of not an array, undefined or null.

isit.aBoolean(obj, primitiveOnly); //True if a boolean, if primitiveOnly false (default) then boolean primitives or boolean objects return true, if primitiveOnly true, then only boolean primitives return true
isit.notBoolean(obj, primitiveOnly); //The inverse of aBoolean.

isit.Defined(obj); //True if defined, including if value a null.
isit.notDefined(obj); //True if undefined, false if null.

isit.aFunction (obj); //True if a function.
isit.notFunction (obj); //True if not a function.

isit.nil(obj); //True if undefined or null.
isit.notNil(obj); //True if defined or not null.

isit.null(obj); //True if null.
isit.notNull(obj); //True if undefined or not null.

isit.aNumber(obj); //True if a valid number.
isit.notNumber(obj); //True if not a valid number.

isit.anObject(obj); //True if an object, false if an array.
isit.notObject(obj); //True not an object and true if an array.

isit.aPrimitive(obj); //True if a primitive value: undefined, null, number, string, boolean primitive, else false.
isit.notPrimitive(obj); //True if not a primitive value: undefined, null, number, string, boolean primitive, else false.

isit.aString(obj); //True if a string.
isit.notString(obj); //True if not a string.
```
