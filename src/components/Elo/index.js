import Colaborador from '../Colaborador';
import './Elo.css';
import hexToRgba from 'hex-to-rgba';


const Elo = ({ elo, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section className='elo' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(elo.cor, '0.6') }}>
            <h3 style={{ borderColor: elo.cor }}>{elo.nome}</h3>
            <input 
                onChange={evento => mudarCor(evento.target.value, elo.id)} 
                value={elo.cor} 
                type='color' 
                className='input-cor' />
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador 
                    key={indice} 
                    colaborador={colaborador} 
                    corDeFundo={elo.cor} 
                    aoDeletar={aoDeletar} 
                />)}
            </div>
        </section>

    )
}

export default Elo
