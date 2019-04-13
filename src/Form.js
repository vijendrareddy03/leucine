import {Form, Input, Select, Button, Card} from 'antd';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SwabSamplings from './SwabSamplings';
import RinseSamplings from './RinseSamplings';
import APISelectComponent from './APISelectComponent';
import CleaningAgentComponent from './CleaningAgentComponent';
import BioBurdenComponent from './BioBurdenComponent';
import EndoToxinComponent from './EndoToxinComponent';
import _ from 'lodash';

const Option = Select.Option;
// {   analyticalMethodId: '',   reason:'',   targetResidueType: '',
// lod:'',lop:'',methodUsed:'',   tntcTnfcReq: '',   tntcLimit: '',   tftcLimit:
// '',   swabSamplingReq: '',   rinseSamplingReq: '',   radioSwab: '',
// radioRinse: '',   swab: {     methodUsed: '',     solventName:'',
// solventQuantity:'',     defaultRecovery:''   },   rinse:{     methodUsed: '',
//     solventName:'',     solventQuantity:'',     defaultRecovery:''   } }
class DataForm extends Component {

  constructor(props) {
    super(props)
    if (props.data) {
      this.state = props.data;
    } else {
      this.state = {
        analyticalMethodId: '',
        reason: '',
        targetResidueType: '',
        lod: '',
        lop: '',
        methodUsed: '',
        tntcTnfcReq: '',
        tntcLimit: '',
        tftcLimit: '',
        swabSamplingReq: '',
        rinseSamplingReq: '',
        radioSwab: '',
        radioRinse: '',
        swab: {
          methodUsed: '',
          solventName: '',
          solventQuantity: '',
          defaultRecovery: ''
        },
        rinse: {
          methodUsed: '',
          solventName: '',
          solventQuantity: '',
          defaultRecovery: ''
        }
      }
    }

  }

  handleInputData = (e, key) => {
    this.setState(_.set({}, key, e.target.value));
  }

  handleTargetResidueType(e) {
    let state = this.state;
    state.targetResidueType = e;
    this.setState(state);
  }

  onChangeRadio = (e, key) => {
    this.setState(_.set({}, key, e.target.value));
  }

  addSwabSamplingParameters = () => {
    this.setState({
      swabSamplingReq: !this.state.swabSamplingReq
    })
  }
  addRinseSamplingParameters = () => {
    this.setState({
      rinseSamplingReq: !this.state.rinseSamplingReq
    });
  }
  
  renderSwitch() {
    switch (this.state.targetResidueType) {
      case 'api':
        return (
          <APISelectComponent
            data={this.state}
            swabSamplingReq={this.state.swabSamplingReq}
            addSwabSamplingParameters={() => this.addSwabSamplingParameters()}
            rinseSamplingReq={this.state.rinseSamplingReq}
            addRinseSamplingParameters={() => this.addRinseSamplingParameters()}
            handleInputData={(e, key) => this.handleInputData(e, key)}></APISelectComponent>
        );
      case 'cleaningAgent':
        return (
          <CleaningAgentComponent
            data={this.state}
            swabSamplingReq={this.state.swabSamplingReq}
            addSwabSamplingParameters={() => this.addSwabSamplingParameters()}
            rinseSamplingReq={this.state.rinseSamplingReq}
            addRinseSamplingParameters={() => this.addRinseSamplingParameters()}
            handleInputData={(e, key) => this.handleInputData(e, key)}></CleaningAgentComponent>
        );
      case 'bioBurden':
        return (
          <BioBurdenComponent
            data={this.state}
            onChangeRadio={(e) => this.onChangeRadio(e, 'tntcTftcReq')}
            tntcTftcReq={this.state.tntcTftcReq}
            addSwabSamplingParameters={() => this.addSwabSamplingParameters()}
            swabSamplingReq={this.state.swabSamplingReq}
            addRinseSamplingParameters={() => this.addRinseSamplingParameters()}
            rinseSamplingReq={this.state.rinseSamplingReq}
            renderTntcTftcLimits={() => this.renderTntcTftcLimits()}
            handleInputData={(e, key) => this.handleInputData(e, key)}></BioBurdenComponent>
        );

      case 'endoToxin':
        return (
          <EndoToxinComponent
            data={this.state}
            onChangeRadio={(e) => this.onChangeRadio(e, 'tntcTftcReq')}
            tntcTftcReq={this.state.tntcTftcReq}
            addSwabSamplingParameters={() => this.addSwabSamplingParameters()}
            swabSamplingReq={this.state.swabSamplingReq}
            addRinseSamplingParameters={() => this.addRinseSamplingParameters()}
            rinseSamplingReq={this.state.rinseSamplingReq}
            renderTntcTftcLimits={() => this.renderTntcTftcLimits()}
            handleInputData={(e, key) => this.handleInputData(e, key)}></EndoToxinComponent>
        );
      default:
        return <div></div>;
    }
  }

  renderTntcTftcLimits() {
    if (this.state.tntcTftcReq) {
      return <div>
        <Form.Item label="TNTC & TFTC">
          <Input
            value={this.state.tntcLimit}
            onChange={(e) => this.handleInputData(e, 'tntcLimit')}
            type="number"
            min="0"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
          <Input
            value={this.state.tftcLimit}
            onChange={(e) => this.handleInputData(e, 'tftcLimit')}
            type="number"
            min="0"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
      </div>;
    }

  }

  render() {
    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>

          <Form.Item label="Analytical Method ID">
            <Input
              value={this.state.analyticalMethodId}
              onChange={(e) => this.handleInputData(e, 'analyticalMethodId')}
              style={{
              width: '60%',
              marginRight: 8
            }}/>
          </Form.Item>
          <Form.Item label="Target Residue Type">
            <Select
              style={{
              width: 120
            }}
              onChange={(e) => this.handleTargetResidueType(e)}
              value={this.state.targetResidueType}>
              <Option value="api">API</Option>
              <Option value="cleaningAgent">Cleaning Agent</Option>
              <Option value="bioBurden">BioBurden</Option>
              <Option value="endoToxin">EndoToxin</Option>
            </Select>
          </Form.Item>
          {this.renderSwitch()}
          <SwabSamplings
            data={this.state}
            swabSamplingReq={this.state.swabSamplingReq}
            targetResidueType={this.state.targetResidueType}
            radioSwab={this.state.radioSwab}
            onChangeRadioSwab={(e) => this.onChangeRadio(e, 'radioSwab')}
            handleInputData={(e, key) => this.handleInputData(e, key)}></SwabSamplings>
          <RinseSamplings
            data={this.state}
            rinseSamplingReq={this.state.rinseSamplingReq}
            targetResidueType={this.state.targetResidueType}
            radioRinse={this.state.radioRinse}
            onChangeRadioRinse={(e) => this.onChangeRadio(e, 'radioRinse')}
            handleInputData={(e, key) => this.handleInputData(e, key)}></RinseSamplings>

          <Form.Item label="Reason">
            <Input
              value={this.state.reason}
              onChange={(e, key) => this.handleInputData(e, 'reason')}
              style={{
              width: '60%',
              marginRight: 8
            }}/>
          </Form.Item>
          <Button
            type="primary"
            onClick={() => this.props.handleSubmit(this.state, this.props.id)}>Submit</Button>
        </Form>
      </Card>
    );
  }
}

export default DataForm;