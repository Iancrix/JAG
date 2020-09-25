import React, { Component } from 'react';
import NavBar from './NavBar'
import firebaseConf from '../firebaseConfig';
import classes from '../styles/Contact.css';
import $ from "jquery";
import Footer from './Footer'
class Contact extends Component {

    state = {
        productos: [],
        navitems: [
            {
                name: "Back",
                description: "Whatever it takes",
                url: "",
                isEven: true,
                isCenter: false
            },

            {
                name: "",
                description: "Blank",
                url: "#",
                isEven: false,
                isCenter: true
            },
            {
                name: "Shop",
                description: "Whatever it takes",
                url: "Shop",
                isEven: true,
                isCenter: false
            }
        ]
    }


    componentDidMount() {
        $('#btnSend').click(function () {

            var errores = '';

            // Validado Nombre ==============================
            if ($('#names').val() == '') {
                errores += '<p>Escriba un nombre</p>';
                $('#names').css("border-bottom-color", "#F14B4B")
            } else {
                $('#names').css("border-bottom-color", "#d1d1d1")
            }

            // Validado Correo ==============================
            if ($('#email').val() == '') {
                errores += '<p>Ingrese un correo</p>';
                $('#email').css("border-bottom-color", "#F14B4B")
            } else {
                $('#email').css("border-bottom-color", "#d1d1d1")
            }

            // Validado Mensaje ==============================
            if ($('#mensaje').val() == '') {
                errores += '<p>Escriba un mensaje</p>';
                $('#mensaje').css("border-bottom-color", "#F14B4B")
            } else {
                $('#mensaje').css("border-bottom-color", "#d1d1d1")
            }
        });
    }

    getStyle = () => {
        return {marginTop: '0vw'}
    }

    render() {
        return (
            <div className="maiContainer" style={this.getStyle()}>
                
                <NavBar navitems={this.state.navitems} />
                <div className={classes.filler1}></div>
                <div>
              
                <div className={classes.topBar}></div>
                </div>
                <section className={classes.formWrap}>
                    <section className={classes.cantactInfo}>
                        <section className={classes.infoTitle}>
                            <span className="fa fa-user-circle"></span>

                            <h2>INFORMACIÓN<br></br>DE CONTACTO</h2>
                        </section>
                        <section className={classes.infoItems}>
                            <p><span className="fa fa-envelope"></span> info.contactJAG@gmail.com</p>
                            <p><span className="fa fa-mobile"></span> +57(301) 555-5555</p>
                        </section>
                    </section>
                    <form action="" className={classes.formContact}>
                        <h2>Envia un mensaje</h2>
                        <div className={classes.userInfo}>
                            <label htmlFor="names">Nombres *</label>
                            <input type="text" id="names"></input>

                            <label htmlFor="phone">Telefono / Celular</label>
                            <input type="text" id="phone"></input>

                            <label htmlFor="email">Correo electronico *</label>
                            <input type="text" id="email"></input>

                            <label htmlFor="mensaje">Mensaje *</label>
                            <textarea id="mensaje"></textarea>

                            <input type="button" value="Enviar Mensaje" id="btnSend"></input>

                        </div>
                    </form>
                </section>
            </div>
        );
    }

}

export default Contact;