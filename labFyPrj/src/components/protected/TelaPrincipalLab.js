import React, { Component } from 'react'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import TelaExame from './TelaExames.js'

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_account_balance } from 'react-icons-kit/md/ic_account_balance';
import { ic_assignment } from 'react-icons-kit/md/ic_assignment';
import { ic_chat } from 'react-icons-kit/md/ic_chat';
import { ic_map } from 'react-icons-kit/md/ic_map';
import { ic_print } from 'react-icons-kit/md/ic_print';
import { ic_directions } from 'react-icons-kit/md/ic_directions';
import { ic_gesture } from 'react-icons-kit/md/ic_gesture';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
}, 

{
	
	
})

export default class TelaPrincipalLab extends Component {
	 clickMe() {
	
  }
  render () {	    
    return (
	
		<div class="row">  
			<div style={{display: 'flex', justifyContent: 'center'}}>
				    Ola sou a tela de exames.
					Ola sou a tela de exames.
			  </div>		
			<div  class="pull-right">
                <div style={{background: '#2c3e50', color: '#FFF', width: 250}}> 
				<SideNav highlightColor='#2c3e50' highlightBgColor='#00bcd4' defaultSelected='exames'>       
					<Nav id='exames'  onNavClick={() => this.props.navigation.goBack()} >
						<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
						<NavText> Exames </NavText>
					</Nav>
					<Nav id='pacientes'>
						<NavIcon><SvgIcon size={20} icon={ic_assignment}/></NavIcon>
						<NavText> Pacientes </NavText>
					</Nav>
					  <Nav id='solExames'>
						<NavIcon><SvgIcon size={20} icon={ic_chat}/></NavIcon>
						<NavText> Solicitação de Exames </NavText>
					</Nav>
					  <Nav id='mapaTrabalho'>
						<NavIcon><SvgIcon size={20} icon={ic_map}/></NavIcon>
						<NavText> Mapa de Trabalho </NavText>
					</Nav>
					  <Nav id='digitacaoConf'>
						<NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
						<NavText> Digitação/Conferência </NavText>
					</Nav>
					  <Nav id='impressao'>
						<NavIcon><SvgIcon size={20} icon={ic_print}/></NavIcon>
						<NavText> Impressão </NavText>
					</Nav>
					  <Nav id='assinaturaDig'>
						<NavIcon><SvgIcon size={20} icon={ic_gesture}/></NavIcon>
						<NavText> Assinatura Digital </NavText>
					</Nav>
					  <Nav id='entrega'>
						<NavIcon><SvgIcon size={20} icon={ic_directions}/></NavIcon>
						<NavText> Entrega </NavText>
					</Nav>
					<Nav id='faturamento'>
						<NavIcon><SvgIcon size={20} icon={ic_account_balance}/></NavIcon>
						<NavText> Faturamento </NavText>
					</Nav>
				</SideNav>
			</div>
		</div>
	</div>      

	)
  }
}


