<template>
  <transition name="x5-m-fade" tag="div">
    <!-- Modal -->
    <div
      v-if="modalComponent"
      :class="`x5-m-modal ${this.attention ? 'x5-m-attention' : ''}`"
      :style="`width:${options.width}`"
    >
      <!-- Header -->
      <transition name="x5-m-expand">
        <div v-if="options.title" class="x5-m-header">
          <div class="x5-m-title" v-html="options.title"></div>
          <span v-if="!options.permanent" class="x5-m-close" @click.self="cancel">❌</span>
        </div>
      </transition>
      <!-- Content -->
      <div class="x5-m-content" :style="options.noPadding ? 'padding:0;' : ''">
        <component
          :is="modalComponent"
          :data="modal.data"
          @setModal="setModal"
          @editModal="editModal"
          @setLoading="setLoading"
        />
      </div>
      <!-- Footer -->
      <transition name="x5-m-expand">
        <div v-if="options.buttons" class="x5-m-footer">
          <button v-if="showOK" class="x5-m-ok" :disabled="!options.valid" @click="ok">
            {{ options.okText }}
          </button>
          <button v-if="showCancel" @click="cancel">{{ _cancelText }}</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
// const buttonsOptions = ['ok', 'cancel', 'okcancel']
const defaultOptions = {
  buttons: 'ok',
  cancelText: 'Cancel',
  cancelValue: false,
  keepOpen: false,
  loading: false,
  noPadding: false,
  okText: 'OK',
  okValue: true,
  onCancel: () => {},
  onClose: () => {},
  onOK: () => {},
  permanent: false,
  title: null,
  valid: true,
  width: '650px'
}

import ModalError from './Error.vue'

export default {
  name: 'x5-m-modal',
  components: { ModalError },
  props: { modal: { type: Object, required: true } },
  data: () => ({
    attention: false,
    setOptions: {},
    editOptions: {},
    modalComponent: null
  }),
  computed: {
    options: vm => ({ ...defaultOptions, ...vm.setOptions, ...vm.modal.options, ...vm.editOptions }),
    _cancelText: vm =>
      vm.options.buttons === 'Cancel' && vm.options.cancelText === 'Cancel' ? 'Close' : vm.options.cancelText,
    showCancel: vm => vm.options.buttons.toLowerCase().includes('cancel'),
    showOK: vm => vm.options.buttons.toLowerCase().includes('ok'),
    isActive: vm => vm.$store.getters['x5/m/active'] === vm.modal.name
  },
  methods: {
    setModal(options) {
      this.setOptions = { ...options }
    },
    editModal(options) {
      this.editOptions = { ...this.editOptions, ...options }
    },
    setLoading(val) {
      if (val) this.$store.dispatch('x5/m/loading', this.modal.name)
      else this.$store.dispatch('x5/m/loaded', this.modal.name)
    },
    async close(val) {
      const proceed = await this.options.onClose(val)
      if (proceed !== false) this.$x5.closeModal(this.modal.name, val)
    },
    async cancel() {
      const proceed = await this.options.onCancel(this.cancelValue)
      if (proceed !== false && !this.options.keepOpen) this.close(this.options.cancelValue)
    },
    async ok() {
      const proceed = await this.options.onOK(this.modal.okValue)
      if (proceed !== false && !this.options.keepOpen) this.close(this.options.okValue)
    },
    denyClose() {
      this.attention = true
      setTimeout(() => (this.attention = false), 150)
    },
    onOverlay() {
      if (this.isActive && !this.options.permanent) this.cancel()
      else this.denyClose()
    },
    loadComponent() {
      const timeout = new Promise((resolve, reject) =>
        setTimeout(() => reject('Modal content took too long to load.'), 5000)
      )
      const getComponent = new Promise(resolve => {
        if (typeof this.modal.component === 'object') resolve(this.modal.component)
        else this.modal.component().then(c => resolve(c.default))
      })
      Promise.race([timeout, getComponent])
        .then(c => (this.modalComponent = c))
        .catch(() => (this.modalComponent = ModalError))
        .finally(() => this.$store.dispatch('x5/m/loaded', `${this.modal.name}-component`))
    }
  },
  watch: {
    $route() {
      if (!this.options.keepOpen) this.$x5.closeModal(this.modal.name)
    }
  },
  mounted() {
    this.loadComponent()
  },
  beforeDestroy() {
    this.setLoading(false)
    if (this.isActive) this.$x5.closeModal(this.modal.name)
  }
}
</script>
