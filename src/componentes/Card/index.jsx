/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './style.css';
import Chat from './assets/chat.svg';
import Capa from './assets/capa.png';
import Code from './assets/code.svg';
import Share from './assets/share.svg';
import Icone from './assets/icone.png'

// eslint-disable-next-line react/prop-types
export default function Card({ id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario }) {
    return(
        <article className="card">
            <div className="card__imagem">
                <img src={imagemUrl} alt="post" />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                        <h3>{titulo}</h3>

                        <p>{resumo}</p>
                </div>
            

                <div className='conteudo__rodape'>
                        <ul>
                            <li>
                                <img src={Code} alt="compartilhamentos" />
                                {linhasDeCodigo}
                            </li>
                            <li>
                                <img src={Share} alt="compartilhar" />
                                {compartilhamentos}
                            </li>
                            <li>
                                <img src={Chat} alt="conversa" />
                                {comentarios}
                            </li>
                        </ul>
                        <div className='rodape__usuario'>
                            <img src={usuario.imagem} alt="Imagem do usuario" />
                            {usuario.nome}
                        </div>
                </div>
            </div>
        </article>
    );
}