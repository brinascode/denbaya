//Tools
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

//Foundation UI:
import Foundation from "react-foundation"
import { Inline,Breadcrumbs, BreadcrumbItem, Thumbnail, MediaObject, MediaObjectSection, Colors,Sizes, ButtonGroup,Button, Row, Column, TopBar, TopBarTitle,TopBarRight,TopBarLeft, Menu, MenuItem, ResponsiveNavigation, Icon, Label} from "react-foundation"

//Server routing
const axios = require("axios");






class AuthenBox extends React.Component{

	authenticateFacebook(){

				
		/*axios.get('/auth/facebook')
		  .then(response => {
		    console.log(response.data);
		    
		  })
		  .catch(error => {
		    console.log(error);
		  });
		}*/
		window.location.href = "http://localhost:3001/auth/facebook" //OR 3001
		

		}

	authenticateGoogle(){

		window.location.href = "http://localhost:3001/auth/google" 
		

		}

	render(){

		return(
				<span>

						<br/><br/><br/>
						<h1>Connexion</h1><br/>
						<Button color={Colors.ALERT} onClick={this.authenticateGoogle}> 
						Se connecter avec Google
						</Button>
								
				</span>

			)

	}

}

export default AuthenBox