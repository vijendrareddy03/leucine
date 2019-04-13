import {Form, Input, Radio, Card} from 'antd';
import React, {Component} from 'react';

let RadioGroup = Radio.Group;
class RinseSamplings extends Component {
  constructor(props) {
    super(props)
    this.state = props.data
  }
  renderSwab() {
    if (this.props.rinseSamplingReq && ((this.props.targetResidueType === 'api') || (this.props.targetResidueType === 'cleaningAgent'))) {
      return <Card>
        <Form.Item label="Method Used">
          <Input
            value={this.props.data.rinse.methodUsed}
            onChange={(e, key) => this.props.handleInputData(e, 'rinse.methodUsed')}
            type="Text"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
        <Form.Item label="Solvent Name & Solvent Quantity">
          <Input
            value={this.props.data.rinse.solventName}
            onChange={(e, key) => this.props.handleInputData(e, 'rinse.solventName')}
            type="text"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
          <Input
            value={this.props.data.rinse.solventQuantity}
            onChange={(e, key) => this.props.handleInputData(e, 'rinse.solventQuantity')}
            type="number"
            min="0"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
        <Form.Item label="Default Recovery %">
          <Input
            value={this.props.data.rinse.defaultRecovery}
            onChange={(e, key) => this.props.handleInputData(e, 'rinse.defaultRecovery')}
            type="number"
            min="0"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
      </Card>;
    }
    if (this.props.rinseSamplingReq && ((this.props.targetResidueType === 'bioBurden') || (this.props.targetResidueType === 'endoToxin'))) {
      return <Card>
        <Form.Item label="Use Recovery For Rinse ?">
          <RadioGroup
            onChange={this.props.onChangeRadioRinse}
            value={this.props.radioRinse}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </RadioGroup>
        </Form.Item>
        <Form.Item label="Default Recovery %">
          <Input
            value={this.props.data.rinse.defaultRecovery}
            onChange={(e, key) => this.props.handleInputData(e, 'rinse.defaultRecovery')}
            type="number"
            min="0"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
      </Card>;
    }
    return (
      <div></div>
    )
  }
  render() {
    return this.renderSwab();
  }
}
export default RinseSamplings;