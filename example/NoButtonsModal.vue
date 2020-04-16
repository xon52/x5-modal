<template>
  <x5-modal name="noButtons" buttons="" permanent>
    <h1>No Buttons Modal</h1>
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
  </x5-modal>
</template>

<script>
export default {
  name: 'NoButtonsModal'
}
</script>
