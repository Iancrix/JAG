import React, { Component } from 'react'
import classes from "../styles/CustomBundle.css"

class BundleFinance extends Component {

    state = {

    }
    
    render() {
        return (
            <div className={classes.bundleTotal}>
                        <div className={classes.factura}>
                            <div className={classes.textT}>
                                <h5 className={classes.textS}>Clothing</h5>
                                <h6 className={classes.textPrice2}>$ 1000</h6>
                            </div>
                            <div className={classes.line3}></div>

                            <div className={classes.textT}>
                                <h5 className={classes.textS}>Custom</h5>
                                <h6 className={classes.textPrice2}>$ 500</h6>
                            </div>
                            <div className={classes.line3}></div>

                            <div className={classes.textT}>
                                <h5 className={classes.textS}>Fees</h5>
                                <h6 className={classes.textPrice2}>$ 200</h6>
                            </div>
                            <div className={classes.line3}></div>
                        </div>
                        


                        <div className={classes.facturaTotal}>
                            <div className={classes.line2}></div>

                            <div className={classes.textT}>
                                <h5 className={classes.textTotal}>Total</h5>
                                <h6 className={classes.textPrice}>$ 1700</h6>
                            </div>
                        </div>
                        
                    </div>
        )
    }
}

export default BundleFinance;
