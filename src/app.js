import { Component } from "react";
import { Provider } from "react-redux";
// import { ConnectedRouter } from "connected-react-router";
import { app } from "@core/app";
import "./app.less";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={app.store}>
        {/* <ConnectedRouter history={app.browserHistory}> */}
        {this.props.children}
        {/* </ConnectedRouter> */}
      </Provider>
    );
  }
}

export default App;
