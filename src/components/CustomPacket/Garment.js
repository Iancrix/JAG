import React, { Component } from 'react'
import classes from "./css/Customizer.css"

import Draggable from '../../Dnd/Draggable';


class Garment extends Component {

    getStyle = () => {

        const style = {
            backgroundImage: `url(${this.props.imagenurl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            borderBottom: '0px inset #FCE205',
        }
        return style;
    }

    render() {
        return (
            <Draggable id={this.props.id} category={this.props.categoria}><div className={classes.clothItem} style={this.getStyle()}></div> </Draggable>
            
        )
    }
}

export default Garment;
