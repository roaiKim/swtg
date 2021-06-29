import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import "./index.less";


const application = [
  {
    id: 23,
    name: "和平鸽",
    img: "place",
    description: "在遥远的过去，鸽子曾被人们看成是爱情的使者，当然现在也是。"
  },
  {
    id: 24,
    name: "时间胶囊",
    img: "logo_big",
    description: "你有什么话想对未来的自己说的呢?"
  },
  {
    id: 25,
    name: "海王",
    img: "fish",
    description: "你想成为海王吗? 现在的你可还在新手村哦!"
  }
]

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
            application.map(item => (
              <View key={item.id} className="ro-application-item" onClick={this.onClick}>
                <View className="ro-application-text">
                  <View className="item-image">
                    <Image className="text-img-bg" mode="widthFix" src={require(`@img/${item.img}.png`)} />
                  </View>
                  <View>{item.name}</View>
                </View>
                <View className="item-text-description">{item.description}</View>
              </View>
            ))
          }
        </View>
        {/* <Button onClick={this.onClick}>跳转</Button> */}
      </View>
    );
  }
}
