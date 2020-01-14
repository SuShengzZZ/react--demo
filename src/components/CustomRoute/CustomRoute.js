import React, { Component } from 'react'
import { Route } from 'react-router-dom';

export default class CustomRoute extends Component {
    state = {
        routers:[]
    }
    componentDidMount() {
        this.initialArray(this.props.router)
    }
    initialArray = (router) =>{
        // 处理好的route数组setState给routers
        let RouterList = []
        this.setState({
            routers:this.routeList(router, RouterList)
        })
    }
    routeList = (list, RouterList) => {
        //循环遍历 push 给RouterList
        list.forEach((item)=>{
            RouterList.push(item)
            if(item.subs){
                this.existenceSubs(item.subs,RouterList)
            }
        })
        return RouterList
    }
    existenceSubs = (subs, RouterList) => {
        //判断有没有子数组 有的话重新遍历给RouterList
        this.routeList(subs, RouterList)
    }
    render() {
        const { routers } = this.state
        return (
            <div>
                { routers.map((item, index)=><Route key={index} path={item.path} component={item.componentName} exact={item.exact && true}/>) }
            </div>
        )
    }
}
