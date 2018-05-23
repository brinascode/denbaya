//Tools
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from "react-bootstrap"



//Variables:
const style= {	
			backgroundColor:"white",
			padding:2+"%",
			margin:"0px",
			width:100+'%',
			backgroundImage:"url('images/wata.jpg')",
			backgroundSize:100+"%",
			backgroundPosition:"center",
		}

		//The viewing area does not have a fixed height, its getting its height from the denbaya pic!!

class Main extends React.Component {

	 render() {

		return (
	  

			<Row style={style}>
				
				<center><img src="images/icon.png" width='60%' /></center>


				<br />
				<br />

				

			</Row> 


	   		   
	    );

    }

}

export default Main