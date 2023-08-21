import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Elo from "./components/Elo";
import { v4 as uuidv4 } from 'uuid'; // "as" --> alias

function App() {

  const [elos, setElos] = useState([
    {
      id: uuidv4(),
      nome: 'Ferro',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Bronze',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Prata',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Ouro',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Platina',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Esmeralda',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Diamante',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Mestre',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Grão-Mestre',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Desafiante',
      cor: '#FF8A29'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      lane: 'Meio',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      lane: 'Meio',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      lane: 'Meio',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      lane: 'Top',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Atirador',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      lane: 'Bot Lane - Atirador',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      lane: 'Meio',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      lane: 'Jungler',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      lane: 'Jungler',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      lane: 'Top',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      lane: 'Jungler',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      lane: 'Bot Lane - Suporte',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Atirador',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[5].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[5].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      lane: 'Top',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[5].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorElo(cor, id) {
    setElos(elos.map(elo => {
      if(elo.id === id) {
        elo.cor = cor;
      }
      return elo;
    }));
  }

  function cadastrarElo(novoElo) {
    setElos([ ...elos, { ...novoElo, id: uuidv4() } ])
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarElo={cadastrarElo}
        elos={elos.map(elo => elo.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="elos">
        <h1 id="titulo">Minha organização</h1>
        {elos.map((elo, indice) => 
          <Elo 
            mudarCor={mudarCorElo}
            key={indice} 
            elo={elo} 
            colaboradores={colaboradores.filter(colaborador => colaborador.elo === elo.nome)} 
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
