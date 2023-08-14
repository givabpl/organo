import Colaborador from '../Colaborador'
import './Elo.css'

const Elo = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        
        (props.colaboradores.length > 0) ? <section className="elo" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.lane} 
                    imagem={colaborador.imagem}/>
                )}
            </div>
        </section>
        : ''
    )
}
export default Elo