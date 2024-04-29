# 假資料結構產生器

## 用途

使用 faker js 時是單一純值不能產生結構，需要自己手動組合結構，此專案利用撰寫設定檔的方式來產生一個特定的假資料函數，減少手動組合結構的麻煩。

```ts
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
