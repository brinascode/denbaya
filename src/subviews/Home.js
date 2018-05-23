//Tools
import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Foundation UI:
import Foundation from "react-foundation"
import { Colors,Sizes, ButtonGroup,Button, Row, Column, TopBar, TopBarTitle,TopBarRight,TopBarLeft, Menu, MenuItem, ResponsiveNavigation, Icon, Label} from "react-foundation"

var styleBanner = {
	backgroundImage:"url('images/wata.jpg')",
	backgroundSize:150+"%",
	backgroundPosition:"center",
	
	}

var styleArticle1  = {
	backgroundColor:"white",
	backgroundImage:"url('images/.jpg')",
	backgroundSize:100+"%",
	backgroundPosition:"center",
	margin:"auto",
	height:50+"%",
	marginLeft:-1.2+"%",
	
}

var styleArticle2  = {
	backgroundColor:"orange",
	backgroundImage:"url('images/.jpg')",
	backgroundSize:100+"%",
	backgroundPosition:"center",
	margin:"auto",
	height:50+"%",
	marginLeft:-1.2+"%",
	}

class Home extends React.Component{

	render(){
		return (
				<Row style={styleBanner}>
						<center><img src="images/icon.png" width='60%' /></center>

				</Row>
			)
	}
}

export default Home