import { useState } from 'react'
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Elo from './components/Elo';

function App() {

  const elos = [
    {
      nome: 'Ferro',
      corPrimaria: '#404040',
      corSecundaria: '#8B8B8B'
    },
    {
      nome: 'Bronze',
      corPrimaria: '#986A1A',
      corSecundaria: '#D4B684'
    },
    {
      nome: 'Prata',
      corPrimaria: '#6B6B6B',
      corSecundaria: '#CBCBCB'
    },
    {
      nome: 'Ouro',
      corPrimaria: '#EFA322',
      corSecundaria: '#FFD998'
    },
    {
      nome: 'Platina',
      corPrimaria: '#1D8D8D',
      corSecundaria: '#86D4D4'
    },
    {
      nome: 'Esmeralda',
      corPrimaria: '#21AD76',
      corSecundaria: '#9DF1D0'
    },
    {
      nome: 'Diamante',
      corPrimaria: '#05728F',
      corSecundaria: '#93EADB'
    }, 
    {
      nome: 'Mestre',
      corPrimaria: '#6B1684',
      corSecundaria: '#D9A6E8'
    }, 
    {
      nome: 'Grão-Mestre',
      corPrimaria: '#A80E0E',
      corSecundaria: '#7D7D7D'
    }, 
    {
      nome: 'Desafiante',
      corPrimaria: '#088AA6',
      corSecundaria: '#FFF7BE'
    }
  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        elos={elos.map(elo => elo.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {elos.map(elo => <Elo 
        key={elo.nome} 
        nome={elo.nome} 
        corPrimaria={elo.corPrimaria} 
        corSecundaria={elo.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.elo === elo.nome)}
      />)}

    </div>
  );
}

export default App;
