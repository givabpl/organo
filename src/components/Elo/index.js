import Colaborador from '../Colaborador'
import './Elo.css'

const Elo = ({ elo, colaboradores, aoDeletar, mudarCor }) => {
    return (

        colaboradores.length > 0 && <section className='elo' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: elo.corPrimaria }}>
            <h3 style={{ borderColor: elo.corSecundaria }}>{elo.nome}</h3>
            <input 
                onChange={evento => mudarCor(evento.target.value, elo.nome)} 
                value={elo.corSecundaria} 
                type='color' 
                className='input-cor' />
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={elo.corSecundaria} aoDeletar={aoDeletar} />)}
            </div>
        </section>

    )
}

export default Elo