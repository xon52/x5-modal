<template>
  <transition name="x5-m-fade" tag="div">
    <div v-show="modals.length > 0" class="x5-m-wrapper" :style="`z-index:${zIndex}`">
      <!-- Loading Overlay -->
      <transition name="x5-m-fade" tag="div">
        <div v-show="loading" class="x5-m-loading" :style="`z-index:${modals.length}`">
          <div class="x5-m-spinner"></div>
        </div>
      </transition>
      <!-- Overlay -->
      <transition name="x5-m-fade" tag="div">
        <div
          v-show="!loading"
          class="x5-m-overlay"
          @click.self="onOverlay"
          :style="`z-index:${modals.length - 1}`"
        ></div>
      </transition>
      <!-- Modals -->
      <x5-modal v-for="(m, i) in modals" :key="m.name" :ref="m.name" :modal="m" :style="`z-index:${i}`" />
    </div>
  </transition>
</template>

<script>
import x5Modal from './Modal'

export default {
  name: 'x5-M-Component',
  components: { x5Modal },
  props: { zIndex: { type: [String, Number], default: 200 } },
  computed: {
    loading: vm => vm.$store.getters['x5/m/loading'],
    modals: vm => vm.$store.getters['x5/m/allOpen']
  },
  methods: {
    onOverlay() {
      const active = this.$store.getters['x5/m/active']
      if (active) this.$refs[active][0].onOverlay()
    }
  }
}
</script>
