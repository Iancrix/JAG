import React, { Component } from 'react'
import classes from './css/Customizer.css'
import classes2 from '../../styles/Shop.css';
import Picker from './Picker'
import Runway from './Runway'
import Financier from './Financier'
import axios from 'axios';
import Footer from '../Footer'
import Navbar from '../NavBar'
class Customizer extends Component {

    state = {
        ropa:[],
        camisetas:[],
        sombreros:[],
        bufandas:[],
        gafas:[],
        cinturones:[],
        pantalones:[],
        zapatos:[],
        selectedShirt:null,
        selectedHat:null,
        selectedScarf:null,
        selectedGlasses:null,
        selectedBelt:null,
        selectedShoes:null,
        selectedPant:null,
        navitems: [
            {
              name: "Back",
              description: "Whatever it takes",
              url: "",
              isEven: true,
              isCenter: false
            },

            {
              name: "",
              description: "Blank",
              url: "#",
              isEven: false,
              isCenter: true
            },
            {
              name: "Buy",
              description: "Whatever it takes",
              url: "",
              isEven: true,
              isCenter: false
            }
          ]
    }
    
    componentDidMount(){
        axios.get('./data.json')
        .then(response => {
            const ropa = response.data;

            const camisetas = ropa.filter((prenda) => {
                if(prenda.categoria == "Camiseta"){
                    return prenda;
                }
            })

            const sombreros = ropa.filter((prenda) => {
                if(prenda.categoria == "Sombrero"){
                    return prenda;
                }
            })

            const bufandas = ropa.filter((prenda) => {
                if(prenda.categoria == "Bufanda"){
                    return prenda;
                }
            })

            const gafas = ropa.filter((prenda) => {
                if(prenda.categoria == "Gafas"){
                    return prenda;
                }
            })

            const cinturones = ropa.filter((prenda) => {
                if(prenda.categoria == "Cinturon"){
                    return prenda;
                }
            })

            const pantalones = ropa.filter((prenda) => {
                if(prenda.categoria == "Pantalon"){
                    return prenda;
                }
            })

            const zapatos = ropa.filter((prenda) => {
                if(prenda.categoria == "Zapatos"){
                    return prenda;
                }
            })

            this.setState({
                ropa,
                camisetas,
                sombreros,
                bufandas,
                gafas,
                cinturones,
                pantalones,
                zapatos
            })
        })
    }

    updateSelectedProduct = (category,id) => {
        /*this.setState({
            [category]: this.state.ropa.filter(prenda => prenda.id === id)
        }, () => {console.log(this.state)})*/
        if(category === "Camiseta"){
            this.setState({
                selectedShirt: this.state.camisetas.find(prenda => prenda.id === id)
            }, () => {console.log(this.state)})
            console.log("pasando")
        }else if(category === "Sombrero"){
            this.setState({
                selectedHat: this.state.sombreros.find(prenda => prenda.id === id)
            }, () => {console.log(this.state)})
            console.log("pasando")
        }else if(category === "Bufanda"){
            this.setState({
                selectedScarf: this.state.bufandas.find(prenda => prenda.id === id)
            })
            console.log("pasando")
        }else if(category === "Pantalon"){
            this.setState({
                selectedPant: this.state.pantalones.find(prenda => prenda.id === id)
            })
            console.log("pasando")
        }else if(category === "Gafas"){
            this.setState({
                selectedGlasses: this.state.gafas.find(prenda => prenda.id === id)
            })
            console.log("pasando")
        }else if(category === "Cinturon"){
            this.setState({
                selectedBelt: this.state.cinturones.find(prenda => prenda.id === id)
            })
            console.log("pasando")
        }
        else if(category === "Zapatos"){
            this.setState({
                selectedShoes: this.state.zapatos.find(prenda => prenda.id === id)
            })
            console.log("pasando")
        }

        //console.log(this.state)
    }

    render() {
        return (
            <div>
                <Navbar navitems={this.state.navitems}/>
                <div className={classes2.topBar}></div>
                <div className={classes.customizerC}>
                    <Picker camisetas={this.state.camisetas} 
                            sombreros={this.state.sombreros}
                            gafas={this.state.gafas}
                            cinturones={this.state.cinturones}
                            bufandas={this.state.bufandas}
                            pantalones={this.state.pantalones}
                            zapatos={this.state.zapatos}/>
                            
                    <Runway updateSelection={this.updateSelectedProduct}/>
                    <Financier selectedShirt={this.state.selectedShirt}
                            selectedHat={this.state.selectedHat}
                            selectedScarf={this.state.selectedScarf}
                            selectedPant={this.state.selectedPant}
                            selectedShoes={this.state.selectedShoes}
                            selectedBelt={this.state.selectedBelt}
                            selectedGlasses={this.state.selectedGlasses}/>
                     
                </div>
                <Footer /> 
                
            </div>
        )
    }
}

export default Customizer;