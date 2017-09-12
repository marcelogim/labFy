import React, { Component } from 'react'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import '../../index.css';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import Sidebar from './Sidebar'
import TelaExames from './TelaExames'

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
    <div>
        <div className="row panel-title" data-reactid="111">
            <div className="col-xs-9 text-left">
                   <div data-reactid="116"><Sidebar/></div>
             </div>
        </div>
        <div id="page-wrapper" className="page-wrapper" data-reactid="101">
            <div data-reactid="102">
             <div className="row" data-reactid="107">
                <div className="col-lg-3 col-md-6" data-reactid="108">
                    <div className="panel-primary panel panel-default" data-reactid="109">
                         <div className="panel-heading" data-reactid="110">
                                <div className="row panel-title" data-reactid="111">
                                        <div className="col-xs-9 text-right">
                                                <div data-reactid="116"><TelaExames/></div>
                                         </div>
                                </div>

                          </div>
                     </div>

                 </div>

              </div>
             </div>

         </div>

     </div>
	)
  }
}


