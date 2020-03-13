<template>
  <div class="wrapper">
    <img class="logo" src="./x5-m-logo.png" width="300" />
    <h1 class="title">x5-Modal Example</h1>
    <button class="button" @click="plain">Plain</button>
    <button class="button" @click="noButtons">No Buttons</button>
    <button class="button" @click="full">Full</button>
    <hr />
    <!-- Output -->
    <p>You can also customise modals from the open call itself:</p>
    <input v-model="returnData" placeholder="Something to send" class="boxed" maxlength="20" />
    <button class="button" @click="interactive">Interactive</button>
    <p>
      And it returned:
      <span class="boxed greyed">{{ interactiveOutput ? `${interactiveOutput} 😀` : 'Nothing returned 😥' }}</span>
    </p>
    <!-- Modals -->
    <plain-modal></plain-modal>
    <no-buttons-modal></no-buttons-modal>
    <full-modal></full-modal>
    <interactive-modal></interactive-modal>
  </div>
</template>

<script>
import PlainModal from './PlainModal'
import NoButtonsModal from './NoButtonsModal'
import FullModal from './FullModal'
import InteractiveModal from './InteractiveModal'

export default {
  name: 'Example-App',
  components: { PlainModal, NoButtonsModal, FullModal, InteractiveModal },
  data: () => ({
    interactiveOutput: null,
    returnData: null,
  }),
  methods: {
    plain() {
      this.$openModal('plain')
    },
    noButtons() {
      this.$openModal('noButtons')
    },
    full() {
      this.$openModal('full')
    },
    interactive() {
      this.$openModal('interactive', this.returnData).then(val => {
        this.interactiveOutput = val
      })
    },
  },
}
</script>

<style>
.wrapper {
  text-align: center;
}
.boxed {
  padding: 10px;
  border: 1px #999 solid;
}
.greyed {
  background: #eee;
}
hr {
  max-width: 300px;
  margin: 40px auto;
}
code {
  background: #0801;
  color: green;
  font-size: 1.2em;
  padding: 3px;
}
button {
  padding: 10px 20px;
  min-width: 100px;
}
p {
  line-height: 1.5em;
}
ul {
  padding-left: 20px;
  margin-bottom: 40px;
}
li {
  margin-bottom: 10px;
}
code {
  background: #0801;
  color: green;
  font-size: 1.2em;
  padding: 3px;
}
a {
  background: #0081;
  color: #008a;
  font-size: 1.2em;
  padding: 3px;
  cursor: pointer;
}
</style>
