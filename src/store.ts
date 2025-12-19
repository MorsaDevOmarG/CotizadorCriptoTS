import axios from "axios";
import { create } from "zustand";
import { CryptoCurrenciesResponseSchema } from "./schema/crypto-schema";
// import { CryptoCurrencies, CryptoCurrency } from "./types";
import { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  // cryptocurrencies: CryptoCurrencies}
  fetchCryptos: () => Promise<void>
};

async function getCryptos() {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {data: {Data}} = await axios(url);
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
};

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],

  fetchCryptos: async () => {
    // console.log("Desde FetchCryptos");

    const cryptocurrencies = await getCryptos();
    // console.log(cryptocurrencies);

    set(() => ({
      cryptocurrencies
    }));
  },
})));
