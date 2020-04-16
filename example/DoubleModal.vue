<template>
  <x5-modal name="double" buttons="Cancel" permanent title="Double Modal">
    <h1>Double Modal</h1>
    <button @click="openModal2">Open Second Modal</button>
  </x5-modal>
</template>

<script>
import DoubleModal2 from './DoubleModal2'

export default {
  name: 'DoubleModal',
  methods: {
    openModal2() {
      this.$x5.openModal('double2')
    }
  },
  mounted() {
    this.$x5.registerModal('double2', DoubleModal2)
  }
}
</script>
