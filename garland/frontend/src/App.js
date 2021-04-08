import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Home from './Pages/Home/home';
import Logo from "./assets/logo.jpg";

import './App.css';

export default class App extends Component{
    render(){
        return (
          <Container fixed>
            <div>
              <img src={Logo}/>
            </div>
            <div>
              <Home/>
            </div>
          </Container>
        )
    }
}

