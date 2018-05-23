import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';

//Routing
import {Route, Switch} from "react-router";
import { Link } from 'react-router-dom';



//Primaries (Interface building blocks)
import Header from "./primaries/Header"
import Footer from './primaries/Footer'


//Views for the links
import Main from "./subviews/Main"
import Home from './subviews/Home'
import QuiSommesNous from "./subviews/QuiSommesNous"
        import PourquoiDenbaya from "./subviews/PourquoiDenbaya"
        import LeBureau from "./subviews/LeBureau"
import AuthenBox from './subviews/AuthenBox'
import Roster from './subviews/Roster'
import Schedule from './subviews/Schedule'


//Foundation UI:
import Foundation from "react-foundation"
import { Row, Column} from "react-foundation"






class App extends Component {
  render() {
    return (

    
        <Row >

          

		    <Column large={12}><Header/></Column>
			  <Column large={12}>


            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/quisommesnous' component={QuiSommesNous}/>
                        <Route path='/pourquoidenbaya' component={PourquoiDenbaya}/>
                        <Route path='/lebureau' component={LeBureau}/>
              <Route path='/connexion' component={AuthenBox}/>
              <Route path='/roster' component={Roster}/>
              <Route path='/schedule' component={Schedule}/>
            </Switch>


        


        </Column>
        <Column large={12}> <Footer /></Column>
       

      

       	   
	    </Row>
    );
  }
}

export default App;
