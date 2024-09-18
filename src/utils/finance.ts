import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Finance [accountName](https://fakerjs.dev/api/finance.html#accountName) */
export const accountName = (
  ...options: Parameters<typeof faker.finance.accountName>
) => createValueConfig(() => faker.finance.accountName(...options));

/** Finance [accountNumber](https://fakerjs.dev/api/finance.html#accountNumber) */
export const accountNumber = (
  ...options: Parameters<typeof faker.finance.accountNumber>
) => createValueConfig(() => faker.finance.accountNumber(...options));

/** Finance [amount](https://fakerjs.dev/api/finance.html#amount) */
export const amount = (...options: Parameters<typeof faker.finance.amount>) =>
  createValueConfig(() => faker.finance.amount(...options));

/** Finance [bic](https://fakerjs.dev/api/finance.html#bic) */
export const bic = (...options: Parameters<typeof faker.finance.bic>) =>
  createValueConfig(() => faker.finance.bic(...options));

/** Finance [bitcoinAddress](https://fakerjs.dev/api/finance.html#bitcoinAddress) */
export const bitcoinAddress = (
  ...options: Parameters<typeof faker.finance.bitcoinAddress>
) => createValueConfig(() => faker.finance.bitcoinAddress(...options));

/** Finance [creditCardCVV](https://fakerjs.dev/api/finance.html#creditCardCVV) */
export const creditCardCVV = (
  ...options: Parameters<typeof faker.finance.creditCardCVV>
) => createValueConfig(() => faker.finance.creditCardCVV(...options));

/** Finance [creditCardIssuer](https://fakerjs.dev/api/finance.html#creditCardIssuer) */
export const creditCardIssuer = (
  ...options: Parameters<typeof faker.finance.creditCardIssuer>
) => createValueConfig(() => faker.finance.creditCardIssuer(...options));

/** Finance [creditCardNumber](https://fakerjs.dev/api/finance.html#creditCardNumber) */
export const creditCardNumber = (
  ...options: Parameters<typeof faker.finance.creditCardNumber>
) => createValueConfig(() => faker.finance.creditCardNumber(...options));

/** Finance [currency](https://fakerjs.dev/api/finance.html#currency) */
export const currency = (
  ...options: Parameters<typeof faker.finance.currency>
) => createValueConfig(() => faker.finance.currency(...options));

/** Finance [currencyCode](https://fakerjs.dev/api/finance.html#currencyCode) */
export const currencyCode = (
  ...options: Parameters<typeof faker.finance.currencyCode>
) => createValueConfig(() => faker.finance.currencyCode(...options));

/** Finance [currencySymbol](https://fakerjs.dev/api/finance.html#currencySymbol) */
export const currencySymbol = (
  ...options: Parameters<typeof faker.finance.currencySymbol>
) => createValueConfig(() => faker.finance.currencySymbol(...options));

/** Finance [ethereumAddress](https://fakerjs.dev/api/finance.html#ethereumAddress) */
export const ethereumAddress = (
  ...options: Parameters<typeof faker.finance.ethereumAddress>
) => createValueConfig(() => faker.finance.ethereumAddress(...options));

/** Finance [iban](https://fakerjs.dev/api/finance.html#iban) */
export const iban = (...options: Parameters<typeof faker.finance.iban>) =>
  createValueConfig(() => faker.finance.iban(...options));

/** Finance [litecoinAddress](https://fakerjs.dev/api/finance.html#litecoinAddress) */
export const litecoinAddress = (
  ...options: Parameters<typeof faker.finance.litecoinAddress>
) => createValueConfig(() => faker.finance.litecoinAddress(...options));

/** Finance [maskedNumber](https://fakerjs.dev/api/finance.html#maskedNumber) */
export const maskedNumber = (
  ...options: Parameters<typeof faker.finance.maskedNumber>
) => createValueConfig(() => faker.finance.maskedNumber(...options));

/** Finance [pin](https://fakerjs.dev/api/finance.html#pin) */
export const pin = (...options: Parameters<typeof faker.finance.pin>) =>
  createValueConfig(() => faker.finance.pin(...options));

/** Finance [routingNumber](https://fakerjs.dev/api/finance.html#routingNumber) */
export const routingNumber = (
  ...options: Parameters<typeof faker.finance.routingNumber>
) => createValueConfig(() => faker.finance.routingNumber(...options));

/** Finance [transactionDescription](https://fakerjs.dev/api/finance.html#transactionDescription) */
export const transactionDescription = (
  ...options: Parameters<typeof faker.finance.transactionDescription>
) => createValueConfig(() => faker.finance.transactionDescription(...options));

/** Finance [transactionType](https://fakerjs.dev/api/finance.html#transactionType) */
export const transactionType = (
  ...options: Parameters<typeof faker.finance.transactionType>
) => createValueConfig(() => faker.finance.transactionType(...options));
