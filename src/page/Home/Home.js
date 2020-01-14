import React, { Component } from 'react'
import { Row, Col } from 'antd';
import ConsumerData from '../../components/ConsumerData/ConsumerData'
import CommonFunction from '../../components/CommonFunction/CommonFunction'
import CapitalcAdministration from '../../components/Capitalc/CapitalcAdministration'

export default class Home extends Component {
    render() {
        return (
           <div>
               <ConsumerData />
               <Row gutter={16}>
                    <Col span={6}>
                        <CommonFunction/>
                    </Col>
                    <Col span={18}>
                        <CapitalcAdministration/>
                    </Col>
                </Row>
           </div>
        )
    }
}
