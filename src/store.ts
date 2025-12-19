
import { create } from "zustand";
// import { CryptoCurrencies, CryptoCurrency } from "./types";
import { CryptoCurrency, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrencyCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  // cryptocurrencies: CryptoCurrencies}
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>
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
  fetchData: async (pair) => {
    // console.log(pair);

    await fetchCurrencyCryptoPrice(pair);
  }
})));
