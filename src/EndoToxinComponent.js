import {Form, Icon, Input, Button, Radio, Card} from 'antd';
import React, {Component} from 'react';

let RadioGroup = Radio.Group;
class EndoToxinComponent extends Component {
  constructor(props) {
    super(props)
    this.state = props.data
  }
  renderAPI() {
    return <Card>
      <Form.Item label="Method Used">
        <Input
          value={this.props.data.methodUsed}
          onChange={(e, key) => this.props.handleInputData(e, 'methodUsed')}
          style={{
          width: '60%',
          marginRight: 8
        }}/>
      </Form.Item>
      <Form.Item label="TNTC TNFC Required ?">
        <RadioGroup onChange={this.props.onChangeRadio} value={this.props.tntcTftcReq}>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </RadioGroup>
      </Form.Item>

      {this
        .props
        .renderTntcTftcLimits()}
      <Button
        type="dashed"
        onClick={this.props.addSwabSamplingParameters}
        style={{
        width: 'auto'
      }}>
        <Icon type={this.props.swabSamplingReq
          ? 'minus'
          : 'plus'}/> {this.props.swabSamplingReq
          ? 'Remove SWAB Sampling Parameters'
          : ' Configure SWAB Sampling Parameters'}
      </Button>
      <Button
        type="dashed"
        onClick={this.props.addRinseSamplingParameters}
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

export default EndoToxinComponent;