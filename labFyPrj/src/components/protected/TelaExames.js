import React  from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';
import '../../index.css';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';



function displayForms(props, context) {

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <h4></h4>
        </div>
      </div>
      <Form>
          <div className="row">
            <div className="col-lg-12">
              <Panel header={<span>Exames</span>} >
                <div className="row">
                  <div className="col-lg-2">
                     <ControlLabel> Código </ControlLabel>
                     <FormControl type="text" />
                  </div>
                  <div className="col-lg-4">
                      <Checkbox> Permissão Especial </Checkbox>
                   </div>
                  <div className="col-lg-3">
                        <Checkbox> Bloqueado </Checkbox>
                  </div>
                  <div className="col-lg-3">
                        <Checkbox> Bloqueado Temp. </Checkbox>
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
                     <FormControl type="text" />
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
                      <div className="col-sm-12">
                        <table
                          className="table table-striped table-bordered table-hover dataTable no-footer"
                          id="dataTables-example"
                          role="grid"
                          aria-describedby="dataTables-example_info"
                        >
                          <thead>
                            <tr role="row">
                              <th

                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Rendering engine: activate to sort column descending"
                                aria-sort="ascending"
                                style={{ width: 265 }}
                              >
                              Preparo
                              </th>
                              <th

                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Browser: activate to sort column ascending"
                                style={{ width: 321 }}
                              >
                              Colheita/Conserva
                              </th>
                              <th

                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Platform(s): activate to sort column ascending"
                                style={{ width: 299 }}
                              >
                              Obs.
                              </th>
                              <th

                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="Engine version: activate to sort column ascending"
                                style={{ width: 231 }}
                              >
                              Resultados Alterados
                              </th>
                              <th

                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: 180 }}
                              >Esquema 1
                              </th>
                              <th

                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: 180 }}
                              >Esquema 2
                              </th>
                              <th

                                tabIndex="0"
                                aria-controls="dataTables-example"
                                rowSpan="1"
                                colSpan="1"
                                aria-label="CSS grade: activate to sort column ascending"
                                style={{ width: 180 }}
                              >Interpretação
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="gradeA odd" role="row">
                              <td className="sorting_1">Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td className="center">1.7</td>
                              <td className="center">A</td>
                              <td className="center">xxx</td>
                              <td className="center">zz</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                     <div className="row">
                        <div className="col-lg-5"/>

                        <div className="col-lg-1">
                          <Button bsStyle="primary">Salvar</Button>
                        </div>
                     </div>
              </Panel>
            </div>
          </div>
       </Form>
    </div>
  );
}


export default displayForms;
