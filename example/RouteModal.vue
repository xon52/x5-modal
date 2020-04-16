<template>
  <x5-modal name="route" buttons="" @cancel="$x5.closeModal()">
    <h1>Route Modal</h1>
    <p>
      If you press back without closing this, the modal is closed.
    </p>
    <hr />
    <p>
      Alternatively, if you enable <code>keepOpen</code> on the modal (i.e. you will handle the closing) then it will
      stay open even with a route change.
    </p>
    <input type="checkbox" id="checkbox" v-model="keepOpen" />
    <label for="checkbox">keepOpen</label>
    <hr />
    <p>
      This modal also uses the <code>$x5.editModal()</code> function to change the <code>keepOpen</code> flag of the
      modal for demonstration purposes.
    </p>
  </x5-modal>
</template>

<script>
export default {
  name: 'RouteModal',
  data: () => ({
    keepOpen: false
  }),
  watch: {
    keepOpen() {
      this.$x5.editModal('route', { keepOpen: this.keepOpen })
    }
  }
}
</script>
