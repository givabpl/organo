import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Elo from "./components/Elo";

function App() {

  const [elos, setElos] = useState([
    {
      nome: 'Ferro',
      cor: '#57C278'
    },
    {
      nome: 'Bronze',
      cor: '#82CFFA'
    },
    {
      nome: 'Prata',
      cor: '#A6D157'
    },
    {
      nome: 'Ouro',
      cor: '#E06B69'
    },
    {
      nome: 'Platina',
      cor: '#DB6EBF'
    },
    {
      nome: 'Esmeralda',
      cor: '#FFBA05'
    },
    {
      nome: 'Diamante',
      cor: '#FF8A29'
    },
    {
      nome: 'Mestre',
      cor: '#FF8A29'
    },
    {
      nome: 'Grão-Mestre',
      cor: '#FF8A29'
    },
    {
      nome: 'Desafiante',
      cor: '#FF8A29'
    }
  ])

  const inicial = [
    {
      nome: 'JULIANA AMOASEI',
      lane: 'Meio',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      nome: 'DANIEL ARTINE',
      lane: 'Meio',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      nome: 'GUILHERME LIMA',
      lane: 'Meio',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[0].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      nome: 'DANIEL ARTINE',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      nome: 'GUILHERME LIMA',
      lane: 'Top',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Atirador',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[1].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      lane: 'Bot Lane - Atirador',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      nome: 'DANIEL ARTINE',
      lane: 'Meio',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      nome: 'GUILHERME LIMA',
      lane: 'Jungler',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[2].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      lane: 'Jungler',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      nome: 'DANIEL ARTINE',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      nome: 'GUILHERME LIMA',
      lane: 'Top',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      lane: 'Jungler',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[3].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      nome: 'DANIEL ARTINE',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      nome: 'GUILHERME LIMA',
      lane: 'Bot Lane - Suporte',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Atirador',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[4].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      elo: elos[5].nome
    },
    {
      nome: 'DANIEL ARTINE',
      lane: 'Top',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      elo: elos[5].nome
    },
    {
      nome: 'GUILHERME LIMA',
      lane: 'Top',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      elo: elos[5].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      lane: 'Bot Lane - Suporte',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      elo: elos[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {

  }

  function mudarCorElo(cor, nome) {
    setElos(elos.map(elo => {
      if(elo.nome === nome) {
        elo.cor = cor;
      }
      return elo;
    }));
  }

  return (
    <div>
      <Banner />
      <Formulario elos={elos.map(elo => elo.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
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
