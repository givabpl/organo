import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, elo, cadastrarElo }) => {

    const [nome, setNome] = useState('')
    const [lane, setLane] = useState('')
    const [imagem, setImagem] = useState('')
    const [elo, setElo] = useState('')
    const [nomeElo, setNomeElo] = useState('')
    const [corElo, setCorElo] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, lane, imagem, elo )
        aoCadastrar({
            nome,
            lane,
            imagem,
            elo
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Lane' 
                    placeholder='Digite sua lane '
                    valor={lane}
                    aoAlterado={valor => setLane(valor)}/>
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Elos'
                    items={elos} 
                    valor={elo}
                    aoAlterado={valor => setElo(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form 
                className="formulario" 
                onSubmit={(evento) => {
                    evento.preventDefault()
                    cadastrarElo({ nome: nomeElo, cor: corElo })
                }}
            >
                <h2>Preencha os dados para criar um novo elo.</h2>
                <CampoTexto
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do elo'
                    valor={nomeElo}
                    aoAlterado={valor => setNomeElo(valor)}/>
                <CampoTexto
                    obrigatorio
                    label='Cor' 
                    placeholder='Selecione a cor do elo'
                    valor={corElo}
                    aoAlterado={valor => setCorElo(valor)}/>
                <Botao texto='Criar um novo elo' />
            </form>
        </section>
    )
}
export default Formulario