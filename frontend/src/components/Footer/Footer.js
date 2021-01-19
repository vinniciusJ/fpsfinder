import React, { useRef } from 'react'
import { Mail, Send } from 'react-feather'

import './styles.css'

const Footer = () => {
    const emailAdress = useRef('')
    const emailMessage = useRef('')

    return (
        <footer className="fps-footer">
           <div className="fps-footer-div">
                <section className="footer-info">
                    <div className="fps-info-email">
                        <h1>FPS FINDER</h1>
                        <p><Mail width={24} strokeWidth={1}/>fpsfinder@gmail.com</p>
                    </div>
                    <div className="devs-info-email">
                        <h1>DESENVOLVEDORES</h1>
                        <p><Mail width={24} strokeWidth={1}/>equilibrio.perfeito@gmail.com</p>
                    </div>
                </section>
                <section className="footer-email">
                    <h1>Fale conosco</h1>
                    <form className="contact-us">
                        <input name="e-mail" id="e-mail" type="email" required="required"placeholder="Seu endereço de e-mail aqui" ref={emailAdress}/>
                        <textarea  cols="30" rows="10" ref={emailMessage} placeholder="Mensagem..."></textarea>

                        <button className="btn main"><span><Send width={24}/><strong>Enviar</strong></span></button>
                    </form>
                </section>
            </div>
        </footer>
    )
}

export default Footer