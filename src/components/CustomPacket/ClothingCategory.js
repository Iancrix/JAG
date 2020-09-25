import React, { Component } from 'react'
import classes from "./css/Customizer.css"

import Garment from './Garment'

class ClothingCategory extends Component {

    state = {
        isHidden: true
    }

    onClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    getStyle = () => {
        var style;

        if(this.state.isHidden){
            style = {display: "none"}
        }else{
            style = {display: "block"}
        }

        return style;
    }

    getStyleCat = () => {
        var style;

        if(this.state.isHidden){
            style = {borderBottomLeftRadius: "0.5vw", borderBottomRightRadius: "0.5vw"}
        }else{
            style = {borderBottomLeftRadius: "0", borderBottomRightRadius: "0"}
        }

        return style;
    }

    render() {

        return (
            <div>
                <div className={classes.clothCategory} style={this.getStyleCat()}>
                <h3 className={classes.catTitle}>{this.props.nombre}</h3>
                    <div className={classes.minimizer} onClick={this.onClick}></div>
                </div>
                <div className={classes.clothHolder} style={this.getStyle()}>
                    {this.props.productos.map((garment) => {
                    return <Garment id={garment.id}
                                    nombre={garment.nombre}
                                    categoria={garment.categoria}
                                    precio={garment.precio}
                                    imagenurl={garment.imagenurl}/>
                    })}
                </div>
            </div>
        )
    }
}

export default ClothingCategory;
