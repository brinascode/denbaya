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

class Home extends React.Component{

	render(){
		return (

				
				<Row style={styleArticle1}>

	
		

<Column small={12} medium={12} >
		<span>					
		<h2>					
			<center> 
				
				Pourquoi Denbaya?
				
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

<Column small={12} medium={12} large={12} style={{backgroundImage:"url('images/africafamily.jpg')"}}>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
</Column>

<div>
	
	<Column small={12} medium={12} large={12}>
		<h3>  Denbaya, La Famille </h3>
		<p style={{backgroundColor:"white"}}>
		
		Denbaya signifie Famille en Bambara.
		Le projet Denbaya regroupe des personnes qui s’intéressent aux problématiques de développement de l’Afrique et qui veulent œuvrer pour changer les choses. Alors au commencement de notre projet, nous avons recherché un nom qui aurait une signification simple et forte à la fois. Lourde tâche !
		Mais voici que nous vint à l’esprit les notions de société, de communauté… de famille !
		La famille, c’est le cœur de la société en Afrique. Ces sont tes parents, tes frères, tes cousins, mais aussi tous les membres de ta communauté : le jeune « frère » que tu croises dans la rue, le vieux « tonton » qui t’a indiqué le chemin... Tous ceux qui œuvrent au bien commun de la communauté sont considérés comme faisant partie de la famille.
		La famille, c’est aussi un moyen de diffuser des valeurs comme la solidarité, l’amour, le travail, la persévérance, le travail, la discipline, l’entraide.
		La famille, ce sont donc des personnes, des valeurs, des objectifs, des ambitions. La famille… C’est Denbaya voyons !

		</p>
	</Column>
</div>

			


				</Row>
				
			)
	}
}

export default Home