<template>
  <div :style="`z-index:${zIndex}`">
    <transition-group name="x5-m-fade" mode="out-in" tag="div">
      <component v-for="m in modals" :key="m.name" :is="m.component" :data="m.data"></component>
    </transition-group>
  </div>
</template>

<script>
const buttonsOptions = ['OK', 'Cancel', 'OKCancel']

export default {
  name: 'x5-M-Component',
  props: {
    zIndex: { type: [String, Number], default: 200 },
  },
  computed: {
    modals() {
      return this.$store.getters['x5/m/allOpen']
    },
  },
  watch: {
    $route(to, from) {
      if (this.modals.length > 0) this.$x5.closeModals()
    },
  },
}
</script>
