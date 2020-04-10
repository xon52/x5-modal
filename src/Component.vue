<template>
  <div :style="`z-index:${zIndex}`">
    <transition-group name="x5-m-fade" mode="out-in" tag="div">
      <component v-for="m in modals" :key="m.name" :is="m.component" :data="m.data"></component>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'x5-M-Component',
  props: {
    zIndex: { type: [String, Number], default: 200 }
  },
  computed: {
    modals() {
      return this.$store.getters['x5/m/allOpen']
    }
  },
  watch: {
    // Stops scrolling in background while modal is open
    modals: newVal => {
      if (newVal.length > 0) document.body.classList.toggle('x5-m-no-scroll', true)
      else if (newVal.length < 1) document.body.classList.toggle('x5-m-no-scroll', false)
    }
  }
}
</script>
