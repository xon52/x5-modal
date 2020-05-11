<template>
  <div class="x5-m-extra">
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: 'x5-modal-confirm',
  props: { data: { type: String, required: true } },
  created() {
    this.$emit('setModal', {
      buttons: 'OKCancel',
      okText: 'Yes',
      cancelText: 'No',
      width: '450px',
      permanent: true
    })
  }
}
</script>
