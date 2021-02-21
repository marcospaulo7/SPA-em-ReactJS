import React from 'react'
import './Contato.css'
import foto from '../img/contatos.png'
import Head from './Head'
const Contato = () => {
    return (
        <section className={"contato + animeLeft"}>
                        <Head title="Contato" description="Entre em contato"/>

            <img src={foto} alt="que foto aleatoria" />
            <div>
                <h1>Entre em Contato!</h1>
                <ul className="dados">
                    <li>marcos.sbfj01d@gmail.com</li>
                    <li>1196743-****</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
