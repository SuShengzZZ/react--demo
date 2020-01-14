import React, { Component } from 'react'
import { Col, Typography, Icon } from 'antd';
const { Title } = Typography;

export default class CustomTabPaneMoudle extends Component {
    render() {
        return (
            <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                    <div className="icon">
                        <div className="garden" style={{background:this.props.background}}>
                            <Icon type={this.props.icon} style={{fontSize:'30px',color:'#fff'}}  />
                        </div>
                    </div>
                    <div className="content">
                        <span>{this.props.title}</span>
                        <Title level={3}>{this.props.money}<span style={{fontWeight:'100',fontSize:'16px'}}> {this.props.company}</span></Title>
                    </div>
                </div>
            </Col>
        )
    }
}
