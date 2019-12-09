import { createApp } from "./vue.esm-browser";

const Example = {
  template: `
  See? No root
  <li>Flex Item 1</li>
  <li>Flex Item 2</li>
  there is also &lt;Fragment&gt; Component
  `
};

const App = {
  components: {
    Example
  },

  template: `
    <h1>Vue 3 - Fragment Example</h1>
    <Example />
  `
};

createApp().mount(App, "#app");
