import React, { Component } from 'react'
import classes from './css/Customizer.css'

import Droppable from '../../Dnd/Droppable';

class Runway extends Component {

    state = {

    }

    getSelected = (imageurl, id, key) => {
        console.log(key)
        this.props.updateSelection(key, parseInt(id));
    }

    render() {
        return (
            <div className={classes.runwayC}>
                    <div className={classes.runwayTitle}>
                        <h2>Runway</h2>
                    </div>
                    <div className={classes.runwayClothing}>

                        <Droppable id="Sombrero" getSelected={this.getSelected}><div className={classes.hat}></div></Droppable>
                        
                        <Droppable id="Gafas" getSelected={this.getSelected}><div className={classes.glasses}></div></Droppable>
                        
                        <Droppable id="Bufanda" getSelected={this.getSelected}><div className={classes.scarf}></div></Droppable>
                        
                        <Droppable id="Camiseta" getSelected={this.getSelected}><div className={classes.shirt}></div></Droppable>
                        
                        <Droppable id="Cinturon" getSelected={this.getSelected}><div className={classes.belt}></div></Droppable>
                        
                        <Droppable id="Pantalon" getSelected={this.getSelected}><div className={classes.pants}></div></Droppable>
                        
                        <Droppable id="Zapatos" getSelected={this.getSelected}><div className={classes.shoes}></div></Droppable>
                        
                    </div>
                    
                </div>
        )
    }
}

export default Runway;
