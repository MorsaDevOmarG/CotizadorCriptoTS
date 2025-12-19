
import { create } from "zustand";
// import { CryptoCurrencies, CryptoCurrency } from "./types";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  // cryptocurrencies: CryptoCurrencies}
  result: CryptoPrice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;

};

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  result: {} as CryptoStore,
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

    const result = await fetchCurrentCryptoPrice(pair);
    // console.log(result);

    set(() => ({
      result
    }));
  }
})));
