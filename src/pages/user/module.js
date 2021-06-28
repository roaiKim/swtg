import { Lifecycle, Module, register } from "@core";

const initialState = {
  name: "test"
};

class UserModule extends Module {
  @Lifecycle()
  onRender() {
    console.log("user module action wawaw");
  }

  reSet(name) {
    console.log("reSet reSet", name);
    this.setState({ name });
  }
}

const module = register(new UserModule("user", initialState));
const actions = module.getActions();

export { module, actions };
