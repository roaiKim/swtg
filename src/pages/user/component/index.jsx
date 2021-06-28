import React from "react";
import { Button, View } from "@tarojs/components";
import { connect } from "react-redux";
import { actions } from "../module";
import "./index.less";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    console.log(actions);
    this.props.dispatch(actions.reSet("roaikim"));
  };

  render() {
    const { userName } = this.props;
    return (
      <View className="ro-module-wrap ro-user-module">
        Hello {userName}
        <Button type="primary" onClick={this.onClick}>
          change
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.app.user.name
  };
};

export default connect(mapStateToProps)(Main);
