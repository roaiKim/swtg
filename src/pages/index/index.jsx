import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onClick = () => {
    Taro.navigateTo({
      url: "/pages/user/index"
    });
  };

  render() {
    return (
      <View className="ro-index-component">
        <View className="ro-text-container">
          <Image className="text-img-bg" mode="widthFix" src={require("@img/home_bg.png")} />
          <View className="ro-text">
            <Text>上维天宫</Text>
            <Text>满足你的生活乐趣</Text>
          </View>
        </View>
        <Text>应用</Text>
        <View className="ro-application-container">
          {
            [1,2,3,4,5,6,7,8].map(item => (
              <View key={item} className="ro-application-item" onClick={this.onClick}>
                <View className="ro-application-text">
                  <View className="item-image">
                    <Image className="text-img-bg" mode="widthFix" src={require("@img/place.png")} />
                  </View>
                  <View>和平鸽</View>
                </View>
                <View className="item-text-description">在遥远的过去，鸽子曾被人们看成是爱情的使者，当然现在也是。</View>
              </View>
            ))
          }
        </View>
        {/* <Button onClick={this.onClick}>跳转</Button> */}
      </View>
    );
  }
}
