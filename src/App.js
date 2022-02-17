import { useState, useEffect } from "react";
import { GrCircleInformation } from "react-icons/gr";

function App() {

  //Pagina carrega e já busca no servidor os indicadores
  useEffect(() => {
    const headers = { 'Content-Type': 'application/json' }
    fetch(`http://localhost:3000/indicadores`, { headers })
      .then(response => response.json())
      .then(data => {
        setCdi(data[0].valor)
        setIpca(data[1].valor)
      });
  }, [])

  //Função que já busca os valores na API e define no resultado
  function getData() {
    const headers = { 'Content-Type': 'application/json' }
    fetch(`http://localhost:3000/simulacoes/?tipoIndexacao=${indexa}&tipoRendimento=${Rendimento}`, { headers })
      .then(response => response.json())
      .then(data => {
        setValorFB(data[0].valorFinalBruto);
        setValorFL(data[0].valorFinalLiquido);
        setValorP(data[0].valorPagoIR);
        setValorT(data[0].valorTotalInvestido);
        setAli(data[0].aliquotaIR);
        setGL(data[0].ganhoLiquido);

        setIsClicked(true);
      });
  }

  //Variavel para verificar inputs & button
  const [isFilled, setIsFilled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  //Variaveis do form
  const [Rendimento, SetRendimento] = useState('bruto');
  const [Aporte, setAporte] = useState('');
  const [Prazo, setPrazo] = useState('');
  const [ipca, setIpca] = useState('');
  const [AporteM, setAporteM] = useState('');
  const [Rentabilidade, setRentabilidade] = useState('');
  const [cdi, setCdi] = useState('');
  const [indexa, setIndexa] = useState('pos');

  //Variaveis de resultados
  const [valorFB, setValorFB] = useState(0);
  const [ValorP, setValorP] = useState(0);
  const [ValorT, setValorT] = useState(0);
  const [Ali, setAli] = useState(0);
  const [ValorFL, setValorFL] = useState(0);
  const [GL, setGL] = useState(0);

  //UseEffect para verificar os inputs
  useEffect(() => {
    if ((Aporte !== '') && (AporteM !== '') && (Prazo !== '') && (Rentabilidade !== '')) {
      setIsFilled(true);
    }
    else {
      setIsFilled(false);
    }
  }, [Aporte, AporteM, Rentabilidade, Prazo])

  //Função para basicamente limpar os inputs
  function cleanInput() {
    setIndexa('pos');
    SetRendimento('bruto');
    setValorFB(0);
    setValorFL(0);
    setValorP(0);
    setValorT(0);
    setAli(0);
    setGL(0);
    setPrazo('');
    setAporte('');
    setAporteM('');
    setRentabilidade('');
    setIsFilled(false);
    setIsClicked(false);
  }

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
                <input type="radio" name="question-1" value="bruto" id="bruto" defaultChecked onChange={(e) => { SetRendimento(e.target.value) }} />
                <label htmlFor="bruto" id="bru">Bruto</label>
                <input type="radio" name="question-1" value="liquido" id="liquido" onChange={(e) => { SetRendimento(e.target.value) }} />
                <label htmlFor="liquido" id="liq">Líquido</label>
              </div>
              <label htmlFor="aporte-inicial">Aporte Inicial</label>
              <input type="number" name="aporte-inicial" placeholder="R$ 0,00" onChange={(e) => { setAporte(e.target.value) }} value={Aporte} />
              <label htmlFor="prazo">Prazo (em meses)</label>
              <input type="number" name="prazo" placeholder="0" onChange={(e) => { setPrazo(e.target.value) }} value={Prazo} />
              <label htmlFor="ipca">IPCA (ao ano)</label>
              <input type="number" name="ipca" placeholder="0,00%" readOnly value={ipca} />
            </div>
            <div className="col-2">
              <div className="label-rendimento">
                <p>Tipos de indexação</p>
                <GrCircleInformation />
              </div>
              <div className="option-box-2">
                <input type="radio" name="question-2" value="pre" id="pre" onChange={(e) => { setIndexa(e.target.value) }} />
                <label htmlFor="pre" id="pr">Pré</label>
                <input type="radio" name="question-2" value="pos" id="pos" defaultChecked onChange={(e) => { setIndexa(e.target.value) }} />
                <label htmlFor="pos" id="po">Pós</label>
                <input type="radio" name="question-2" value="ipca" id="fixado" onChange={(e) => { setIndexa(e.target.value) }} />
                <label htmlFor="fixado" id="fix">Fixado</label>
              </div>
              <label htmlFor="aporte-mensal">Aporte Mensal</label>
              <input type="number" name="aporte-mensal" placeholder="R$ 0,00" onChange={(e) => { setAporteM(e.target.value) }} value={AporteM} />
              <label htmlFor="rentabilidade">Rentabilidade</label>
              <input type="number" name="rentabilidade" placeholder="0%" onChange={(e) => { setRentabilidade(e.target.value) }} value={Rentabilidade} />
              <label htmlFor="cdi">CDI (ao ano)</label>
              <input type="number" name="cdi" placeholder="0,00%" readOnly value={cdi} />
            </div>
          </div>
          <div className="btns">
            <button className="clean" onClick={cleanInput}>Limpar campos</button>
            {(isFilled) ? <button className="sim" onClick={getData}>Simular</button> : <button className="simClosed" onClick={() => { alert('Preencha todos os dados!'); }}>Simular</button>}
          </div>
        </div>

        {(isClicked) ? <div className="Resultados">
          <h1>Resultados da Simulação</h1>
          <div className="cards">
            <div className="card">
              <h2>Valor Final Bruto</h2>
              <p>R$ {valorFB}</p>
            </div>
            <div className="card"><h2>Alíquota do IR</h2>
              <p>{Ali}%</p></div>
            <div className="card"><h2>Valor Pago em IR</h2>
              <p>R$ {ValorP}</p></div>
            <div className="card"><h2>Valor Final Líquido</h2>
              <p>R$ {ValorFL}</p></div>
            <div className="card"><h2>Valor Total Investido</h2>
              <p>R$ {ValorT}</p></div>
            <div className="card"><h2>Ganho Líquido</h2>
              <p>R$ {GL}</p></div>
          </div>
        </div> : <span></span>
        }

      </div>
    </div>
  );
}

export default App;
