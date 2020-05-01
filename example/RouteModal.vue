<template>
  <div>
    <p>
      If you press back (change route) without closing this, the modal is automatically closed.
    </p>
    <p>
      Alternatively, if you enable <code>keepOpen</code> on the modal (i.e. you will handle the closing) then it will
      stay open even with a route change.
    </p>
    <label>
      <input type="checkbox" @change="keepOpen($event.target.checked)" />
      keepOpen
    </label>
  </div>
</template>

<script>
export default {
  name: 'RouteModal',
  methods: {
    keepOpen(val) {
      this.$emit('editOptions', { keepOpen: val })
    }
  },
  created() {
    this.$emit('setOptions', {
      title: 'Route Modal',
      buttons: '',
      onCancel: () => this.$x5.closeModal()
    })
  }
}
</script>
