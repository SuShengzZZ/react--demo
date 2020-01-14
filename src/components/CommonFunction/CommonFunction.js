import React, { Component } from 'react'
import { Divider,Statistic, Row, Col, Icon  } from 'antd'
export default class CommonFunction extends Component {
    render() {
        return (
            <div>
                <Row span={12}>
                    <Divider orientation="left">今日消费总额</Divider>
                    <div style={{margin:'30px 0'}}>
                        <Row>
                            <Col span={15}>
                                <Statistic title="Amount Income (CNY)" value={1802} precision={2} />
                            </Col>
                            <Col span={9}>
                                <Statistic
                                    title="Increase"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<Icon type="arrow-up" />}
                                    suffix="%"
                                />
                            </Col>
                        </Row>
                    </div>
                </Row>
                <Row span={12}>
                    <Divider orientation="left">今日充值总额</Divider>
                    <div style={{margin:'30px 0'}}>
                    <Row>
                        <Col span={15}>
                            <Statistic title="Total Recharge (CNY)" value={3586} precision={2} />
                        </Col>
                        <Col span={9}>
                        <Statistic
                            title="Idle"
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<Icon type="arrow-down" />}
                            suffix="%"
                        />
                        </Col>
                    </Row>
                    </div>
                    
                </Row>
                
                
            </div>
        )
    }
}
