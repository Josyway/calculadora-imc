import Cabecalho from "./components/Cabecalho"
import Formulario from "./components/Formulario" 
import TabelaIMC from "./components/Tabela/Index"
import Resultado from "./components/Resultado"

function App() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <section id="result">
        <Formulario />
          <section id="reference-table">
          </section>
        </section>
      </div>
      <Resultado />
    </>
  );
}

export default App;
