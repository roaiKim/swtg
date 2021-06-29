import { Lifecycle, Module, register, Loading } from "@core";
import { UserService } from "@api/UserService";

const initialState = {
  name: "我的主人",
  user: null
};

class UserModule extends Module {
  @Lifecycle()
  onRender() {
    this.check();
  }

  @Loading("auto")
  async check() {
    await UserService.check({}).then((response) => {
      const data = response.data;
      this.setState({user: data});
    }).catch((error) => {
      console.log("user error", error);
    });
  }

  reSet(name) {
    console.log("reSet reSet", name);
    this.setState({ name });
  }
}

const module = register(new UserModule("user", initialState));
const actions = module.getActions();

export { module, actions };
