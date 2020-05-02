<template>
  <div>
    <p>
      The value sent to this modal was:
      <span class="boxed greyed">{{ data ? `${data} 😀` : 'Oh no, it was empty 😥' }}</span>
    </p>
    <ul>
      <li>
        This component receives data from the prop <code>data</code>, defined when the modal is opened:
        <code>$x5.openModal('interactive', [DATA])</code>.
      </li>
      <li>
        It also sets the modal options <code>onOK</code> and <code>onCancel</code>, linking them to its own methods to
        fire after each respective button is pressed.
      </li>
      <li>
        When you press ok, it also toggles the loading overlay using <code>$emit('setLoading', true)</code> to simulate
        processing a submission.
      </li>
      <li>
        By either setting the <code>cancelValue</code> or <code>okValue</code> options, you can resolve the modal with a
        result where it was opened using <code>$x5.openModal()</code> which is a promise.
      </li>
      <li>
        Alternatively, if you close the modal yourself (as this example does), you can give a value to resolve with from
        within the close call:<br /><code>$x5.closeModal('interactive', returnValue)</code>.
      </li>
    </ul>
    A return value to send back (optional):
    <input v-model="result" placeholder="Value to return" class="boxed" maxlength="20" />
  </div>
</template>

<script>
export default {
  name: 'InteractiveModal',
  props: ['data'],
  data: () => ({
    result: null
  }),
  methods: {
    close() {
      this.$x5.closeModal('interactive', this.result)
    },
    submit() {
      this.$emit('setLoading', true)
      setTimeout(() => {
        this.$emit('setLoading', false)
        this.close()
      }, 2000)
    }
  },
  created() {
    this.$emit('setModal', {
      buttons: 'OKCancel',
      title: 'Interactive Modal',
      onOK: this.submit,
      onCancel: this.close,
      keepOpen: true
    })
  }
}
</script>
