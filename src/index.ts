import { createApp } from "./vue.esm-browser";

const Example = {
  template: `
    <div>
      Vue 3 components
    </div>
  `
};

const App = {
  components: {
    Example
  },

  template: `
    <h3>Vue 3</h3>
    <Example />
  `
};

createApp().mount(App, "#app");
