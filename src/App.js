import React, {Component} from 'react';
import {Router, Route, Link} from "react-router-dom";
import history from "./history";
import './App.css';
import _ from 'lodash'

import DataForm from './Form'

import {Table, Divider, Button, Icon, Layout} from 'antd';

const {Header, Footer, Sider, Content} = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      analyticmethods: [
        {
          analyticalMethodId: 'ASD344W22',
          reason: 'this is a reason',
          targetResidueType: 'api',
          lod: '22',
          lop: '11',
          methodUsed: '',
          tntcTftcReq: '',
          tntcLimit: '',
          tftcLimit: '',
          swabSamplingReq: true,
          rinseSamplingReq: '',
          radioSwab: '',
          radioRinse: '',
          swab: {
            methodUsed: 'Simple Method',
            solventName: 'h20 solvent',
            solventQuantity: '150',
            defaultRecovery: '20'
          },
          rinse: {
            methodUsed: '',
            solventName: '',
            solventQuantity: '',
            defaultRecovery: ''
          }

        }, {
          analyticalMethodId: 'ASDAWEI23344W22',
          reason: 'this is a reason',
          targetResidueType: 'api',
          lod: '22',
          lop: '11',
          methodUsed: '',
          tntcTftcReq: '',
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
      ]
    }

    this.columns = [
      {
        title: 'Analytical Method Id',
        dataIndex: 'analyticalMethodId',
        key: 'analyticalMethodId'
      }, {
        title: 'Reason',
        dataIndex: 'reason',
        key: 'reason'
      }, {
        title: 'TargetResidueType',
        dataIndex: 'targetResidueType',
        key: 'targetResidueType'
      },
      {
        title: 'Swab Smapling Solvent Name',
        dataIndex: 'swab.solventName',
        key: 'swab.solventName'
      },
      {
        title: 'Rinse Smapling Default recovery',
        dataIndex: 'rinse.defaultRecovery',
        key: 'rinse.defaultRecovery'
      },
       {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={() => this.editMethod(record)}><Icon type="edit"/></a>
            <Divider type="vertical"/>
            <a onClick={() => this.deleteMethod(record)}><Icon type="delete"/></a>
          </span>
        )
      }
    ];
  }
  editMethod(record) {
    this.setState({editRecord: record})
    history.push(`/edit/${this.state.analyticmethods.indexOf(record)}`);
  }
  deleteMethod(record) {
    let analyticmethods = this.state.analyticmethods
    _.remove(analyticmethods, (a) => a === record)
    this.setState({analyticmethods: analyticmethods})
  }
  handleSubmit(method, index) {
    let methods = this.state.analyticmethods;
    if (!index) {
      methods.push(method);
    } else {
      methods[index] = method;
    }
    this.setState({analyticmethods: methods});
    history.push('/');
  }


  render() {
    return (
      <div>
        <Router history={history}>
          <Layout>
            <Header style={{
              color: 'white'
            }}>
              <Icon type="radar-chart"/>&nbsp; Analytical Methods
            </Header>
            <Content style={{
              padding: '50px'
            }}>
              <Route
                path="/"
                exact
                component={() => (
                <div>
                  <div
                    style={{
                    padding: '0 0 20px 0',
                    textAlign: 'right'
                  }}>
                    <Link to="/new">
                      <Button type="primary">New
                        <Icon type="plus-circle"/>
                      </Button>
                    </Link>
                  </div>
                  <Table
                    style={{
                    background: 'white'
                  }}
                    columns={this.columns}
                    dataSource={this.state.analyticmethods}
                    pagination={false}/>
                </div>
              )}/>
              <Route
                path="/new/"
                component={() => <DataForm handleSubmit={(s) => this.handleSubmit(s)}/>}/>
              <Route
                path="/edit/:index"
                component={(props) => <DataForm
                data={this.state.analyticmethods[props.match.params.index]}
                id={props.match.params.index}
                handleSubmit={(s, index) => this.handleSubmit(s, index)}/>}/>
            </Content>
            <Footer style={{
              textAlign: 'right'
            }}></Footer>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App;