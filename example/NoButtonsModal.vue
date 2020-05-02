<template>
  <div>
    <p>But if there are no buttons? How do we close this??</p>
    <p>
      The modal can close itself by calling <code>this.$x5.closeModal('noButtons')</code> from a method or even
      <code>@click="$x5.closeModal('noButtons')"</code> straight from the button.
    </p>
    <p>
      It can also close itself without a name <code>$x5.closeModal()</code> which is fine as long as you don't have
      another modal above it.
    </p>
    <button @click="$x5.closeModal()">Like so</button>
    <p>Phew!</p>
  </div>
</template>

<script>
export default {
  name: 'NoButtonsModal',
  created() {
    this.$emit('setModal', { permanent: true, title: 'No Buttons Modal', buttons: '' })
  }
}
</script>
