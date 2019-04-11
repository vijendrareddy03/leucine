import {Form, Input, Radio, Card} from 'antd';
import React, {Component} from 'react';

let RadioGroup = Radio.Group;
class SwabSamplings extends Component {
  constructor(props) {
    super(props)
    this.state = props.data
  }
  renderSwab() {
    if (this.props.swabSamplingReq && ((this.props.targetResidueType === 'api') || (this.props.targetResidueType === 'cleaningAgent'))) {
      return <Card>
        <Form.Item label="Method Used">
          <Input
            value={this.props.data.swab.methodUsed}
            onChange={(e, key) => this.props.handleInputData(e, 'swab.methodUsed')}
            type="Text"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
        <Form.Item label="Solvent Name & Solvent Quantity">
          <Input
            value={this.props.data.swab.solventName}
            onChange={(e, key) => this.props.handleInputData(e, 'swab.solventName')}
            type="text"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
          <Input
            value={this.props.data.solventQuantity}
            onChange={(e, key) => this.props.handleInputData(e, 'swab.solventQuantity')}
            type="number"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
        <Form.Item label="Default Recovery %">
          <Input
            value={this.props.data.swab.defaultRecovery}
            onChange={(e, key) => this.props.handleInputData(e, 'swab.defaultRecovery')}
            type="number"
            style={{
            width: '30%',
            marginRight: 8
          }}/>
        </Form.Item>
      </Card>;
    }
    if (this.props.swabSamplingReq && ((this.props.targetResidueType === 'bioBurden') || (this.props.targetResidueType === 'endoToxin'))) {
      return <Card>
        <Form.Item label="Use Recovery For Swab ?">
          <RadioGroup
            onChange={this.props.onChangeRadioSwab}
            value={this.props.radioSwab}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </RadioGroup>
        </Form.Item>
        <Form.Item label="Default Recovery %">
          <Input
            value={this.props.data.swab.defaultRecovery}
            onChange={(e, key) => this.props.handleInputData(e, 'swab.defaultRecovery')}
            type="number"
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
export default SwabSamplings;