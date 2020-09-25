import React, { Component } from 'react'
import classes from "../styles/CustomBundle.css"

class BundlePicker extends Component {

    state = {
        currentIndex: 0
    }

    toggleImageForwards = () => {
        var newIndex = this.state.currentIndex + 1;
        
        if(newIndex > this.props.numberOfProducts - 1){
            newIndex = 0;
        }

        this.setState({
            currentIndex: newIndex
        })

        this.props.toggleProduct(newIndex);
    }

    toggleImageBackwards = () => {
        var newIndex = this.state.currentIndex - 1;
        
        if(newIndex < 0){
            newIndex = this.props.numberOfProducts - 1;
        }

        this.setState({
            currentIndex: newIndex
        })

        this.props.toggleProduct(newIndex);
    }
    
    render() {
        var url = '';
        if(!this.props.currentProduct.imagesPath){
            return <span>Loading...</span>;
        }else{
            url = this.props.currentProduct.imagesPath[this.props.currentColor] + '';
        }
        return (
            <div className={classes.bundlePicker}>
                        <div className={classes.productTitle}>
                            <h4>
                                Camiseta 1
                            </h4>
                        </div>

                        <div className={classes.productPicker}>
                            <div className={classes.productSelectorLeft}>
                                <img className={classes.arrowImg}
                                src="https://i.ya-webdesign.com/images/orange-arrow-png-4.png"
                                onClick={this.toggleImageBackwards}>
                                </img>
                                
                            </div>
                            <div className={classes.product}>
                                <img className={classes.productImg}
                                src={process.env.PUBLIC_URL + url}
                                ></img>
                                <h5 className={classes.productName}>{this.props.currentProduct.name}</h5>
                            </div>
                            <div className={`${classes.productSelectorRight} ${classes.flip}`}>
                                <img className={classes.arrowImg}
                                src="https://i.ya-webdesign.com/images/orange-arrow-png-4.png"
                                onClick={this.toggleImageForwards}>
                                </img>
                            </div>
                        </div>

                        <div className={classes.buttonCustom}>

                        </div>
                    </div>  
        )
    }
}

export default BundlePicker;
