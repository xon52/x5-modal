<template>
  <x5-modal name="double2" buttons="Cancel" permanent title="Double Modal the Second">
    <h1>Double Modal the Second</h1>
    <button @click="openFullModal">Open Full Modal</button>
  </x5-modal>
</template>

<script>
export default {
  name: 'DoubleModal2',
  methods: {
    openFullModal() {
      this.$x5.openModal('full', { }, 4)
    }
  },
}
</script>
