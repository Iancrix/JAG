import React, { Component } from 'react'
import ShopList from './ShopList';
import axios from 'axios';
import NavBar from './NavBar'
import classes from '../styles/Shop.css';
import Footer from './Footer'
class Shop extends Component {

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
              name: "Carrito",
              description: "Whatever it takes",
              url: "Carrito",
              isEven: true,
              isCenter: false
            }
          ]
    }

    componentDidMount(){
        axios.get('./data.json')
        .then(response => {
            const ropa = response.data;

            const prendasDisponibles = ropa.filter((prenda) => {
                if(prenda.id > 7){
                    return prenda;
                }
            })

            this.setState({productos: prendasDisponibles});
            console.log(prendasDisponibles);
        })
    }

    

    render() {
        return (
            <div>
                <NavBar navitems={this.state.navitems}/>
                <div className={classes.topBar}>

                </div>
                <ShopList prendas={this.state.productos}
                addToCarrito={this.props.addToCarrito}/>
                <Footer />
            </div>
        )
    }
}


export default Shop;
