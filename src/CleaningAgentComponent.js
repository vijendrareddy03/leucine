import {Form, Icon, Input, Button, Card} from 'antd';
import React, {Component} from 'react';

class CleaningAgentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = props.data
  }
  renderAPI() {
    return <Card>
      <Form.Item label="LOD & LOP">
        <Input
          value={this.props.data.lod}
          onChange={(e, key) => this.props.handleInputData(e, 'lod')}
          type="number"
          style={{
          width: '30%',
          marginRight: 8
        }}/>
        <Input
          value={this.props.data.lop}
          onChange={(e, key) => this.props.handleInputData(e, 'lop')}
          type="number"
          style={{
          width: '30%',
          marginRight: 8
        }}/>
      </Form.Item>
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

export default CleaningAgentComponent;