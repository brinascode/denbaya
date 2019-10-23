//Tools
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

//Foundation UI:
import Foundation from "react-foundation"
import { Inline,Breadcrumbs, BreadcrumbItem, Thumbnail, MediaObject, MediaObjectSection, Colors,Sizes, ButtonGroup,Button, Row, Column, TopBar, TopBarTitle,TopBarRight,TopBarLeft, Menu, MenuItem, ResponsiveNavigation, Icon, Label} from "react-foundation"

//Tutorial
import io from 'socket.io-client'



//Server routing
const axios = require("axios");

const sockets = io("https://denbaya-backend.herokuapp.com")
const socket1 = io.connect("https://denbaya-backend.herokuapp.com")
const socket= io.connect("http://localhost:3001")

class AuthenBox extends React.Component{

	constructor(props){

		super(props)
		this.state = {
			worked:"No",
			user:[]

		}


	}

	componentDidMount() {
	
	
		socket.on( user => {  
		  
		  this.setState({user:"hiii"})
		  

		}
		)
	}


	connectToSocket() {

		socket.on('hello', function (data) {
			console.log(data);
			socket.emit('my other event', { my: 'data' });
		  })


		
	}





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

	 /* axios.get('http://denbaya-backend.herokuapp.com/auth/google').then(function(response){
						console.log(response.data); // ex.: { user: 'Your User'}
						console.log(response.status); // ex.: 200
						});  
	*/
	//Even tho allow CORS is a response header, lets just put this here also. But also on the server!
		//axios.get('http://denbaya-backend.herokuapp.com/auth/google')

		
	window.location.href = "http://denbaya-backend.herokuapp.com/auth/google"
	 /* axios.get('/byee').then(function(response){
						console.log(response.data); // ex.: { user: 'Your User'}
						console.log(response.status); // ex.: 200
						});  */
						

	}

	render(){

		return(
				<span>

						<br/><br/><br/>
						<h1>Connexion</h1><br/>
						<Button color={Colors.ALERT} onClick={this.authenticateGoogle}> 
						Se connecter avec Google  
						{this.state.user}
						</Button>


						<Button color={Colors.DEFAULT} onClick={this.connectToSocket}> 
						Connect to socoket
						
						</Button>

						

						
								
				</span>

			)

	}

}

export default AuthenBox