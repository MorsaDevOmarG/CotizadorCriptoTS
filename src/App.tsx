import { useEffect } from "react";
import CriptoSearchForn from "./components/CriptoSearchForn"
import { useCryptoStore } from "./store"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomendas</span> </h1>

        <div className="content">
          <CriptoSearchForn />
        </div>
      </div>
    </>
  )
}

export default App
