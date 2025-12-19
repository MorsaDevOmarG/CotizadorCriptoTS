import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);

// Nueva Url
// export const CurrencySchema = z.object({
//   ID: z.number(),
//   NAME: z.string(),
//   SYMBOL: z.string(),
//   PRICE_USD: z.number(),
//   CHANGE_24H_PERCENT: z.number().optional(),
// });


// export const CryptoCurrencyResponseSchema = z.object({
//   Data: z.object({
//     LIST: z.array(CurrencySchema),
//   }),
// });


