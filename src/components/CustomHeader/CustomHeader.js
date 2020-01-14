import React, { Component } from 'react'
import { Avatar, Row, Col, Icon, Dropdown, Menu, Input, Badge } from 'antd'

const { Search } = Input;
const menu = (<Menu style={{textAlign:'center'}}>
    <Menu.Item>
        <Icon type="user" />
        <span>个人中心</span>
    </Menu.Item>
    <Menu.Item>
        <Icon type="lock" />
        <span>修改密码</span>
    </Menu.Item>
    <Menu.Item>
        <Icon type="rollback" />
        <span>退出登录</span>
    </Menu.Item>
</Menu>)


export default class CustomHeader extends Component {
    render() {
        return (
            <Row>
                <Col span={3} style={{padding: '0 16px'}}>
                    <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: '100%' , }}
                    />
                </Col>
                <Col span={5} offset={16}  style={{padding: '0 16px'}}>
                    
                    <div className="User">
                        <div className="U_notice">
                            <Badge dot>
                                <Icon type="bell" style={{fontSize:18}} />
                            </Badge>
                        </div>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <div className="U_setting">
                                <div className="S_image">
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                </div>
                                <div className="S_info">
                                   <h2 style={{lineHeight:'15px',fontSize:'15px',marginBottom:0}}>admin</h2>
                                   <p style={{lineHeight:'15px',fontSize:'12px',marginBottom:0}}>17704301395</p>
                                </div>
                                <div className="S_menu">
                                    <Icon type="caret-down" />
                                </div>
                            </div>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        )
    }
}
