# 假資料結構產生器
- [假資料結構產生器](#假資料結構產生器)
  - [用途](#用途)
    - [createValueGenerator](#createvaluegenerator)
    - [createSelectionGenerator](#createselectiongenerator)
    - [createObjectGenerator](#createobjectgenerator)
    - [createArrayGenerator](#createarraygenerator)
    - [createTupleGenerator](#createtuplegenerator)
    - [createBoundedSeriesGenerator](#createboundedseriesgenerator)
  - [擴充](#擴充)

## 用途

使用 faker js 時是單一純值不能產生結構，需要自己手動組合結構，此專案利用撰寫設定檔的方式來產生一個特定的假資料函數，減少手動組合結構的麻煩。

```javascript
const test = {
  type: 'obj',
  content: {
    name: {
      type: 'value',
      generateFn: () => 'hello',
    },
    list: {
      type: 'arr',
      len: 5,
      item: {
        type: 'value',
        generateFn: () => 10,
      },
    },
  },
};

const generateFn = createGeneratorByType(test);

console.log(generateFn());

/*
{
  name: "hello"
  list: [10, 10, 10, 10, 10,]
}
*/
```



### createValueGenerator

```javascript
const generateFn = createValueGenerator({
  type: 'value',
  generateFn: () => 10,
})

console.log(generateFn());

// 10
```

### createSelectionGenerator

```javascript
const generateFn = createSelectionGenerator({
 type: 'select',
 items: [1, 2, 3, 4, 5],
})

console.log(generateFn());

// 1 or 2 or 3 or 4 or 5
```

### createObjectGenerator

```javascript
const generateFn = createObjectGenerator({
 type: 'obj',
 content: {
   name: {
     type: 'value',
     generateFn: () => 'hello',
   },
   list: {
     type: 'arr',
     len: 5,
     item: {
       type: 'value',
       generateFn: () => 10,
     }
   }
 }
})

console.log(generateFn());

// {
//   name: 'hello',
//   list: [10, 10, 10, 10, 10]
// }
```
### createArrayGenerator


```javascript
const generateFn = createArrayGenerator({
 type: 'arr',
 len: 5,
 item: {
   type: 'value',
   generateFn: () => 10,
 }
})

console.log(generateFn());

// [10, 10, 10, 10, 10]
```

### createTupleGenerator

```javascript
const generateFn = createTupleGenerator({
 type: 'tuple',
 configItems: [
   {
     type: 'value',
     generateFn: () => 10,
   },
   {
     type: 'value',
     generateFn: () => 'hello',
   },
 ]
})

console.log(generateFn());

// [10, 'hello']
```

### createBoundedSeriesGenerator

```javascript
const generateFn = createBoundedSeriesGenerator({
 type: 'bounded_series',
 upperLimit: 1.1,
 lowerLimit: 0.9,
 createInitValue: () => 100,
 count: 20
})

console.log(generateFn());

// [100 * 0.9 <= num <= 100 * 1.1, 
//  prev * 0.9 <= num <= prev * 1.1,
//  prev * 0.9 <= num <= prev * 1.1,
//  ...] 
```

## 擴充

一切的值皆由 `value` 產生，可以自己創建各種不同亂數函數

```mermaid
flowchart TB
 value --> int
 value --> float
 value --> string
 value --> email
 value --> other[...]

```