import React, { Component } from 'react'
import { Layout } from 'antd';
import router from '../../router'
import CustomMenu from "../CustomMenu/CustomMenu";
import CustomBreadcrumb from '../CustomBreadcrumb/CustomBreadcrumb'
import CustomRoute from '../CustomRoute/CustomRoute'
import CustomHeader from '../CustomHeader/CustomHeader'
import 'antd/dist/antd.css';
import './index.scss'
import LogoUrl from '../../assets/images/logo.png'

const { Header, Content, Footer, Sider } = Layout;

export default class OverallLayout extends Component {
    diaoyong = () =>{
        window.api.execScript({
            name: 'root',
            script: "connectionType()"
        })
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <div className="logo" onClick={()=>{this.diaoyong()}}>
                        <img src={LogoUrl} alt=""/>
                    </div>
                    <CustomMenu menus={router}/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <CustomHeader/>
                    </Header>
                    <Content style={{ margin: '0 16px', }} >
                        <CustomBreadcrumb breadcrumb={router}/>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <CustomRoute router={router}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
