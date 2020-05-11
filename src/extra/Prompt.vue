<template>
  <div class="x5-m-extra">
    <p>{{ data }}</p>
    <input v-model="input" type="text" />
  </div>
</template>

<script>
export default {
  name: 'x5-modal-prompt',
  props: { data: { type: String, required: true } },
  data: () => ({
    input: null
  }),
  methods: {
    submit() {
      this.$emit('editModal', { okValue: this.input })
    }
  },
  created() {
    this.$emit('setModal', {
      buttons: 'OKCancel',
      width: '450px',
      onOK: this.submit,
      permanent: true
    })
  }
}
</script>
