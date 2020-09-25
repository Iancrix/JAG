import React, { Component } from 'react'
import classes from '../styles/NavBar.css'
import NavItem from './NavItem';

class NavBar extends Component {
    state = {

    }

    render() {
        return (
            <div className={classes.navcontainer}>
                
                <div className={classes.logo}></div>

                {this.props.navitems.map(
                    navitem => <NavItem name={navitem.name}
                                description={navitem.description}   
                                url={navitem.url} isEven={navitem.isEven} isCenter={navitem.isCenter}
                                resetCarrito={this.props.resetCarrito}/>
                )}    

            </div>
        )
    }
}

export default NavBar;
