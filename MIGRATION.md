# Migration from x5-modal v0.2/0.3 to v0.4+

The major change objective of v0.4 was to support async components showing a loading spinner while they are fetched from a server if necessary. It was realised early on that this was not possible using the previous way of handling modals. While conducting the changes required to support this, a few other improvements were noticed and it was decided that if we're doing a breaking change, we may as well make the most of it.

<br>

---

<br>

## New way to define a modal component

The biggest change has been to remove the `<x5-modal>` element (which was used to define props within your modal component).

Now you can register any component via `$x5.registerModal(name, component)` as a modal as long as you give it a unique name.

A name is no longer required in the modal component itself.

To still allow for you to still define modal options from within the modal component, you can use a setModal `$emit` on the `created()` hook. You can also use this `$emit` if you want to edit an open modal's options.

```js
// From within the component you want to use as a modal
created() {
  this.$emit('setModal', {
    buttons: 'cancel',
    permanent: true,
    title: 'Example'
  })
}
```

You can still define instance options when you open the modal (which take the highest priority):

```js
$x5.openModal('example', null, { title: 'Alternative Example' })
```

And you can still edit the instance options after it's been created:

```js
$x5.editModal('example', null, { title: 'Another Example' })
```

<br>

---

<br>

## Swapped Options and Data Order

Another minor (but breaking) change is the order of providing instance data to your modal, and setting instance options. Before, options came first, now data does.

```js
$x5.openModal(name, data, options)
$x5.editModal(name, data, options)
```

<br>

---

<br>

## Changed `@ok` & `@cancel` events to `onOK` & `onCancel` options

Using the modal element before, you could attach to the events `@ok` & `@cancel`. Now these are options which can be assigned functions to call.

```js
  methods: {
    close() { /* ... */ },
    submit() { /* ... */ }
  },
  created() {
    this.$emit('setModal', {
      onOK: this.submit,
      onCancel: this.close,
    })
  }
```

<br>

---

<br>

## Removed loading modal option

Originally each modal had its own loading overlay. This has been removed in favour of a single overlay for all components.

Where before you could bind to the `:loading` option of a `<x5-modal>` element, now you can either make your own loading function for your component, or use the plugin's loading component via the command `$x5.loadModal(true)`. As expected `$x5.loadModal(false)` turns it off.

:warning: If you turn it on, you must turn it off when you are finished!

<br>

---

<br>

## Removed z-index modal option

Unfortunately, with these changes the individually defined modal z-index option had to be removed.

It may be replaced with an "order" option later to allow re-ordering of open modals - but that's for another day.

<br>

---

<br>

## Timeout

There is a timeout of 5 seconds for async components. After that time an error text will be placed in the modal instead.
