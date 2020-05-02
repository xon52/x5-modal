<template>
  <div>
    <p>Hokay so, what does this one have?</p>
    <ul>
      <li>A <code>title</code> of "Kitchen Sink" that gives us the header bar</li>
      <li>It's <code>permanent</code> (try close it without the buttons)</li>
      <li>Being <code>permanent</code> also removes the close button ↗</li>
      <li>Set <code>max-width</code> of "800px" (default is "650px")</li>
      <li><code>buttons</code> set to "OKCancel" (OK and Cancel)</li>
      <li><code>okText</code> set to "Send" and <code>cancelText</code> to "Don't Send"</li>
      <li>
        You can open other modals from an inline click command <code>@click="$x5.openModal('plain')"</code>
        <a @click="$x5.openModal('plain')">here</a>
      </li>
      <li>
        You can set the plugin to a loading mode via <code>$emit('setLoading', true)</code>: <a @click="load">Try it</a>
      </li>
      <li>To enable the OK (Send) button the <code>valid</code> attribute needs to be TRUE (check the checkbox)</li>
      <li>
        You can also change options on the fly using <code>$emit('editModal', {options})</code>
        <a @click="edit('title', 'Bathroom Sink')">like so</a>
      </li>
    </ul>
    <label>
      <input type="checkbox" id="checkbox" v-model="checked" @change="edit('valid', $event.target.checked)" />
      Validation: {{ checked ? 'R' : 'Not r' }}eady to send</label
    >
  </div>
</template>

<script>
export default {
  name: 'FullModal',
  data: () => ({
    checked: false
  }),
  methods: {
    load() {
      this.$emit('setLoading', true)
      setTimeout(() => this.$emit('setLoading', false), 2000)
    },
    edit(key, val) {
      const options = {}
      options[key] = val
      this.$emit('editModal', options)
    }
  },
  created() {
    this.$emit('setModal', {
      valid: false,
      buttons: 'OKCancel',
      cancelText: "Don't Send",
      okText: 'Send',
      permanent: true,
      title: 'Kitchen Sink',
      width: '800px'
    })
  }
}
</script>
