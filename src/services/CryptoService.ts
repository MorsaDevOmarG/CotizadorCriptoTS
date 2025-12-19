import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schema/crypto-schema";
import { Pair } from "../types";

export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);
  // console.log(Data);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  // console.log(result);

  if (result.success) {
    return result.data;
  }

  // Nueva Url
  // const url = "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD";
  // const { data } = await axios(url);
  // const result = CryptoCurrencyResponseSchema.safeParse(data);
  // console.log(result.data.Data.LIST);
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  // const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;

  const { data: { DISPLAY } } = await axios(url);
  console.log(DISPLAY[pair.criptocurrency][pair.currency]);
}
