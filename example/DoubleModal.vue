<template>
  <button @click="$x5.openModal('double2')">Open Second Modal</button>
</template>

<script>
export default {
  name: 'DoubleModal',
  created() {
    this.$emit('setOptions', { title: 'Double Modal', buttons: 'cancel' })
  },
  mounted() {
    this.$x5.registerModal('double2', () => import('./DoubleModal2'))
  }
}
</script>
