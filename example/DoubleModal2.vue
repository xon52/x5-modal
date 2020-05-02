<template>
  <button @click="$x5.openModal('full')">Open Full Modal</button>
</template>

<script>
export default {
  name: 'DoubleModal2',
  created() {
    this.$emit('setModal', { title: 'Double Modal the Second', buttons: 'cancel' })
  }
}
</script>
