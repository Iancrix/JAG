import React, { Component } from 'react'
import classes from '../styles/NavBar.css'
import { Link } from 'react-router-dom';

class NavItem extends Component {

    getStyle = () => {
        var style = {};
        
        style= this.props.isEven ? {marginTop: '1.5vw'} : {marginTop: '3vw'};

        var Background = 'https://www.shareicon.net/data/512x512/2016/06/30/788741_commerce_512x512.png';
        if(this.props.isCenter){
            style = {
                marginTop: '2.5vw',
                /*backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                borderBottom: '0px inset #FCE205',*/
                height: '6vw',
                width: '12vw', /*6vw*/
                zIndex: '5',
                backgroundColor: 'black', /*null*/
                visibility: 'hidden',
                border: '1px solid blue'
            }
        }

        
        return style;
    }

    onClick = () => {
        if(this.props.name === "Buy" && this.props.description === "Carrito"){
           this.props.resetCarrito(); 
        }
    }

    render() {
        return (
            <Link to={"/"+this.props.url} onClick={this.onClick}>
                <div className={classes.navItem} style={this.getStyle()}>
                    {this.props.name}    
                </div>
            </Link>
        )
    }
}

export default NavItem;
