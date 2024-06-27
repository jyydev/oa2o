# About

[oa2o](https://www.npmjs.com/package/oa2o) (object array to array) is a simple npm module to convert iterative object array ( [{k:"a"}, {k:"b"}] ) to array ( {a:{k:"a"}, b:{k:"b"}} ):

```
let oa = [{k:"a"}, {k:"b"}];
let oa2 = oa2o(oa, "k");
console.log(oa2); // oa2 = {a:{k:"a"}, b:{k:"b"}}
```

## Installation

```
npm i oa2o
```

## Syntax & Parameters

```
oa2o(ar, key[, valKey])
```

- ar = (array) object array ( [{k:"a"}, {k:"b"}] )
- key = (string) key in object array; the value of this specified key will be used as the key for new object; usually choose key with unique value.
- valKey = (string) key in object array; the value of this specified key will be used as the value for the key in new object, instead of the whole original object element.

##### return

return object

## Advanced

Return object with shallow copy.
