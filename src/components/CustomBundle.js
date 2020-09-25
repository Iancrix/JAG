import React, { Component } from 'react'
import classes from "../styles/CustomBundle.css"

import BundlePicker from "./BundlePicker"
import BundleCustom from "./BundleCustom"
import BundleFinance from "./BundleFinance"

//const images = require.context('../images/', true);

var products = [{name: 'Camisa', imagesPath: ['../images/camisa-verde.png', '../images/camisa-roja.jpg', '../images/camisa-amarilla.jpg']},
{name: 'Chaqueta', imagesPath: ['../images/chaqueta-azul.jpg', '../images/chaqueta-verde.jpg', '../images/chaqueta-purpura.jpg']},
{name: 'Gorra', imagesPath: ['../images/gorra-amarilla.jpg', '../images/gorra-azul.jpg', '../images/gorra-roja.jpg']}]

class CustomBundle extends Component {

    state = {
        currentProduct: {},
        currentColor: 0
    }

    componentDidMount(){
        this.setState({
            currentProduct: products[0]
        })
    }

    toggleProduct = (currentIndex) => {
        this.setState({
            currentProduct: products[currentIndex]
        })
    }

    toggleColor = (currentColor) => {
        this.setState({
            currentColor: currentColor
        })
    }
    
    render() {
        var numberOfColors = 0;
        if(!this.state.currentProduct.imagesPath){
            return <span>Loading...</span>;
        }else{
            numberOfColors = this.state.currentProduct.imagesPath.length;
        }
        return (
            <div className={classes.bundleContainer}>
                <div className={classes.customMsg}>
                    <h3 className={classes.msg}>Personaliza tu estilo!</h3>
                </div>
                <div className={classes.bundleList}>
                    <BundlePicker
                        currentProduct = {this.state.currentProduct}
                        currentColor = {this.state.currentColor}
                        toggleProduct = {this.toggleProduct}
                        numberOfProducts = {products.length}/>
                    <BundleCustom 
                        colors = {this.state.currentProduct.imagesPath}
                        numberOfColors = {numberOfColors}
                        currentColor = {this.state.currentColor}
                        toggleColor = {this.toggleColor}/>
                    <BundleFinance />
                </div> 
            </div>
        )
    }
}

export default CustomBundle;
