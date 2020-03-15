<template>
  <x5-modal
    :loading="loading"
    :valid="checked"
    buttons="OKCancel"
    cancelText="Don't Send"
    name="full"
    okText="Send"
    permanent
    title="Kitchen Sink"
    width="800px"
    z-index="10"
  >
    <p>Hokay so, what does this one have?</p>
    <ul>
      <li>A <code>title</code> of "Kitchen Sink" that gives us the header bar</li>
      <li>It's <code>permanent</code>/persistant (try close it without the buttons)</li>
      <li>Being permanent/persistant also removes the close button ↗</li>
      <li>Set <code>max</code>-width of "800px" (default is "650px")</li>
      <li><code>OKCancel</code> buttons (OK and Cancel)</li>
      <li><code>okText</code> of "Send" and <code>cancelText</code> of "Don't Send"</li>
      <li>
        Can open other modals from an inline click command <code>@click="$x5.openModal('plain')"</code>
        <a @click="$x5.openModal('plain')">here</a><br />
      </li>
      <li>The <code>zIndex</code> is set to "10" so it remains below the opened modal (default zIndex of "200")</li>
      <li>All modals have a <code>loading</code> attribute: <a @click="load">Try it</a></li>
      <li>To enable the OK (Send) button the <code>valid</code> attribute needs to be TRUE (check the checkbox)</li>
    </ul>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Validation: {{ checked ? 'Now' : 'Not' }} ready to send</label>
  </x5-modal></template
>

<script>
export default {
  name: 'FullModal',
  data: () => ({
    loading: false,
    checked: false,
  }),
  methods: {
    load() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
