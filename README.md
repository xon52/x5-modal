# x5 Modal ([Live Demo](https://xon52.github.io/x5-modal))

![npm bundle size](https://img.shields.io/bundlephobia/minzip/x5-modal)

This is a lightweight modal management plugin for Vue.

:info: For updating from v0.2 to v0.3 please read [MIGRATION.md](./MIGRATION.md) for the process for submitting

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
  render: (h) => h(App),
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

:warning: This plugin is not transpiled! If you want to include it for use on IE or Edge, you need to add this to your `vue.config.js` file:

```js
module.exports = {
  transpileDependencies: ['x5-modal'],
}
```

<br>

# Usage

## Step 1: Pick a component to turn into a modal

## Step 2: Register the modal (anywhere before you need to open it)

You can pre-load the component and use that, or use code-splitting to import it only when it's needed:

```js
// Method 1
import ExampleModal from './ExampleModal.vue'

export default {
  created() {
    // Method 1 (pre-load it for when it's needed)
    this.$x5.registerModal('example', ExampleModal)
    // Method 2 (register an import function for when it's needed)
    this.$x5.registerModal('example', () => import('./CodeSplittingModal'))
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

## Modal Component and Instance Options

Options can be set within your component using `$emit('setOptions',{})`, and/or when the modal is opened using the 3rd function parameted.

```html
<!-- First method: ExampleModal.vue -->
<template>
  <p>An example.</p>
</template>

<script>
  export default {
    created() {
      this.$emit('setOptions', { title: 'Example Title' })
    },
  }
</script>
```

```js
// Second method: Anywhere
export default {
  methods: {
    open() {
      this.$x5.openModal('example', null, { title: 'Example Modal' })
    },
  },
}
```

| Option      |   Type   |  Default   | Description                                                       |
| :---------- | :------: | :--------: | :---------------------------------------------------------------- |
| buttons     |  String  |    'OK'    | Buttons to show (`ok`, `okcancel`, `cancel`)                      |
| cancelText  |  String  |   Cancel   | Cancel button label                                               |
| cancelValue |   Any    |  `false`   | Promise return value on cancel                                    |
| keepOpen    | Boolean  |  `false`   | Stops the modal closing on OK or Cancel (requires manual closing) |
| name        |  String  |     --     | **Required** Unique name for this modal                           |
| okText      |  String  |     OK     | OK button label                                                   |
| okValue     |   Any    |   `true`   | Promise return value on OK                                        |
| onCancel    | Function | `() => {}` | Function to be called when the cancel button is pressed           |
| onClose     | Function | `() => {}` | Function to be called when the modal is closed                    |
| onOK        | Function | `() => {}` | Function to be called when the ok button is pressed               |
| permanent   | Boolean  |  `false`   | Only allow closing the window via provided buttons                |
| title       |  String  |    null    | Modal header title (leave empty for no header)                    |
| valid       | Boolean  |   `true`   | OK (submit button) is enabled                                     |
| width       |  Number  |   `500`    | Maximum window width                                              |

## Additional Features / Notes

- If only using a cancel button, the `cancelText` will default to "Close" rather than "Cancel"
- Using `$x5.openModal` returns a promise and is resolved with the customizable `okValue` or `cancelValue` props
- `$x5.closeModal()` [without a name] will close the active modal
- `$x5.closeModals()` will close all open modals without the `keepOpen` flag
- If using **vue-router**, changing the route will close each open modal without the `keepOpen` flag

### Data Prop

Data can be passed to your modal when it is opened using the second parameter in the `x5.openModal(name, data, options)` method.

Anything set there will be accessible to your modal component via the prop `data`. This is not restricted to any type and can be anything.

```js
// Anywhere
export default {
  methods: {
    open() {
      this.$x5.openModal('example', 'Example data')
    },
  },
}
```

```html
<template>
  <p>{{ data }}</p>
</template>

<script>
  export default {
    props: ['data'],
  }
</script>
```

### Edit an open Modal

Similarly to the `setModal` event, you can also edit the options of an open modal using either `$emit('editModal', options)` from within the modal component, or from somewhere else using the 3rd parameter of the method `$x5.editModal(modalName, data, options)`.

Note: You can also change the data prop using `$x5.editModal(modalName, data, options)`.

```html
<!-- First method: ExampleModal.vue -->
<template>
  <button @click="changeTitle">An example.</button>
</template>

<script>
  export default {
    methods: {
      changeTitle() {
        this.$emit('editOptions', { title: 'Edited Title' })
      }
    }
    created() {
      this.$emit('setOptions', { title: 'Example Title' })
    },
  }
</script>
```

```js
// Anywhere
export default {
  methods: {
    loading() {
      this.$x5.editModal('example', { title: 'Edited Title' })
    },
  },
}
```

<br>

---

## Todo

- Find a solution to stopping background scrolling when modal is open
  - I have tried a multitude of CSS solutions and always find a trade off I decide is too costly
  - I think the [Body scroll lock](https://github.com/willmcpo/body-scroll-lock) package is on the right track with JS - but it's too big for this lightweight project

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for the process for submitting pull requests.

## Authors

- [Keagan Chisnall](https://github.com/xon52)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
