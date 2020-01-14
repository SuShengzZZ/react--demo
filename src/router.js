
import Home from './page/Home/Home'
import DataCenter from './page/DataCenter/DataCenter'
import Antd from './page/Antd/Antd'
import ShoppingCart from './page/ShoppingCart/ShoppingCart'
import TrafficLights from './page/TrafficLights/TrafficLights'
import About from './page/About/About'

let router = [
    {
        path:'/',                              //url路径
        componentName:Home,                    //页面
        exact:true,                            //严格模式
        icon: 'home',                          //menu图标
        title:'首页'                        //menu名字
    },
    {
        path:'/router-params',
        componentName:DataCenter,
        icon: 'desktop',
        title:'数据中心'
    },
    {
        path:'/antd',
        componentName:Antd,
        icon: 'build',
        title:'Antd框架'
    },
    {
        path:'/second-route',
        title:'二级页面',
        icon: 'link',
        subs: [                                 //二级页面
            {
                path: '/second-route/traffic-lights', 
                title: '红绿灯', 
                icon: '',
                componentName:TrafficLights,
                subs:[]                         //三级页面
            },
            {
                path: '/second-route/shop-cart',
                title: '购物车',
                icon: '',
                componentName:ShoppingCart,
            }
        ]
    },
    {
        path:'/about',
        componentName:About,
        icon: 'exclamation-circle',
        title:'关于'
    },

]

export default router