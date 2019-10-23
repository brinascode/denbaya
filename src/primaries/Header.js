import React from 'react'
import { Link } from 'react-router-dom'

//Foundation UI:
import Foundation from "react-foundation"
import { Colors,Sizes, ButtonGroup,Button, Row, Column, TopBar, TopBarTitle,TopBarRight,TopBarLeft, Menu, MenuItem, ResponsiveNavigation, Icon, Label} from "react-foundation"

//Routing
import {Route, Switch} from "react-router";


class Header extends React.Component{

	render(){

		return (

            <div style={{backgroundColor:"white"}}>
                   
                            <Row large={12} style={{backgroundColor:"white",width:"101vw",borderBottom:"solid",borderColor:"black"}}>

                                <Column small={12} medium={12} large={12}> 
                                    <center>  <img src="images/logo.png" width="50%"/> </center>
                                </Column>

                                <Column small={3} medium={3} large={3} style={{backgroundColor:"black",color:"white"}}>
                                            <a href='/'>
                                                <h3 style={{color:"white"}}> <center>Acceuile </center> </h3>
                                            </a>
                                </Column>

                                <Column small={3} medium={3} large={3} style={{backgroundColor:"black",color:"white"}}>   
                                    <a href='/quisommesnous'> 
                                            <h3 style={{color:"white"}}> <center> Qui sommes nous? </center> </h3>
                                    </a>
                                </Column>

                                <Column small={3} medium={3} large={3} style={{backgroundColor:"black",color:"white"}}>      
                                    <h3 style={{color:"white"}}> <center> Que faisons nous? </center> </h3>     
                                </Column>

                                <Column small={3} medium={3} large={3} style={{backgroundColor:"black",color:"white"}}>
                                    <h3 style={{color:"white"}}> <center>Pour nous rejoindre </center> </h3>
                                </Column>

                           
                                        
                            </Row> 

                        

            </div>
           


		)
	}

} 

export default Header
/*

 <ResponsiveNavigation style={{backgroundColor:"white"}}> 

                        <TopBar className="navbar" large={12} style={{backgroundColor:"white",width:"101vw",borderBottom:"solid",borderColor:"black",marginLeft:"0.01vw"}}>

                            <Row style={{backgroundColor:"white"}}>

                                <Column small={12} medium={12} large={12}> 
                                    <center>  <img src="images/logo.png" width="130vw"/> </center>
                                </Column>

                                <Column small={3} medium={3} large={3} style={{}}>
                                            <Link to='/'>
                                                <h2> <center>Acceuile </center> </h2>
                                            </Link>
                                </Column>

                                <Column small={3} medium={3} large={3} style={{}}>   
                                    <Link to='/quisommesnous'> 
                                            <h2> <center> Qui sommes nous? </center> </h2>
                                    </Link>
                                </Column>

                                <Column small={3} medium={3} large={3} style={{}}>      
                                    <h2> <center> Que faisons nous? </center> </h2>     
                                </Column>

                                <Column small={3} medium={3} large={3} style={{}}>
                                    <h2> <center>Pour nous rejoindre </center> </h2>
                                </Column>

                           
                                        
                            </Row> 

                        </TopBar>



                    </ResponsiveNavigation>

*/