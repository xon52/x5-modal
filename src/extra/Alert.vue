<template>
  <div class="x5-m-extra">
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: 'x5-modal-alert',
  props: { data: { type: String, required: true } },
  created() {
    this.$emit('setModal', {
      buttons: 'OK',
      width: '450px',
      permanent: true
    })
  }
}
</script>
