import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import BarraDePesquisa from './componentes/barraDePesquisa';
import Filtro from './componentes/Filtro';
import Card from './componentes/Card'
import Ordenacao from './componentes/Ordenacao';



function App() {
    // eslint-disable-next-line no-unused-vars
    const [ dados, setDados ] = useState([]);
    useEffect(() => {
      fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
        .then(resposta => resposta.json())
        .then(dados => setDados(dados))
    }, [])
  
    

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
       <ul className='lista-cards'>
{dados ? dados.map((item, index) => (

          <li key={index}>
            <Card 

              id={item.id}

               imagemUrl={item.imagem_capa}

                titulo={item.titulo}

                 resumo={item.resumo}

                  linhasDeCodigo={item.linhas_de_codigo}

                 compartilhamentos={item.compartilhamentos}

               comentarios={item.comentarios}

             usuario={item.usuario}
            
            /> 
          </li> 

 )): null}
       </ul>

      </div>
    </div>
  )
}
export default App;