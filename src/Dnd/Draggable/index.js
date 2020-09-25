import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from "../../components/CustomPacket/css/Customizer.css"

class Draggable extends Component {

    drag = (e) => {
        //console.log(this.props.category + "estooooooo")
        e.dataTransfer.setData(this.props.category/*'transfer'*/, e.target.id);
    }

    noAllowDrop = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <div id={this.props.id} 
                draggable="true" 
                onDragStart={this.drag} 
                onDragOver={this.noAllowDrop}
                className={classes.dragItem}>

                {this.props.children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}

export default Draggable;