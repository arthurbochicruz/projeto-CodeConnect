import { useState } from 'react'
import './style.css'

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState(''); 
    console.log(termoPesquisa)
    return(
       
        <input 
        type="search" 
        placeholder="Digite oque você procura" 
        className='barra-pesquisa' 
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}/>
    )
}

