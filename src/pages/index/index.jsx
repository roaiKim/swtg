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
          <Image className="text-img-bg" mode="aspectFit" src={require("@img/home.png")} />
          <View className="ro-text">
            <Text>上维天宫</Text>
            <Text>满足你的生活乐趣</Text>
          </View>
        </View>
        <Text>应用</Text>
        <View>
          <View>
            <View>
            <Image className="item-img" src={require("@img/drift_bottle.png")} />
            </View>
            <View></View>
          </View>
          <View></View>
          <View></View>
          <View></View>
        </View>
        <Button onClick={this.onClick}>跳转</Button>
      </View>
    );
  }
}
