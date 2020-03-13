<template>
  <x5-modal
    name="interactive"
    title="Interactive Modal"
    buttons="OKCancel"
    @ok="submit"
    @cancel="cancel"
    :loading="loading"
    keepOpen
  >
    <template v-slot="{ data }">
      <ul>
        <li>
          This component set methods for <code>@ok</code> and <code>@cancel</code> events $emitted from the
          &lt;x5-modal&gt; component.
        </li>
        <li>It also has the <code>loading</code> property set from outside and simulates processing a submission when you press OK.</li>
      </ul>
      <p>
        The value sent for this instance of the modal was:
        <span class="boxed greyed">{{ data ? `${data} 😀` : 'Oh no, it was empty 😥' }}</span>
      </p>
      Custom data sent to this modal:
      <input v-model="result" placeholder="Value to return" class="boxed" maxlength="20" />
    </template>
  </x5-modal>
</template>

<script>
export default {
  name: 'InteractiveModal',
  data: () => ({
    loading: false,
    result: null,
  }),
  methods: {
    close() {
      this.$closeModal('interactive', this.result)
    },
    cancel() {
      this.$emit('input', null)
      this.close()
    },
    async submit() {
      this.loading = true
      let wait = new Promise(resolve => setTimeout(() => resolve(), 2000))
      wait
        .then(() => this.$emit('input', this.result))
        .then(() => this.close())
        .finally(() => (this.loading = false))
    },
  },
}
</script>
