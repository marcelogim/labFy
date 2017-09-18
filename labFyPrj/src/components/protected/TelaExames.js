import React, { Component } from 'react';

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
 console.log('-->',  ReactDom.findDOMNode(this.refs['codigo']).value);
//    const formData = {};
//    for (const field in this.refs) {
//      //  console.log('-->',  ReactDom.findDOMNode(this.refs[field]).value);
//
//    }

      saveExames(ReactDom.findDOMNode(this.refs['codigo']).value);
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
                     <FormControl type="text" ref="codigo" />

                  </div>
                  <div className="col-lg-4">
                       <input type="checkbox"  name="permEspecial" onChange={this.onChangeCheckboxPerm}/>Permissão Especial
                   </div>
                  <div className="col-lg-3">
                          <input type="checkbox" name="bloqueado" ref="bloqueado" defaultChecked={false} /> Bloqueado
                  </div>
                  <div className="col-lg-3">
                          <input type="checkbox" name="bloqueadoTemp" ref="bloqueadoTemp" defaultChecked={false} /> Bloqueado Temp.
                        <FormControl componentClass="select" placeholder="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                     <ControlLabel> Descrição </ControlLabel>
                     <FormControl type="text" ref="descricao" />
                  </div>
                   <div className="col-lg-1"/>
                   <div className="col-lg-6">
                      <ControlLabel> Sinônimos </ControlLabel>
                      <FormControl type="text" />
                    </div>
                 </div>
                    <div className="row">
                      <div className="col-lg-6">
                         <ControlLabel> Material </ControlLabel>
                         <FormControl type="text" />
                      </div>
                      <div className="col-lg-1">
                         <ControlLabel> Vol. </ControlLabel>
                         <FormControl type="text" />
                      </div>
                      <div className="col-lg-1">
                        <Checkbox> dl </Checkbox>
                        <Checkbox> m </Checkbox>
                      </div>
                      <div className="col-lg-4">
                         <ControlLabel> Método. </ControlLabel>
                         <FormControl type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                         <ControlLabel> Bancada </ControlLabel>
                         <FormControl type="text" />
                      </div>
                       <div className="col-lg-1"/>
                       <div className="col-lg-6">
                          <ControlLabel> Aparelho </ControlLabel>
                          <FormControl type="text" />
                        </div>
                 </div>
                  <div className="row">
                       <div className="col-lg-6">
                          <ControlLabel> Lab. Apoio </ControlLabel>
                          <FormControl type="text" />
                       </div>
                       <div className="col-lg-3">
                          <ControlLabel> Sexo </ControlLabel>
                          <FormControl componentClass="select" placeholder="select">
                               <option value="1">Masculino</option>
                               <option value="2">Feminino</option>
                           </FormControl>
                       </div>
                        <div className="col-lg-1"/>
                       <div className="col-lg-3">
                            <Checkbox> Notificação Compulsória </Checkbox>
                       </div>
                   </div>
                    <div className="row">
                        <div className="col-lg-2">
                           <ControlLabel> Dias de Entrega </ControlLabel>
                           <FormControl type="text" />
                        </div>
                        <div className="col-lg-4">
                           <ControlLabel> Tubo </ControlLabel>
                               <FormControl type="text" />
                        </div>
                        <div className="col-lg-3">
                             <Checkbox> Separado </Checkbox>
                        </div>
                        <div className="col-lg-3">
                            <ControlLabel> Quantidade de Etiquetas </ControlLabel>
                            <FormControl type="text" />
                         </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                           <ControlLabel> Tipo Observ. </ControlLabel>
                           <FormControl type="text" />
                        </div>
                        <div className="col-lg-3">
                           <ControlLabel> Qtd. Padrão </ControlLabel>
                           <FormControl type="text" />
                        </div>
                        <div className="col-lg-3">
                            <ControlLabel> Custo </ControlLabel>
                            <FormControl type="text" />
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
                                         <FormControl componentClass="select" placeholder="select" >
                                              <option value="1"> Padrão </option>
                                              <option value="2"> </option>
                                          </FormControl>
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
                          <Button bsStyle="primary" label="Salvar" id="salvar" type="submit" active>Salvar</Button>
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
