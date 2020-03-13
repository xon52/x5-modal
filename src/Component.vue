<template>
  <transition v-if="isOpen" name="x5-m-fade" mode="out-in">
    <!-- Overlay -->
    <div
      :class="`x5-m-modal-wrapper ${isActive ? 'x5-m-overlay' : ''}`"
      :style="`z-index:${zIndex}`"
      @click.self="onOverlay"
    >
      <!-- Modal -->
      <div :class="`x5-m-modal ${this.attention ? 'x5-m-attention' : ''}`" :style="`max-width:${this.width}`">
        <!-- Header -->
        <div v-if="title" class="x5-m-header">
          <div v-html="title"></div>
          <span v-if="!permanent" class="x5-m-close" @click.self="cancel">❌</span>
        </div>
        <!-- Content -->
        <div class="x5-m-content">
          <!-- Slot -->
          <slot :close="close" :data="data"></slot>
        </div>
        <!-- Footer -->
        <div v-if="buttons" class="x5-m-footer">
          <button v-if="showCancel" @click="cancel" :disabled="loading">{{ _cancelText }}</button>
          <button v-if="showOK" class="x5-m-ok" :disabled="!valid || loading" @click="ok">
            {{ okText }}
          </button>
        </div>
        <!-- Loading Overlay -->
        <transition name="x5-m-fade">
          <div v-if="loading" class="x5-m-loading-wrapper" @click.self="denyClose">
            <div class="x5-m-loading">
              <div class="x5-m-spinner"></div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
const buttonsOptions = ['OK', 'Cancel', 'OKCancel']

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
    open: { type: Boolean, default: false },
    permanent: { type: Boolean, default: false },
    title: { type: String, default: null },
    valid: { type: Boolean, default: true },
    width: { type: String, default: '650px' },
    zIndex: { type: [String, Number], default: 200 },
  },
  data: () => ({
    attention: false,
  }),
  computed: {
    _cancelText() {
      if (this.cancelText) return this.cancelText
      if (this.buttons === 'Cancel') return 'Close'
      return 'Cancel'
    },
    data() {
      return this.modal ? this.modal.data : null
    },
    modal() {
      return this.$store.getters['x5/m/allOpen'].find(e => e.name === this.name)
    },
    showCancel() {
      return this.buttons.includes('Cancel')
    },
    showOK() {
      return this.buttons.includes('OK')
    },
    isActive() {
      return this.$store.getters['x5/m/active'] === this.name
    },
    isOpen() {
      if (this.open) return true
      return !!this.modal
    },
  },
  methods: {
    cancel() {
      this.$emit('cancel')
      if (!this.keepOpen) this.close(this.cancelValue)
    },
    close(val) {
      this.$closeModal(this.name, val)
    },
    denyClose() {
      this.attention = true
      setTimeout(() => (this.attention = false), 150)
    },
    onOverlay() {
      if (this.isActive && !this.loading && !this.permanent) this.cancel()
      else this.denyClose()
    },
    ok() {
      this.$emit('ok')
      if (!this.keepOpen) this.close(this.okValue)
    },
  },
  watch: {
    open(newVal, oldVal) {
      if (!newVal && oldVal) this.close()
    },
  },
  mounted() {
    if (this.open) this.$openModal(this.name)
    if (this.buttons && !buttonsOptions.includes(this.buttons))
      throw new Error(
        `Invalid buttons "${buttonsOptions}" used in x5Modal Plugin. Valid options include: ${buttonsOptions.join(
          ', ',
        )}.`,
      )
  },
  beforeDestroy() {
    if (this.isOpen) this.$closeModal(this.name)
  },
}
</script>
