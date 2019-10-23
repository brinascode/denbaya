import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';

//Routing
import {Route, Switch} from "react-router";
import { Link } from 'react-router-dom';

//Primaries (Interface building blocks)
import Header from "./primaries/Header"
import Footer from './primaries/Footer'


//Components to be rendered at link click (path change/routing)
import Welcome from "./primaries/Welcome"
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





/* Notes about tags:
The 2nd column is not visible and not meant to be seen, it's just us defining all the routes and 
links of our application
*/




class App extends Component {
  render() {
    return (

      <div>
    
            <Row style={{backgroundColor:'white',marginLeft:"vw"}} large={12}>

            
                  <Column large={12} style={{backgroundColor:'white'}}> 
                      <Header/> 
                  </Column>

              
                  <Column large={12} style={{backgroundColor:'white'}}>
                      <Switch>
                        <Route exact path='/' component={Welcome}/>
                        <Route path='/quisommesnous' component={QuiSommesNous}/>
                                  <Route path='/pourquoidenbaya' component={PourquoiDenbaya}/>
                                  <Route path='/lebureau' component={LeBureau}/>
                        <Route path='/connexion' component={AuthenBox}/>
                        <Route path='/roster' component={Roster}/>
                        <Route path='/schedule' component={Schedule}/>
                      </Switch>
                  </Column>

              
                    <Footer />
              
        
             </Row>

      </div>
    );
  }
}

export default App;
