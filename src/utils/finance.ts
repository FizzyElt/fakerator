import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Finance [accountName](https://fakerjs.dev/api/finance.html#accountName) */
export const accountName = makeValueConfigFn(faker.finance.accountName);

/** Finance [accountNumber](https://fakerjs.dev/api/finance.html#accountNumber) */
export const accountNumber = makeValueConfigFn(faker.finance.accountNumber);

/** Finance [amount](https://fakerjs.dev/api/finance.html#amount) */
export const amount = makeValueConfigFn(faker.finance.amount);

/** Finance [bic](https://fakerjs.dev/api/finance.html#bic) */
export const bic = makeValueConfigFn(faker.finance.bic);

/** Finance [bitcoinAddress](https://fakerjs.dev/api/finance.html#bitcoinAddress) */
export const bitcoinAddress = makeValueConfigFn(faker.finance.bitcoinAddress);

/** Finance [creditCardCVV](https://fakerjs.dev/api/finance.html#creditCardCVV) */
export const creditCardCVV = makeValueConfigFn(faker.finance.creditCardCVV);

/** Finance [creditCardIssuer](https://fakerjs.dev/api/finance.html#creditCardIssuer) */
export const creditCardIssuer = makeValueConfigFn(
  faker.finance.creditCardIssuer,
);

/** Finance [creditCardNumber](https://fakerjs.dev/api/finance.html#creditCardNumber) */
export const creditCardNumber = makeValueConfigFn(
  faker.finance.creditCardNumber,
);

/** Finance [currency](https://fakerjs.dev/api/finance.html#currency) */
export const currency = makeValueConfigFn(faker.finance.currency);

/** Finance [currencyCode](https://fakerjs.dev/api/finance.html#currencyCode) */
export const currencyCode = makeValueConfigFn(faker.finance.currencyCode);

/** Finance [currencySymbol](https://fakerjs.dev/api/finance.html#currencySymbol) */
export const currencySymbol = makeValueConfigFn(faker.finance.currencySymbol);

/** Finance [ethereumAddress](https://fakerjs.dev/api/finance.html#ethereumAddress) */
export const ethereumAddress = makeValueConfigFn(faker.finance.ethereumAddress);

/** Finance [iban](https://fakerjs.dev/api/finance.html#iban) */
export const iban = makeValueConfigFn(faker.finance.iban);

/** Finance [litecoinAddress](https://fakerjs.dev/api/finance.html#litecoinAddress) */
export const litecoinAddress = makeValueConfigFn(faker.finance.litecoinAddress);

/** Finance [maskedNumber](https://fakerjs.dev/api/finance.html#maskedNumber) */
export const maskedNumber = makeValueConfigFn(faker.finance.maskedNumber);

/** Finance [pin](https://fakerjs.dev/api/finance.html#pin) */
export const pin = makeValueConfigFn(faker.finance.pin);

/** Finance [routingNumber](https://fakerjs.dev/api/finance.html#routingNumber) */
export const routingNumber = makeValueConfigFn(faker.finance.routingNumber);

/** Finance [transactionDescription](https://fakerjs.dev/api/finance.html#transactionDescription) */
export const transactionDescription = makeValueConfigFn(
  faker.finance.transactionDescription,
);

/** Finance [transactionType](https://fakerjs.dev/api/finance.html#transactionType) */
export const transactionType = makeValueConfigFn(faker.finance.transactionType);
