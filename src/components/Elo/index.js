import Colaborador from '../Colaborador'
import './elo.css'

const Elo = ({ elo, colaboradores }) => {
    return (

        colaboradores.length > 0 && <section className='elo' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: elo.corPrimaria }}>
            <h3 style={{ borderColor: elo.corSecundaria }}>{elo.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={elo.corSecundaria} />)}
            </div>
        </section>

    )
}

export default Elo