import React from 'react'



//Foundation UI:
import Foundation from "react-foundation"
import { Colors,Sizes, ButtonGroup,Button, Row, Column, TopBar, TopBarTitle,TopBarRight,TopBarLeft, Menu, MenuItem, ResponsiveNavigation, Icon, Label} from "react-foundation"






class Footer extends React.Component{

	

	render(){
		return (
			<div style={{backgroundColor:"black",height:"10vw",width:"100vw",marginLeft:"0.01vw",color:"white"}}>
					<Row large={12} style={{backgroundColor:"black",height:"10vw",width:"101vw",marginLeft:"0.01vw",padding:"1vw"}}>
		
					Copyrights 
					</Row>
   
		 </div>

			)
	}
}




export default Footer