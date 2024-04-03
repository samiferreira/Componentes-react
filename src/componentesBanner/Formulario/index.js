import { useState } from 'react';
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';
import CampoTexto from '../campoTexto';
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Programação',
    'cyber',
    'devops'
  ]


  const [nome, setnome] = useState('')
  const [cargo, setcargo] = useState('')
  const [imagem, setimagem] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('form carregado')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto obrigatorio={true}
          label="nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setnome(valor)}
        />

        <CampoTexto
          label="cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setcargo(valor)}

        />

        <CampoTexto
          label="imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setimagem(valor)}

        />
        <ListaSuspensa obrigatorio={true} label='Times' itens={times} />
        <Botao texto="Criar card" />

      </form>
    </section>
  );
}

export default Formulario