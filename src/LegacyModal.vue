<template>
  <div>
    <h3 class="x5-modal-error">
      ⚠️ x5-modal Plugin Warning :: v0.4.0 has removed the &lt;x5-modal> wrapper. Please see
      <a href="https://github.com/xon52/x5-modal/blob/master/MIGRATION.md">here</a> for update instructions.
    </h3>
  </div>
</template>

<script>
export default {
  name: 'x5-m-legacy-modal',
  mounted() {
    /* eslint-disable no-console */
    console.warn(
      `x5-modal Plugin :: v0.4.0 has removed the <x5-modal> wrapper.
Please see https://github.com/xon52/x5-modal/blob/master/MIGRATION.md to update.`
    )
    /* eslint-enable no-console */
  }
}
</script>
