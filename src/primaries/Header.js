import React from 'react'
import { Link } from 'react-router-dom'

//Foundation UI:
import Foundation from "react-foundation"
import { Colors,Sizes, ButtonGroup,Button, Row, Column, TopBar, TopBarTitle,TopBarRight,TopBarLeft, Menu, MenuItem, ResponsiveNavigation, Icon, Label} from "react-foundation"

//Routing
import {Route, Switch} from "react-router";
import Footer from "./Footer"

class Header extends React.Component{

	render(){

		return (


             <ResponsiveNavigation> 

           
               
             
                  <TopBar className="navbar">

                      <span> <img src="images/logo.png" width="30%"/> </span>
                      <Row>
                          <Column>
                    
                            <TopBarRight className="navbar__left">
 
                                    <ButtonGroup size={Sizes.SMALL}>

                                     <Link to='/'>
                                               <Button  color={Colors.WARNING} isHollow>
                                           
                                                    Acceuile
                                               
                                               </Button>
                                          </Link>
                                            
                                          <Link to='/quisommesnous'>
                                               <Button  color={Colors.SUCCESS} isHollow>
                                           
                                                    Qui sommes nous? 
                                               
                                               </Button>
                                          </Link>



                                           <Button  color={Colors.ALERT} isHollow>
                                            
                                             Que faisons nous?
                                          </Button>
                                           <Button color={Colors.WARNING} isHollow >

                                              Comment nous réjoindre?
                                          </Button>

                                          <Link to="/connexion">
                                                <Button  color={Colors.SECONDARY}>
                                                    Connexion
                                                </Button>
                                          
                                          </Link>
                                    </ButtonGroup>
                                   
                            </TopBarRight>

                          </Column>
                        </Row> 
                  </TopBar>


            

            </ResponsiveNavigation>
           


		)
	}

} 

export default Header
