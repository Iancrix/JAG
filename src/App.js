import React, { Component } from "react";
import classes from "./App.css";
import classes2 from './styles/Shop.css';
import NavBar from "./components/NavBar";
import CustomBundle from "./components/CustomBundle";
import Footer from "./components/Footer";
import Login from "./Login";
import Shop from './components/Shop';
import Carrito from './components/Carrito'
import Contact from './components/Contact'
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Customizer from './components/CustomPacket/Customizer'

class App extends Component {
  state = {
    navitems: [
      {
        name: "Home",
        description: "Whatever it takes",
        url: "",
        isEven: true,
        isCenter: false
      },
      {
        name: "Shop",
        description: "Whatever it takes",
        url: "Shop",
        isEven: false,
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
        name: "Custom",
        description: "Whatever it takes",
        url: "Custom",
        isEven: false,
        isCenter: false
      },
      {
        name: "Contact",
        description: "Whatever it takes",
        url: "Contact",
        isEven: true,
        isCenter: false
      }
    ],
    carrito: [],
    index: 0,
  };

  addToCarrito = (producto) => {
    producto = { ...producto, id: this.state.index }
    this.setState({
      carrito: [...this.state.carrito, producto],
      index: this.state.index + 1
    })

    console.log('se añadio al carrito')
  }

  deleteCarrito = (producto) => {
    this.setState({
      carrito: this.state.carrito.filter((prenda) => {
        if (producto.id !== prenda.id) {
          return prenda;
        }
      })
    })

    console.log('se elimino del carrito')
  }

  resetCarrito = () => {
    this.setState({
      carrito: []
    })

    console.log('se reseteo el carrito')
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={props => (
            <React.Fragment>
              
              <NavBar navitems={this.state.navitems} />
              <div className={classes2.topBar}></div>
              <Login />
              <div className={classes.sep}></div>
              <div className={classes.sep2}>
                <div className={classes.holder1}> <div className={classes.imgholder}></div></div>
                <div className={classes.holder2}><div className={classes.imgholder2}></div></div>
                <div className={classes.holdertxt}>
                  <div className={classes.titleholder}><h3>¡ Unete a la familia JAG !</h3></div>
                  <div className={classes.lineholder}></div>
                  <div className={classes.conholder}>
                    <div className={classes.pholder}>
                      <p>Que la calle es donde esta la vida y que no hay nada mas real que la musica. Creemos en la rebeldia pacifica y desafiamos la norma a punta de inspiracion: nos movemos desde lo positivo y abrazamos la diversidad. El amor, el color y el estilo libres.</p>
                    </div>
                  </div>
                </div>

              </div>
              <Footer />
            </React.Fragment>
          )} />

          <Route path='/Shop' render={props => (
            <React.Fragment>
              <Shop addToCarrito={this.addToCarrito} />
            </React.Fragment>
          )} />

          <Route path='/Carrito' render={props => (
            <React.Fragment>
              <Carrito carrito={this.state.carrito} deleteCarrito={this.deleteCarrito} resetCarrito={this.resetCarrito} />
            </React.Fragment>
          )} />

          <Route path='/Custom' render={props => (
            <React.Fragment>
              <Customizer />
            </React.Fragment>
          )} />

          <Route path='/Contact' render={props => (
            <React.Fragment>
              <Contact />
              <Footer /> 
            </React.Fragment>
          )} />


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
