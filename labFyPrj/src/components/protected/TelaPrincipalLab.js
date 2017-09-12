import React, { Component } from 'react'
import '../../index.css';
import Sidebar from './Sidebar'
import TelaExames from './TelaExames'


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
                 <div data-reactid="116"><TelaExames/></div>


              </div>
             </div>

         </div>

     </div>
	)
  }
}


