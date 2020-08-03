import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/43251314?s=460&u=128036808cc94fbc8336199d58f2c0fe3f9584a9&v=4" alt="Ayrton Cossuol"/>

                <div>
                    <strong>Ayrton Cossuol</strong>
                    <span>Gagueira</span>
                </div>
            </header>

            <p>
                Gaguejando mais que tudo

                <br/> <br/>

                Venha gagueijar voce tambem
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>

                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem