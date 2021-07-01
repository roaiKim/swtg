import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtIcon }  from 'taro-ui'
import React  from 'react'
import './index.less'

class navbar extends React.PureComponent {

  constructor(props){
    super(props)
    this.state={
      navBarHeight:0,
    }
  }

  componentWillMount () { 
    this.getNavHeight()
  }

  getNavHeight(){
    let menuButtonObject = Taro.getMenuButtonBoundingClientRect();
    console.log('wx.getMenuButtonBoundingClientRect()',menuButtonObject)
    var sysinfo = Taro.getSystemInfoSync();
    console.log('wx.getSystemInfoSync()',sysinfo)
    let statusBarHeight = sysinfo.statusBarHeight;
    let menuBottonHeight =  menuButtonObject.height;
    let menuBottonTop =  menuButtonObject.top;
    let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2 ; 
    this.setState({
      navBarHeight,
    })
  }

  goBackPage(){
    Taro.navigateBack({
      delta: 1
    })
  }

  render () {
    let { needBackIcon=true, mainTitle='' } = this.props
    return (
      <View className="nav-custom-bar" style={{height: `${this.state.navBarHeight}px`}}>
       <AtIcon className={`nav-custom-bar-back ${needBackIcon?'':'hidden'}`} value="chevron-left" size="22" color="#fff" onClick={()=>{this.goBackPage()}}></AtIcon>
       <Text className="nav-custom-bar-title">{mainTitle}</Text>
       <View></View>
      </View>
    )
  }
}
export default navbar;