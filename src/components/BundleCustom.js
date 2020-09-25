import React, { Component } from 'react'
import classes from "../styles/CustomBundle.css"

class BundleCustom extends Component {

    state = {
        currentColor: 0
    }

    onChange = (e) => {
        this.setState({
            currentColor: e.currentTarget.value
        })

        this.props.toggleColor(e.currentTarget.value);
    }
    
    render() {
        return (
            <div className={classes.bundleCustom}>
                        <div className={classes.leftPicker}>
                            <h5 className={classes.textTitle}>Color</h5>
                            <div className={classes.line}></div>

                            <div className={classes.radioList}>
                                {this.props.colors.map(
                                    (color,i) => <input className={classes.checkmark}
                                                        name="color" 
                                                        type="radio"
                                                        value={i}
                                                        onChange={this.onChange}
                                                        checked={this.state.currentColor == i}
                                                ></input>
                                    )}  
                            </div>

                            <h5 className={classes.textTitle}>Estampado</h5>
                            <div className={classes.line}></div>

                            <div className={classes.radioList}>
                                <input className={classes.checkmark} name="estampado" type="radio"></input>
                                <input className={classes.checkmark} name="estampado" type="radio"></input>
                                <input className={classes.checkmark} name="estampado" type="radio"></input>
                                <input className={classes.checkmark} name="estampado" type="radio"></input>
                            </div>
                        </div>
                        <div className={classes.fillWarn}>
                            <div className={classes.separatorLine}>

                            </div>
                        </div>
                        <div className={classes.rightPicker}>
                            <h5 className={classes.textTitle}>Transparencia</h5>
                            <div className={classes.line}></div>
                            <input type="range" name="transparency" min="0" max="100"></input>

                        </div>
                    </div>
        )
    }
}

export default BundleCustom;
