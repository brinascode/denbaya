//Tools
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from "react-bootstrap"




		//The viewing area does not have a fixed height, its getting its height from the denbaya pic!!

class Welcome extends React.Component {

	 render() {

		return (
	  
		

			<div style={{width:"100vw",height:"40vw",backgroundColor:"white",marginLeft:"0.01vw"}}>
				
				<Row style={{padding:"2vw"}}> 
				<center><img src="images/icon.png" width='50%' /></center> 
				</Row>

				

			
			</div>


	   		   
	    );

    }

}

export default Welcome

/*
const style = {	
			backgroundColor:"white",
			padding:2+"%",
			margin:"0px",
			width:100+'%',
			backgroundImage:"url('images/wata.jpg')",
			backgroundSize:100+"%",
			backgroundPosition:"center",
		}


			<div>
					<Row style={style}>
						
						<center><img src="images/icon.png" width='60%' /></center>


						

					</Row> 
			</div>


		*/

