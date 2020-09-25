import React, { Component } from 'react'
import ShopItem from './ShopItem';

import classes from '../styles/ShopList.css';

class ShopList extends Component {
    render() {
        return (
            <div className={classes.listPro}>
                {this.props.prendas.map((ropa) => {
                    return <ShopItem prenda={ropa} addToCarrito={this.props.addToCarrito}/>
                })}
            </div>
        )
    }
}

export default ShopList;
