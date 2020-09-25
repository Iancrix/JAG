import React, { Component } from "react";
import classes from "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={classes.foot}>
    <p className={classes.footTxt}>¡ Encuentranos en nuestras redes sociales ! &nbsp; &nbsp; &nbsp;<br></br> Facebook/@JAG  &nbsp;  &nbsp; &nbsp; Instagram-@JAG    &nbsp; &nbsp; &nbsp; Twitter-#JAG</p>
        </div>
      </div>
    );
  }
}

export default Footer;
