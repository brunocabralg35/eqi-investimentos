import { GrCircleInformation } from "react-icons/gr";

function App() {
  return (
    <div className="App">

      <h1 className="title-page">Simulador de Investimentos</h1>

      <div className="BOX">
        <div className="simulator">
          <h1>Simulador</h1>
          <div className="box-simulator">
            <div className="col-1">
              <div className="label-rendimento">
                <p>Rendimento</p>
                <GrCircleInformation />
              </div>
              <div className="option-box-1">
                <input type="checkbox" name="bruto" />
                <input type="checkbox" name="liquido" />
              </div>
              <label for="aporte-inicial">Aporte Inicial</label>
              <input type="number" name="aporte-inicial" placeholder="0,00" />
              <label for="prazo">Prazo</label>
              <input type="number" name="prazo" placeholder="0,00" />
              <label for="ipca">IPCA (ao ano)</label>
              <input type="number" name="ipca" placeholder="0,00" />
            </div>
            <div className="col-2">
              <div className="label-rendimento">
                <p>Tipos de indexação</p>
                <GrCircleInformation />
              </div>
              <div className="option-box-2">
                <input type="checkbox" name="pre" />
                <input type="checkbox" name="pos" />
                <input type="checkbox" name="fixado" />
              </div>
              <label for="aporte-mensal">Aporte Mensal</label>
              <input type="number" name="aporte-mensal" placeholder="0,00" />
              <label for="rentabilidade">Rentabilidade</label>
              <input type="number" name="rentabilidade" placeholder="0,00" />
              <label for="cdi">CDI (ao ano)</label>
              <input type="number" name="cdi" placeholder="0,00" />
            </div>
          </div>
          <div className="btns">
            <button className="clean">Limpar campos</button>
            <button className="sim">Simular</button>
          </div>
        </div>

        <div className="Resultados">
          <h1>Resultados da Simulação</h1>
        </div>

      </div>


    </div>
  );
}

export default App;
