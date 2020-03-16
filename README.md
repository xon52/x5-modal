# x5 Modal ([Live Demo](https://codesandbox.io/s/x5-modal-example-i3301?hidenavigation=1&view=preview))

![GitHub file size in bytes](https://img.shields.io/github/size/xon52/x5-modal/dist/index.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/x5-modal)

This is a lightweight modal management plugin for Vue.

:warning: This plugin is in development, so please let me know if you find any errors.

## Installation

```bash
# npm
npm install x5-modal
```

## Deployment

This plugin does require a [Vuex store](https://vuex.vuejs.org/) and can be installed like any Vue plugin in your entry
point:

```js
Vue.use(Vuex)
const store = new Vuex.Store()

import x5Modal from 'x5-modal'
Vue.use(x5Modal, store)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
})
```

This plugin uses a component to house all the magic, so it's recommended to put this near the end of your Vue app (e.g.
bottom of your App.vue template)

```html
<div id="app">
  ...
  <x5-modals></x5-modals>
</div>
```

| Attribute |  Type  | Default | Description              |
| :-------- | :----: | :-----: | :----------------------- |
| zIndex    | Number |  `200`  | z-index style for plugin |

<br>

# Usage

## Step 1: Create a modal component using the `<x5-modal>` wrapper

```html
<!-- ExampleModal.vue -->
<template>
  <x5-modal name="example">
    <p>Name is the only required property for the `x5-modal` component</p>
    <p>It must be unique for each modal!</p>
  <x5-modal>
</template>
```

## Step 2: Register the modal (anywhere before you need to open it)

:info: This does not need to be in the same component you're calling it from - it can be anywhere

```js
// Anywhere
import ExampleModal from './ExampleModal.vue'

export default {
  created() {
    this.$x5.registerModal('example', ExampleModal)
  },
}
```

## Step 3: Opening / Closing Modal

### From Vue method (from anywhere in your app)

:info: Note that `$x5.openModal()` returns a promise and is resolved with the customizable `okValue` or `cancelValue`
props.

```js
// Anywhere
export default {
  methods: {
    open() {
      this.$x5.openModal('example')
    },
    close() {
      this.$x5.closeModal('example')
    },
  },
}
```

### From inline function (from anywhere in your app)

```html
<!-- Anywhere -->
<template>
  <button @click="$x5.openModal('example')">Open</button>
  <button @click="$x5.closeModal('example')">Close</button>
</template>
```

## Modal Component and Instance Properties

These settings can be called as props to the `<x5-modal>` wrapper of your modal **AND** overridden as an options object
when the modal is opened:

```html
<!-- ExampleModal.vue -->
<template>
  <x5-modal name="example" buttons="Cancel" :loading="isLoading" width="300px">
    <p>An example.</p>
  <x5-modal>
</template>
```

```js
// Anywhere
export default {
  methods: {
    open() {
      this.$x5.openModal('example', { width: '450px', title: 'Example Modal' })
    },
  },
}
```

| Option      |  Type   | Default | Description                                                       |
| :---------- | :-----: | :-----: | :---------------------------------------------------------------- |
| buttons     | String  |  'OK'   | Buttons to show (`OK`, `OKCancel`, `Cancel`)                      |
| cancelText  | String  | Cancel  | Cancel button label                                               |
| cancelValue |   Any   | `false` | Promise return value on cancel                                    |
| keepOpen    | Boolean | `false` | Stops the modal closing on OK or Cancel (requires manual closing) |
| loading     | Boolean | `false` | Sets modal in loading state (stops interaction)                   |
| name        | String  |   --    | **Required** Unique name for this modal                           |
| okText      | String  |   OK    | OK button label                                                   |
| okValue     |   Any   | `true`  | Promise return value on OK                                        |
| open        | Boolean | `false` | Force manual state of open                                        |
| permanent   | Boolean | `false` | Only allow closing the window via provided buttons                |
| title       | String  |  null   | Modal header title (leave empty for no header)                    |
| valid       | Boolean | `true`  | OK (submit button) is enabled                                     |
| width       | Number  |  `500`  | Maximum window width                                              |

## Additional Features / Notes

- Using `$x5.openModal` returns a promise and is resolved with the customizable `okValue` or `cancelValue` props
- `$x5.closeModal()` [without a name] will close the active modal
- `$x5.closeModals()` will close all open modals without the `keepOpen` flag
- If using **vue-router**, changing the route will close all open modals without the `keepOpen` flag

### Data Prop

A third 'data' parameter in the `x5.openModal(name, options, data)` function. Anything set there will be accessible to
your modal component as a prop

```js
// Anywhere
export default {
  methods: {
    open() {
      this.$x5.openModal('example', {}, 'Any data')
    },
  },
}
```

```js
// ExampleModal.vue
// ...
export default {
  props: ['data'],
}
```

### Edit an open Modal

You can also edit the options and data of an open modal with `x5.editModal(name, options, data)`.

```js
// Anywhere
export default {
  methods: {
    loading() {
      this.$x5.editModal('example', { loading: true })
    },
  },
}
```

<br>

---

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for the process for submitting pull requests.

## Authors

- [Keagan Chisnall](https://github.com/xon52)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
