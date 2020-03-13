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

<!-- This plugin uses a component to house all the magic, so it's recommended to put this near the end of your Vue app (e.g.
bottom of your App.vue template)

```html
<div id="app">
  ...
  <x5-dialog></x5-dialog>
</div>
```

| Attribute |  Type  | Default | Description              |
| :-------- | :----: | :-----: | :----------------------- |
| zIndex    | Number |  `200`  | z-index style for plugin |

<br> -->

# Usage

## Template Modal - `<x5-modal>`

```html
<!-- ExampleModal.vue -->
<template>
  <x5-modal name="example">
    <p>Name is the only required property for the `x5-modal` component</p>
    <p>It must be unique for each modal!</p>
  <x5-modal>
</template>
```

## Including Modal

```html
<!-- Anywhere in your App -->
<div>
  ...
  <example-modal></example-modal>
</div>
```

```js
import ExampleModal from './ExampleModal.vue'

export default {
  components: {
    ExampleModal,
  },
}
```

## Opening / Closing Modal

### From Vue method

```js
export default {
  methods: {
    open() {
      this.$openModal('example')
    },
    close() {
      this.$closeModal('example')
    },
  },
}
```

### From inline function

```html
<template>
  <button @click="$openModal('example')">Open</button>
  <button @click="$closeModal('example')">Close</button>
</template>
```

### Manually

```html
<!-- Wherever the modal is -->
<template>
  ...
  <example-modal :open="isOpenBoolean"></example-modal>
</template>
```

## Modal Properties - `<x5-modal>`

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

## Additional Features

- Using `$openModal` returns a promise and is resolved with the customizable `okValue` or `cancelValue` props
- `$openModal` has a second prop for instance data which can be accessed from your component using a
  [slot property](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)
- `$closeModal()` [without a name] will close the active modal

<br>

---

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for the process for submitting pull requests.

## Authors

- [Keagan Chisnall](https://github.com/xon52)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
