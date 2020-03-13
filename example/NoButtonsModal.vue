<template>
  <x5-modal name="noButtons" buttons="" permanent>
    <template v-slot="{ close }">
      <h1>No Buttons Modal</h1>
      <p>But if there are no buttons? How do we close this??</p>
      <p>
        The modal can close itself by calling <code>this.$closeModal('noButtons')</code> from a method or even
        <code>@click="$closeModal('noButtons')"</code> straight from the button.
      </p>
      <p>
        It can also close itself without a name <code>$closeModal()</code> which is fine as long as you don't have
        another modal above it.
      </p>
      <p>
        And finally, the component offers the
        <a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots" target="_blank">slot property</a> of
        <code>close()</code> which can be called from the template, or the component can be given a $ref and be called
        from the &lt;script&gt; tag.
      </p>
      <button @click="close">Like so</button>
      <p>Phew!</p>
    </template>
  </x5-modal>
</template>

<script>
export default {
  name: 'PlainModal',
}
</script>
