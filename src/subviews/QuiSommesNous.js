//Tools
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

//Foundation UI:
import Foundation from "react-foundation"
import { Inline,Breadcrumbs, BreadcrumbItem, Thumbnail, MediaObject, MediaObjectSection, Colors,Sizes, ButtonGroup,Button, Row, Column, TopBar, TopBarTitle,TopBarRight,TopBarLeft, Menu, MenuItem, ResponsiveNavigation, Icon, Label} from "react-foundation"

var styleArticle1  = {
	backgroundColor:"white",
	backgroundImage:"url('images/.jpg')",
	backgroundSize:100+"%",
	backgroundPosition:"center",
	margin:"auto",
	height:100+"%",
	padding:3+"%",
	paddingLeft:3+"%",
	paddingRight:3+"%",
	
}

//TO DO:
//Make text wrap properly
//fix the export names oh

class Home extends React.Component{

	render(){
		return (

				
				<Row style={styleArticle1}>

	
		

<Column small={12} medium={12} >
		<span>					
		<h2>					
			<center> 
				
				Présentation 
				
			</center><br />
			
		</h2>

	 <nav aria-label="You are here:" role="navigation">
	    <Breadcrumbs>
	      	  <BreadcrumbItem isDisabled>
		      	  <Link to="/quisommesnous" style={{color:"black"}}>
		      	  Présentation
		      	  </Link>
	      	  </BreadcrumbItem>
		      <BreadcrumbItem>
		      	  <Link to="/pourquoidenbaya" style={{color:"black"}} >
		      	  Pourquoi Denbaya?
		      	  </Link>
		      </BreadcrumbItem>
		      <BreadcrumbItem>
			      <Link to="/lebureau" style={{color:"black"}}>
			      Le Bureau
			      </Link>
		      </BreadcrumbItem>
		    
		      	    </Breadcrumbs>
  </nav>	
	

	</span>
</Column>



	


<Column small={12} medium={12} large={12} style={{backgroundImage:"url('images/abidjanencore.png')",backgroundSize:100+"%",backgroundPosition:"center"}}>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
</Column>

<Column small={12} medium={9} >
	<h3>  Présentation </h3>
	<p>
		
	</p>
</Column>




						


				</Row>
				
			)
	}
}

export default Home