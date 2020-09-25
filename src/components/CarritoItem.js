import React, { Component } from 'react'
import classes from '../styles/ShopItem.css';
class CarritoItem extends Component {

    getStyle = () => {

        const style = {
            backgroundImage: `url(${this.props.item.imagenurl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            borderBottom: '0px inset #FCE205',
        }
        return style;
    }

    deleteProduct = () => {
        this.props.deleteCarrito(this.props.item);
    }

    render() {
        return (
            <div className={classes.itemList}>
                <div className={classes.photoGarment} style={this.getStyle()}>

                </div>
                <div className={classes.nameItem}>
                    {this.props.item.nombre}
                </div>
                <div className={classes.holderItem}>
                    <div className={classes.priceItem}>
                        ${" " + this.props.item.precio}
                    </div>
                    <div className={classes.buttonItem2}>
                        <div className={classes.plusSymbol}>
                            <img className={classes.plusImg}
                                src="https://image.flaticon.com/icons/png/512/25/25232.png"
                                onClick={this.deleteProduct}>
                                </img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarritoItem;
