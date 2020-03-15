<template>
  <!-- Overlay -->
  <div :class="`x5-m-wrapper ${isActive ? 'x5-m-overlay' : ''}`" @click.self="onOverlay">
    <!-- Modal -->
    <div :class="`x5-m-modal ${this.attention ? 'x5-m-attention' : ''}`" :style="`max-width:${options.width}`">
      <!-- Header -->
      <div v-if="options.title" class="x5-m-header">
        <div v-html="options.title"></div>
        <span v-if="!options.permanent" class="x5-m-close" @click.self="cancel">❌</span>
      </div>
      <!-- Content -->
      <div class="x5-m-content">
        <!-- Slot -->
        <slot></slot>
      </div>
      <!-- Footer -->
      <div v-if="options.buttons" class="x5-m-footer">
        <button v-if="showCancel" @click="cancel" :disabled="options.loading">{{ options.cancelText }}</button>
        <button v-if="showOK" class="x5-m-ok" :disabled="!options.valid || options.loading" @click="ok">
          {{ options.okText }}
        </button>
      </div>
      <!-- Loading Overlay -->
      <transition name="x5-m-fade">
        <div v-if="options.loading" class="x5-m-loading-wrapper" @click.self="denyClose">
          <div class="x5-m-loading">
            <div class="x5-m-spinner"></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const buttonsOptions = ['OK', 'Cancel', 'OKCancel']
const has = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)

export default {
  name: 'x5-M-Component',
  props: {
    buttons: { type: String, default: 'OK' },
    cancelText: { type: String, default: 'Cancel' },
    cancelValue: { default: false },
    keepOpen: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    name: { type: String, required: true },
    okText: { type: String, default: 'OK' },
    okValue: { default: true },
    permanent: { type: Boolean, default: false },
    title: { type: String, default: null },
    valid: { type: Boolean, default: true },
    width: { type: String, default: '650px' },
  },
  data: () => ({
    attention: false,
  }),
  computed: {
    modal() {
      return this.$store.getters['x5/m/allOpen'].find(e => e.name === this.name)
    },
    options() {
      if (!this.modal) return {}
      return { ...this.$props, ...this.modal.options }
    },
    showCancel() {
      return this.options.buttons.includes('Cancel')
    },
    showOK() {
      return this.options.buttons.includes('OK')
    },
    isActive() {
      return this.$store.getters['x5/m/active'] === this.name
    },
  },
  methods: {
    close(val) {
      this.$x5.closeModal(this.name, val)
    },
    cancel() {
      this.options.keepOpen ? this.$emit('cancel') : this.close(this.options.cancelValue)
    },
    denyClose() {
      this.attention = true
      setTimeout(() => (this.attention = false), 150)
    },
    onOverlay() {
      if (this.isActive && !this.options.loading && !this.options.permanent) this.cancel()
      else this.denyClose()
    },
    ok() {
      this.options.keepOpen ? this.$emit('ok') : this.close(this.options.okValue)
    },
  },
  mounted() {
    if (this.options.buttons && !buttonsOptions.includes(this.options.buttons))
      throw new Error(`Invalid buttons property '${buttonsOptions}' used in x5Modal Plugin.`)
  },
  beforeDestroy() {
    if (this.isActive) this.$x5.closeModal(this.name)
  },
}
</script>
