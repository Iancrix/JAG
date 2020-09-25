import React, { Component } from 'react'
import classes from './css/Customizer.css'

class Financier extends Component {

    state = {
        
    }

    getTotal = () => {
        var preciototal = 0;

        if(this.props.selectedShirt !== null){
            preciototal += this.props.selectedShirt.precio;
        }
        if(this.props.selectedHat !== null){
            preciototal += this.props.selectedHat.precio;
        }
        if(this.props.selectedScarf !== null){
            preciototal += this.props.selectedScarf.precio;
        }
        if(this.props.selectedShoes !== null){
            preciototal += this.props.selectedShoes.precio;
        }
        if(this.props.selectedBelt !== null){
            preciototal += this.props.selectedBelt.precio;
        }
        if(this.props.selectedGlasses !== null){
            preciototal += this.props.selectedGlasses.precio;
        }
        if(this.props.selectedPant !== null){
            preciototal += this.props.selectedPant.precio;
        }

        return preciototal;
    }

    getStyle = () => {
        const style = {fontSize : '0.1vw'}
        return style;
    }
    render() {

        return (
            <div className={classes.financierC}>
                <div className={classes.fontChanger}>
                    <div className={classes.financierTitle}>
                        <h2>Financier </h2>
                    </div>

                    <div className={classes.financierSell}>
                        <div className={classes.clothName}>
                            <h4>{this.props.selectedHat !== null ? this.props.selectedHat.nombre : "---"}</h4>
                        </div>
                        <div className={classes.clothPrice}>
                            <h5>{this.props.selectedHat !== null ? "$" + this.props.selectedHat.precio : "$0"}</h5>
                        </div>
                    </div>

                    <div className={classes.financierSell}>
                        <div className={classes.clothName}>
                            <h4>{this.props.selectedGlasses !== null ? this.props.selectedGlasses.nombre : "---"}</h4>
                        </div>
                        <div className={classes.clothPrice}>
                            <h5>{this.props.selectedGlasses !== null ? "$" + this.props.selectedGlasses.precio : "$0"}</h5>
                        </div>
                    </div>

                    <div className={classes.financierSell}>
                        <div className={classes.clothName}>
                            <h4>{this.props.selectedScarf !== null ? this.props.selectedScarf.nombre : "---"}</h4>
                        </div>
                        <div className={classes.clothPrice}>
                            <h5>{this.props.selectedScarf !== null ? "$" + this.props.selectedScarf.precio : "$0"}</h5>
                        </div>
                    </div>

                    <div className={classes.financierSell}>
                        <div className={classes.clothName}>
                        <h4>{this.props.selectedShirt !== null ? this.props.selectedShirt.nombre : "---"}</h4>
                        </div>
                        <div className={classes.clothPrice}>
                            <h5>{this.props.selectedShirt !== null ? "$" + this.props.selectedShirt.precio : "$0"}</h5>
                        </div>
                    </div>

                    <div className={classes.financierSell}>
                        <div className={classes.clothName}>
                            <h4>{this.props.selectedBelt !== null ? this.props.selectedBelt.nombre : "---"}</h4>
                        </div>
                        <div className={classes.clothPrice}>
                            <h5>{this.props.selectedBelt !== null ? "$" + this.props.selectedBelt.precio : "$0"}</h5>
                        </div>
                    </div>

                    <div className={classes.financierSell}>
                        <div className={classes.clothName}>
                            <h4>{this.props.selectedPant !== null ? this.props.selectedPant.nombre : "---"}</h4>
                        </div>
                        <div className={classes.clothPrice}>
                            <h5>{this.props.selectedPant !== null ? "$" + this.props.selectedPant.precio : "$0"}</h5>
                        </div>
                    </div>
                    
                    <div className={classes.financierSell}>
                        <div className={classes.clothName}>
                            <h4>{this.props.selectedShoes !== null ? this.props.selectedShoes.nombre : "---"}</h4>
                        </div>
                        <div className={classes.clothPrice}>
                            <h5>{this.props.selectedShoes !== null ? "$" + this.props.selectedShoes.precio : "$0"}</h5>
                        </div>
                    </div>
                    <div className={classes.financierTotal}>
                        <div className={classes.clothTotalPrice}>
                            <h3>${this.getTotal()}</h3>
                        </div>
                        <div className={classes.clothTotal}>
                            <h3>Total</h3>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default Financier;
