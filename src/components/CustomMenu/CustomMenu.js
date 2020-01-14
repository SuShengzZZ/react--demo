import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'


class CustomMenu extends React.Component {
  state = {
    openKeys: [],
    selectedKeys: []
  }

  componentDidMount() {
    // 防止页面刷新侧边栏又初始化了
    this.menuSelect(this.props.location.pathname)
  }

  componentWillReceiveProps(nextProps) {
    //当点击面包屑导航时，侧边栏要同步响应
    //获取当前所在的目录层级
    const pathname = nextProps.location.pathname
    this.menuSelect(pathname)
    if (this.props.location.pathname !== pathname) {
      this.setState({
        selectedKeys: [pathname],
      })
    }
  }

  onOpenChange = (openKeys) => {
    //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单)
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      })
      return
    }

    //最新展开的菜单
    const latestOpenKey = openKeys[openKeys.length - 1]
    //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
    //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
    //只适用于3级菜单
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      })
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      })
    }
  }

  renderMenuItem = ({path, icon, title,}) => {
    return (
      <Menu.Item key={path}>
        <Link to={path}>
          {icon && <Icon type={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenu = ({path, icon, title, subs}) => {
    return (
      <Menu.SubMenu key={path} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
        {
          subs && subs.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }

  menuSelect = (pathname) =>{
    //获取当前所在的目录层级
    const rank = pathname.split('/')
    switch (rank.length) {
      case 2 :  //一级目录
        this.setState({
          selectedKeys: [pathname]
        })
        break;
    //   case 5 : //三级目录，要展开两个subMenu
    //     this.setState({
    //       selectedKeys: [pathname],
    //       openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
    //     })
    //     break;
      default :
        this.setState({
          selectedKeys: [pathname],
          openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
        })
    }
  }

  render() {
    const {openKeys, selectedKeys} = this.state
    return (
      <Menu
        onOpenChange={this.onOpenChange}
        onClick={({key}) => this.setState({selectedKeys: [key]})}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        theme={this.props.theme ? this.props.theme : 'dark'}
        mode='inline'
        >
        {
          this.props.menus && this.props.menus.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu>
    )
  }
}

export default withRouter(CustomMenu)