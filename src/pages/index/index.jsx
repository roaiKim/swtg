import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
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
      <View className="index">
        <Text>上维天宫</Text>
        <Text>满足你的生活乐趣</Text>
        <Button onClick={this.onClick}>跳转</Button>
      </View>
    );
  }
}
