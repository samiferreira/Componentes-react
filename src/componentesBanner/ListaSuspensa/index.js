import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
               {props.itens.map(item=> {
                return <option key={item}>{item}</option>
               })}
            </select>
        </div>
//iteração em cima de uma lista renderizando na tela, para cada item crie uma opçao//
    )

}

export default ListaSuspensa