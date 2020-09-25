import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import classes from '../src/Login.css'

import {
  Button
} from "reactstrap";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;

      const mystyle = {
        height: "5rem",
        backgroundColor: "black",
        padding: "0px",
        positiion:"absolute",

      }
      const mystylecolor = {
        color:"yellow"
      }
      return (
            <div className={classes.style1}>
            {
              user
                ? <h2 className={classes.style2}>Hola, {user.displayName}, Bienvenido a nuestra tienda Online </h2>  
                      
                : ""                
            }
  
            {
              user
                ? <div>
                  <Button  className={classes.botonPersonalizado2} onClick={signOut}>Sign out</Button>
                  </div>
                : <div>
                  <Button className={classes.botonPersonalizado} onClick={signInWithGoogle}>Sign in</Button>
                  </div>
            }
        </div>
      );
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);