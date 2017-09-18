import React, { Component } from 'react';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import {
  Panel,
  Button,
  PageHeader,
  ControlLabel,
  FormControl,
  Checkbox,
  Form,
 } from 'react-bootstrap';
import '../../index.css';
import ReactDom from 'react-dom';
import { saveExames } from '../../helpers/writeDataFireBase';
let permEspecial = null;
import { Tabs, Tab } from 'react-bootstrap';



class TelaExames extends React.Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {

    e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    saveExames(ReactDom.findDOMNode(this.refs['codigo']).value, formData);

     for (const field in this.refs) {
        this.refs[field].value = "";
     }
     alert("Dados Salvos!!!")
  }

   onChangeCheckboxPerm(event){

        permEspecial = event.target.checked;

   }



  render() {


  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h4></h4>

        </div>
      </div>
      <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <Panel header={<span>Exames </span>} >
               <div className="row">
                 <div className="col-lg-2">
                     <ControlLabel> Código </ControlLabel>
                      <input type="text" className="form-control"  ref="codigo" ></input>
                  </div>
                  <div className="col-lg-4">
                       <input type="checkbox"  name="permEspecial" onChange={this.onChangeCheckboxPerm}/>Permissão Especial
                   </div>
                  <div className="col-lg-3">
                       <input type="checkbox" name="bloqueado" ref="bloqueado" defaultChecked={false} /> Bloqueado
                  </div>
                  <div className="col-lg-3">
                         <input type="checkbox" name="bloqueadoTemp" ref="bloqueadoTemp" defaultChecked={false} /> Bloqueado Temp.
                         <select name="select" className="form-control" ref="tempo" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                     <ControlLabel> Descrição </ControlLabel>
                      <input type="text" className="form-control" ref="descricao" />
                  </div>
                   <div className="col-lg-1"/>
                   <div className="col-lg-6">
                      <ControlLabel> Sinônimos </ControlLabel>
                       <input type="text" className="form-control" ref="sinonimos"  />
                    </div>
                 </div>
                    <div className="row">
                      <div className="col-lg-6">
                         <ControlLabel> Material </ControlLabel>
                          <input type="text" className="form-control" ref="material"  />
                      </div>
                      <div className="col-lg-1">
                         <ControlLabel> Vol. </ControlLabel>
                          <input type="text" className="form-control" ref="vol"  />
                      </div>
                      <div className="col-lg-1">
                        <Checkbox> dl </Checkbox>
                        <Checkbox> m </Checkbox>
                      </div>
                      <div className="col-lg-4">
                         <ControlLabel> Método. </ControlLabel>
                          <input type="text" className="form-control" ref="metodo" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                         <ControlLabel> Bancada </ControlLabel>
                          <input type="text" className="form-control" ref="bancada" />
                      </div>
                       <div className="col-lg-1"/>
                       <div className="col-lg-6">
                          <ControlLabel> Aparelho </ControlLabel>
                           <input type="text" className="form-control" ref="aparelho"  />
                        </div>
                 </div>
                  <div className="row">
                       <div className="col-lg-6">
                          <ControlLabel> Lab. Apoio </ControlLabel>
                           <input type="text" className="form-control" ref="labApoio" />
                       </div>
                       <div className="col-lg-3">
                          <ControlLabel> Sexo </ControlLabel>
                           <select name="select" className="form-control" ref="sexo" >
                               <option value="1">Masculino</option>
                               <option value="2">Feminino</option>
                           </select>
                       </div>
                        <div className="col-lg-1"/>
                       <div className="col-lg-3">
                            <Checkbox> Notificação Compulsória </Checkbox>
                       </div>
                   </div>
                    <div className="row">
                        <div className="col-lg-2">
                           <ControlLabel> Dias de Entrega </ControlLabel>
                            <input type="text" className="form-control" ref="diasEntrega" />
                        </div>
                        <div className="col-lg-4">
                           <ControlLabel> Tubo </ControlLabel>
                                <input type="text" className="form-control" ref="tubo" />
                        </div>
                        <div className="col-lg-3">
                             <Checkbox> Separado </Checkbox>
                        </div>
                        <div className="col-lg-3">
                            <ControlLabel> Quantidade de Etiquetas </ControlLabel>
                             <input type="text" className="form-control" ref="qtdEtiquetas" />
                         </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                           <ControlLabel> Tipo Observ. </ControlLabel>
                            <input type="text" className="form-control" ref="tipoObs"  />
                        </div>
                        <div className="col-lg-3">
                           <ControlLabel> Qtd. Padrão </ControlLabel>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-3">
                            <ControlLabel> Custo </ControlLabel>
                             <input type="text" className="form-control" ref="custo" />
                         </div>
                    </div>
                     <div className="row">
                            <div className="col-lg-12">
                              <PageHeader> </PageHeader>
                            </div>
                          </div>
                     <div className="row">
                      <div className="col-lg-12">
                            <Tabs id="controlled-tab-example">
                                   <Tab eventKey={1} title="Preparo">
                                     <div className="col-lg-6">
                                         <ControlLabel > Modo de Preparo </ControlLabel>
                                      <select name="select" className="form-control"   ref="modoPreparo" >
                                              <option value="1"> Padrão </option>
                                              <option value="2"> </option>
                                       </select>
                                      </div>
                                      <div className="col-lg-12"/>
                                      <div className="col-lg-12">
                                         <textarea className="form-control" rows="6" ref="preparo" ></textarea>
                                      </div>
                                   </Tab>
                                   <Tab eventKey={2} title=" Colheita/Conserva">
                                        <textarea className="form-control" rows="6" ref="colheitaCons" ></textarea>
                                   </Tab>
                                   <Tab eventKey={3} title="Obs.">
                                        <textarea className="form-control" rows="6" ref="obs" ></textarea>
                                   </Tab>
                                   <Tab eventKey={4} title="Resultados Alterados">
                                        <textarea className="form-control" rows="6" ref="resultAlter" ></textarea>
                                   </Tab>
                                   <Tab eventKey={5} title="Esquema 1">
                                        <textarea className="form-control" rows="6" ref="esquema1" ></textarea>
                                   </Tab>
                                   <Tab eventKey={6} title="Esquema 2">
                                        <textarea className="form-control" rows="6" ref="esquema2" ></textarea>
                                   </Tab>
                            </Tabs>
                      </div>
                    </div>
                     <div className="row">
                        <div className="col-lg-12">
                          <PageHeader> </PageHeader>
                        </div>
                      </div>
                     <div className="row">
                        <div className="col-lg-5"/>
                        <div className="col-lg-1">
                          <Button bsStyle="primary" label="Salvar" id="salvar" type="submit"> Salvar </Button>
                        </div>
                     </div>
              </Panel>
            </div>
          </div>
       </Form>
    </div>
  );
}

}

export default TelaExames;
