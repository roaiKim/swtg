import React from "react";
import { View, Image } from "@tarojs/components";
import { showLoading } from "@core";
import { FixButton } from "@components";
import { autoShowLoading } from "@utils";
import { connect } from "react-redux";
import { actions } from "../module";
import "./index.less";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    // console.log(actions);
    this.props.dispatch(actions.check());
  };

  render() {
    const { user, autoLoading } = this.props;
    autoShowLoading(autoLoading);

    return (
      <View className="ro-module-wrap ro-user-module">
        和平鸽 {user && user.name}
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
    user: state.app.user.user,
    autoLoading: showLoading(state, "auto")
  };
};

export default connect(mapStateToProps)(Main);
