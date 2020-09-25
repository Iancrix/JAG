import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Droppable extends Component {

    state = {
        style:{}
    }

    drop = (e) => {
        e.preventDefault();

        var key = "";
        var style = {};

        if(e.dataTransfer.getData('Camiseta') !== ""){
            //console.log("Camiseta");
            key = "Camiseta";
        }else if(e.dataTransfer.getData('Sombrero') !== ""){
            //console.log("Sombrero")
            key = "Sombrero";
        }else if(e.dataTransfer.getData('Gafas') !== ""){
            //console.log("Gafas")
            key = "Gafas";
        }else if(e.dataTransfer.getData('Bufanda') !== ""){
            //console.log("Bufanda")
            key = "Bufanda";
        }else if(e.dataTransfer.getData('Cinturon') !== ""){
            //console.log("Cinturon")
            key = "Cinturon";
        }else if(e.dataTransfer.getData('Pantalon') !== ""){
            //console.log("Pantalon")
            key = "Pantalon";
        }else if(e.dataTransfer.getData('Zapatos') !== ""){
            //console.log("Zapatos")
            key = "Zapatos";
        }

        const data = e.dataTransfer.getData(key);
        //console.log("La data es " + data)

        if(data !== ""){
            var node = document.getElementById(data);
            
            var nodeChild = node.childNodes[0];
            
            var image = nodeChild.style.backgroundImage;

            style = {
                backgroundImage: image
            }

            var nodeTarget = document.getElementById(key);
            nodeTarget.childNodes[0].style.backgroundImage = image

            var itemStyle = nodeChild.currentStyle || window.getComputedStyle(nodeChild, false);
            var url = style.backgroundImage.slice(4, -1).replace(/"/g, "");

            this.props.getSelected(url, data, key)
        }

        
        /*
        const data = e.dataTransfer.getData('transfer');
        console.log(data);

        var node = document.getElementById(data);
        var nodeChild = node.childNodes[0];
        var image = nodeChild.style.backgroundImage;

        var style = {
            backgroundImage: image
        }

        var nodeTarget = document.getElementById("dr1");
        nodeTarget.childNodes[0].style.backgroundImage = image
        
        var n = node.childNodes[0]
        var itemStyle = nodeChild.currentStyle || window.getComputedStyle(nodeChild, false);
        var url = style.backgroundImage.slice(4, -1).replace(/"/g, "");

        this.props.getSelected(url)
        */
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div id={this.props.id} 
                onDrop={this.drop} 
                onDragOver={this.allowDrop} 
                >
                {this.props.children}
            </div>

        )
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}

export default Droppable;
