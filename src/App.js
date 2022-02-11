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
                <input type="radio" name="question-1" value="bruto" id="bruto" checked />
                <label for="bruto" id="bru">Bruto</label>
                <input type="radio" name="question-1" value="liquido" id="liquido" />
                <label for="liquido" id="liq">Líquido</label>
              </div>
              <label for="aporte-inicial">Aporte Inicial</label>
              <input type="number" name="aporte-inicial" placeholder="R$ 0,00" />
              <label for="prazo">Prazo (em meses)</label>
              <input type="number" name="prazo" placeholder="0" />
              <label for="ipca">IPCA (ao ano)</label>
              <input type="number" name="ipca" placeholder="0,00%" />
            </div>
            <div className="col-2">
              <div className="label-rendimento">
                <p>Tipos de indexação</p>
                <GrCircleInformation />
              </div>
              <div className="option-box-2">
                <input type="radio" name="question-2" value="pre" id="pre" />
                <label for="pre" id="pr">Pré</label>
                <input type="radio" name="question-2" value="pos" id="pos" checked />
                <label for="pos" id="po">Pós</label>
                <input type="radio" name="question-2" value="fixado" id="fixado" />
                <label for="fixado" id="fix">Fixado</label>
              </div>
              <label for="aporte-mensal">Aporte Mensal</label>
              <input type="number" name="aporte-mensal" placeholder="R$ 0,00" />
              <label for="rentabilidade">Rentabilidade</label>
              <input type="number" name="rentabilidade" placeholder="0%" />
              <label for="cdi">CDI (ao ano)</label>
              <input type="number" name="cdi" placeholder="0,00%" />
            </div>
          </div>
          <div className="btns">
            <button className="clean">Limpar campos</button>
            <button className="sim">Simular</button>
          </div>
        </div>

        <div className="Resultados">
          <h1>Resultados da Simulação</h1>
          <div className="cards">
            <div className="card">
              <h2>Valor Final Bruto</h2>
              <p>VALOR</p>
            </div>
            <div className="card"><h2>Alíquota do IR</h2>
              <p>VALOR</p></div>
            <div className="card"><h2>Valor Pago em IR</h2>
              <p>VALOR</p></div>
            <div className="card"><h2>Valor Final Líquido</h2>
              <p>VALOR</p></div>
            <div className="card"><h2>Valor Total Investido</h2>
              <p>VALOR</p></div>
            <div className="card"><h2>Ganho Líquido</h2>
              <p>VALOR</p></div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
