import React, { Component } from 'react'
import classes from '../styles/Carrito.css';
import CarritoItem from './CarritoItem'
import classes2 from '../styles/Shop.css';
import classes3 from '../styles/ShopList.css';
import NavBar from './NavBar'
import Footer from './Footer'
class Carrito extends Component {
    state={
        navitems: [
            {
              name: "Back",
              description: "Whatever it takes",
              url: "Shop",
              isEven: true,
              isCenter: false
            },

            {
              name: "",
              description: "Blank",
              url: "Blank",
              isEven: false,
              isCenter: true
            },
            {
              name: "Buy",
              description: "Carrito",
              url: "",
              isEven: true,
              isCenter: false
            }
          ]
    }
    render() {
        return (
            <div>
                <NavBar navitems={this.state.navitems} resetCarrito={this.props.resetCarrito}/>
                <div className={classes2.topBar}></div>
                <div  className={classes3.listPro}>
                {this.props.carrito.map((item) => {
                    return <CarritoItem item={item} deleteCarrito={this.props.deleteCarrito}/>
                })}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Carrito;
