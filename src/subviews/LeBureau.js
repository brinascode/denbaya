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
		
				Le Bureau
				
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



	

<Column small={12} medium={3} >
		<img src="images/kelly1.png" width="100%" className="img-thumbnail float-left" />
</Column>
<Column small={12} medium={9} >
	<h3>  Kelly Michelle Aka </h3>
	<p>
		Née à Abidjan, en Côte d’Ivoire, 
		Kelly a vécu 10 ans dans son pays natal avant d’aller s’installer en France avec sa famille.
		Après un Bachelor en relations internationales à l’ILERI (Institut Libre d’Etudes en Relations Internationales), 
		elle a terminé sa formation par un master en études internationales avec une spécialisation en coopération, développement et économie à l’Université de Montréal au Canada. 
		Passionnée par l’Afrique, elle vise une carrière dans la coopération internationale pour le développement. 
		 Elle s’intéresse aux problématiques de développement telles que la consolidation 
		 démocratique en Afrique de l’Ouest, le lien entre la démocratie et le 
		 développement dans les pays africains, le renforcement de 
		 l’éducation en Afrique subsaharienne. 
		 Elle est également fondatrice de l’association 
		 Trust Africa et a été nommée représentante de 
		 la jeunesse de la diaspora à l’Union Africaine en 
		 2016 lors du Comité technique spécialisé sur la jeunesse, la culture et le sport.
	</p>
</Column>



<Column small={12} medium={9} >
	<h3> Yannick Houphouët Kouablan </h3>
	<p>
		Yannick est né et a grandi à Abidjan en Côte d’Ivoire. Après avoir obtenu son BAC ES au Lycée Français Blaise Pascal d’Abidjan, il poursuit son cursus par une Licence d’Economie à l’Université Paris 1 Panthéon Sorbonne. Suite à sa maitrise en Gouvernance Economique Internationale à l’Université Paris 2 Panthéon Assas, il décide de quitter le domaine économique pour se lancer dans les Relations Internationales à travers le Master 2 
		Etude Stratégique et Politique de Défense de HEIP (Ecole des Hautes Etudes Internationales et Politiques). 
		Au vu de son parcours, Yannick s’intéresse donc aux questions de sécurité et défense dans une logique de 
		gestion de crise et de résurgence de la menace terroriste dans la zone sahélienne. En outre, 
		ses connaissances en économie lui permettent également de s’intéresser aux questions de développement économique du continent Africain à savoir 
		l’enjeu monétaire et celui de l’aide au développement.
	</p>
</Column>
<Column small={12} medium={3} >
		<img src="images/yannick1.jpg" width="100%" className="img-thumbnail float-left" />
</Column>





<Column small={12} medium={3} >
		<img src="images/yannick1.jpg" width="100%" className="img-thumbnail float-left" />
</Column>
<Column small={12} medium={9} >
	<h3> Alain-Patrick DOFERE  </h3>
	<p>
		Alain-Patrick est un étudiant en troisième année en Business & Management à l’Institut Supérieur de Gestion de Paris. Après des années passées en Côte d’ivoire, 
		en 2013 il arrive en France, plus précisément à 
		Nantes où il commence ses études supérieures. De par son réseau très diversifié et son appétence pour les questions sociales qui touchent l’Afrique, 
		il réussit à mettre en place un réseau d’aide et d’orientation pour tous les jeunes étudiants ivoiriens qui arrivent pour la première fois en France. 
		Il ambitionne de faire une carrière dans les entreprises 
		internationales qui ont une base à Abidjan, 
		en Côte d’Ivoire, et ensuite il compte créer une entreprise dans les services afin de 
		créer le maximum d’emplois car sensible aux questions d’entreprenariat et d’emplois pour les jeunes.
	</p>
</Column>
						


				</Row>
				
			)
	}
}

export default Home