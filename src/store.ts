import axios from "axios";
import { create } from "zustand";

async function getCryptos() {
  // const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
  const url = "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD";
  const {data: {Data}} = await axios(url);
  console.log(Data);
};

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    console.log('Desde FetchCryptos');
    getCryptos();
  }
}));  