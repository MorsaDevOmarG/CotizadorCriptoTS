import CriptoSearchForn from "./components/CriptoSearchForn"


function App() {

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
