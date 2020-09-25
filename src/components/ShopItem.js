import React, { Component } from 'react'
import classes from '../styles/ShopItem.css';

class ShopItem extends Component {

    getStyle = () => {

        const style = {
            backgroundImage: `url(${this.props.prenda.imagenurl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            borderBottom: '0px inset #FCE205',
        }
        return style;
    }

    addProduct = () => {
        this.props.addToCarrito(this.props.prenda);
    }

    render() {
        return (
            <div className={classes.itemList}>
                <div className={classes.photoGarment} style={this.getStyle()}>

                </div>
                <div className={classes.nameItem}>
                    {this.props.prenda.nombre}
                </div>
                <div className={classes.holderItem}>
                    <div className={classes.priceItem}>
                        ${" " + this.props.prenda.precio}
                    </div>
                    <div className={classes.buttonItem}>
                        <div className={classes.plusSymbol}>
                            <img className={classes.plusImg}
                                src="https://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png"
                                onClick={this.addProduct}>
                                </img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopItem;


