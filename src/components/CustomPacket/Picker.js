import React, { Component } from 'react'
import classes from './css/Customizer.css'
import ClothingCategory from './ClothingCategory'


class Picker extends Component {

    state = {
        
    }

    componentDidMount(){
            
    }

    render() {
        return (
            <div className={classes.clothingC}>
                    <div className={classes.clothTitle}>
                        <h2>Clothing picker</h2>
                    </div>

                    
                    <div className={classes.outerScroll}>
                        <ClothingCategory nombre="Camiseta" productos={this.props.camisetas}/>
                        <ClothingCategory nombre="Sombrero" productos={this.props.sombreros}/>
                        <ClothingCategory nombre="Bufanda" productos={this.props.bufandas}/>
                        <ClothingCategory nombre="Gafas" productos={this.props.gafas}/>
                        <ClothingCategory nombre="Cinturon" productos={this.props.cinturones}/>
                        <ClothingCategory nombre="Pantalon" productos={this.props.pantalones}/>
                        <ClothingCategory nombre="Zapatos" productos={this.props.zapatos}/>
                    </div>
                    
                </div>
        )
    }
}

export default Picker;
