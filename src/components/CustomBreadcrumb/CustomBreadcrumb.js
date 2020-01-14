import React, { Component } from 'react'
import { Breadcrumb, Button } from 'antd'
import { withRouter } from 'react-router-dom'
class CustomBreadcrumb extends Component {
    state = {
        extraBreadcrumbItems : null
    }
    componentDidMount() {
        this.getPath(this.props.location.pathname,this.props.breadcrumb)                                                                                               
    }
    labelQuery = (parent,child) => {
        return parent.filter( (value) => value.path === child)[0]
    }
    componentWillReceiveProps(nextProps) {
        this.getPath(nextProps.location.pathname,nextProps.breadcrumb)
    }
    getPath = (pathname, breadcrumb) =>{
        const rank = pathname.split('/')
        const addDivision = pathname.substr(0, pathname.lastIndexOf('/'))
        let parentLabel = this.labelQuery(breadcrumb,addDivision)
        switch (rank.length) {
          case 2 :  //一级目录
            this.setState({
                extraBreadcrumbItems:[this.labelQuery(breadcrumb,pathname).title]
            })
            break;
        //   case 5 : //三级目录，要展开两个subMenu
        //     console.log(rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/'))
        //     break;
          default :
            const childLabel = this.labelQuery(parentLabel.subs,pathname)
            this.setState({extraBreadcrumbItems: [parentLabel.title,childLabel.title]})
        } 
    }
    render() {
        const {extraBreadcrumbItems} = this.state
        return (
            <Breadcrumb style={{ margin: '16px 0' }} separator='>'>
                {extraBreadcrumbItems && extraBreadcrumbItems.map((item,index)=><Breadcrumb.Item key={index}><Button type="primary">{item}</Button></Breadcrumb.Item>)}
            </Breadcrumb>
        )
    }
}

export default withRouter(CustomBreadcrumb)