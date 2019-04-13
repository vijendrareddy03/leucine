import {Form, Icon, Input, Button, Card} from 'antd';
import React, {Component} from 'react';

class CleaningAgentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = props.data
  }
  resetSwab(){
    if(this.state.swabSamplingReq){
      console.log(this.state.swabSamplingReq);
      let state = this.state;
        state.swab.methodUsed = '';
        state.swab.solventName = '';
        state.swab.solventQuantity= '';
        state.swab.defaultRecovery= '';
        this.setState(state);
      }
    }
    resetRinse(){
      if(this.state.rinseSamplingReq){
        console.log(this.state.rinseSamplingReq);
        let state = this.state;
          state.rinse.methodUsed = '';
          state.rinse.solventName = '';
          state.rinse.solventQuantity= '';
          state.rinse.defaultRecovery= '';
          this.setState(state);
        }
    }
  renderAPI() {
    return <Card>
      <Form.Item label="LOD & LOP">
        <Input
          value={this.props.data.lod}
          onChange={(e, key) => this.props.handleInputData(e, 'lod')}
          type="number"
          min="0"
          style={{
          width: 'auto',
          marginRight: 8
        }}/>
        <Input
          value={this.props.data.lop}
          onChange={(e, key) => this.props.handleInputData(e, 'lop')}
          type="number"
          min="0"
          style={{
          width: 'auto',
          marginRight: 8
        }}/>
      </Form.Item>
      <Button
        type={this.props.swabSamplingReq
        ? 'danger'
        : 'primary'}
        onClick={(event) => { this.props.addSwabSamplingParameters(); this.resetSwab();}  }
        style={{
        width: "auto",
        margin: "0 12px"
      }}>
        <Icon type={this.props.swabSamplingReq
          ? 'minus'
          : 'plus'}/> {this.props.swabSamplingReq
          ? 'Remove SWAB Sampling Parameters'
          : ' Configure SWAB Sampling Parameters'}
      </Button>
      <span></span>
      <Button
        type={this.props.rinseSamplingReq
        ? 'danger'
        : 'primary'}
        onClick={(e)=>{this.props.addRinseSamplingParameters(); this.resetRinse();}}
        style={{
        width: 'auto'
      }}>
        <Icon
          type={this.props.rinseSamplingReq
          ? 'minus'
          : 'plus'}/> {this.props.rinseSamplingReq
          ? 'Remove Rinse Sampling Parameters'
          : ' Configure Rinse Sampling Parameters'}
      </Button>

    </Card>;

  }
  render() {
    return this.renderAPI();
  }
}

export default CleaningAgentComponent;