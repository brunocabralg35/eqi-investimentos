import { useEffect, useState } from "react";
import { GrCircleInformation } from "react-icons/gr";

function App() {

  useEffect(()=>{
    // GET request using fetch with set headers
    const headers = { 'Content-Type': 'application/json' }
    fetch('http://localhost:3000/', { headers })
        .then(response => response.json())
        .then(data => console.log(data));
  },[])
    

  const [Rendimento, SetRendimento] = useState('bruto');
  const [Aporte, setAporte] = useState();
  const [Prazo, setPrazo] = useState();
  const [ipca, setIpca] = useState();
  const [AporteM, setAporteM] = useState();
  const [Rentabilidade, setRentabilidade] = useState();
  const [cdi, setCdi] = useState();
  const [indexa, setIndexa] = useState('pos');

  const [valorFB, setValorFB] = useState(0);
  const [ValorP, setValorP] = useState(0);
  const [ValorT, setValorT] = useState(0);
  const [Ali, setAli] = useState(0);
  const [ValorFL, setValorFL] = useState(0);
  const [GL, setGL] = useState(0);

  function cleanInput(){
    console.log('teste');
  }
  
  function calc(){
    console.log(Rendimento);
    console.log(Aporte);
    console.log(Prazo);
    console.log(ipca);
    console.log(AporteM);
    console.log(Rentabilidade);
    console.log(cdi);
    console.log(indexa);
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
                <input type="radio" name="question-1" value="bruto" id="bruto" defaultChecked onChange={(e)=>{SetRendimento(e.target.value)}} />
                <label for="bruto" id="bru">Bruto</label>
                <input type="radio" name="question-1" value="liquido" id="liquido" onChange={(e)=>{SetRendimento(e.target.value)}}/>
                <label for="liquido" id="liq">Líquido</label>
              </div>
              <label for="aporte-inicial">Aporte Inicial</label>
              <input type="number" name="aporte-inicial" placeholder="R$ 0,00" onChange={(e)=>{setAporte(e.target.value)}}/>
              <label for="prazo">Prazo (em meses)</label>
              <input type="number" name="prazo" placeholder="0" onChange={(e)=>{setPrazo(e.target.value)}}/>
              <label for="ipca">IPCA (ao ano)</label>
              <input type="number" name="ipca" placeholder="0,00%" onChange={(e)=>{setIpca(e.target.value)}}/>
            </div>
            <div className="col-2">
              <div className="label-rendimento">
                <p>Tipos de indexação</p>
                <GrCircleInformation />
              </div>
              <div className="option-box-2">
                <input type="radio" name="question-2" value="pre" id="pre" onChange={(e)=>{setIndexa(e.target.value)}}/>
                <label for="pre" id="pr">Pré</label>
                <input type="radio" name="question-2" value="pos" id="pos" defaultChecked onChange={(e)=>{setIndexa(e.target.value)}}/>
                <label for="pos" id="po">Pós</label>
                <input type="radio" name="question-2" value="fixado" id="fixado" onChange={(e)=>{setIndexa(e.target.value)}}/>
                <label for="fixado" id="fix">Fixado</label>
              </div>
              <label for="aporte-mensal">Aporte Mensal</label>
              <input type="number" name="aporte-mensal" placeholder="R$ 0,00" onChange={(e)=>{setAporteM(e.target.value)}}/>
              <label for="rentabilidade">Rentabilidade</label>
              <input type="number" name="rentabilidade" placeholder="0%" onChange={(e)=>{setRentabilidade(e.target.value)}}/>
              <label for="cdi">CDI (ao ano)</label>
              <input type="number" name="cdi" placeholder="0,00%" onChange={(e)=>{setCdi(e.target.value)}}/>
            </div>
          </div>
          <div className="btns">
            <button className="clean" onClick={cleanInput}>Limpar campos</button>
            <button className="sim" onClick={calc}>Simular</button>
          </div>
        </div>

        <div className="Resultados">
          <h1>Resultados da Simulação</h1>
          <div className="cards">
            <div className="card">
              <h2>Valor Final Bruto</h2>
              <p>R$ {valorFB}</p>
            </div>
            <div className="card"><h2>Alíquota do IR</h2>
              <p>{Ali} %</p></div>
            <div className="card"><h2>Valor Pago em IR</h2>
              <p>R$ {ValorP}</p></div>
            <div className="card"><h2>Valor Final Líquido</h2>
              <p>R$ {ValorFL}</p></div>
            <div className="card"><h2>Valor Total Investido</h2>
              <p>R$ {ValorT}</p></div>
            <div className="card"><h2>Ganho Líquido</h2>
              <p>R$ {GL}</p></div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
