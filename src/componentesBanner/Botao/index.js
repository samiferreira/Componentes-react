import './Botao.css'

const Botao = (props) => {

    return (
        <button className='botao'>
            {props.texto}
        </button>
    )

}
 //props.childeres passa qualquer valor dentro da tag//

export default Botao