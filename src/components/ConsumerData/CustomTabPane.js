import React, { Component } from 'react'
import { Row} from 'antd';
import CustomTabPaneMoudle from './CustomTabPaneMoudle'

export default class CustomTabPane extends Component {
    render() {
        return (
            <Row gutter={16}>
                {this.props.content.map((item,index) =><CustomTabPaneMoudle key={index} {...item} />)}
            </Row>
        )
    }
}
