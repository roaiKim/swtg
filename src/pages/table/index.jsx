import React from "react";
import { View, Image } from "@tarojs/components";
import { showLoading } from "@core";
import { FixButton } from "@components";
import { autoShowLoading } from "@utils";
import { connect } from "react-redux";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    // console.log(actions);
  };

  render() {

    return (
      <View className="ro-module-wrap ro-user-module">
        和平鸽 
        <View>
          <Image className="text-img-bg" mode="widthFix" src={require("@img/place.png")} />
        </View>
        <FixButton type="primary" onClick={this.onClick}>
          刷新
        </FixButton>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: "aa",
    autoLoading: true
  };
};

export default connect(mapStateToProps)(Main);
