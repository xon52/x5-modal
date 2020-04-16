<template>
  <div class="wrapper">
    <img class="logo" src="./img/logo.svg" width="300" />
    <h1 class="title">x5-Modal Example</h1>
    <button class="button" @click="$x5.openModal('plain')">Plain</button>
    <button class="button" @click="$x5.openModal('noButtons')">No Buttons</button>
    <button class="button" @click="$x5.openModal('double')">Double</button>
    <button class="button" @click="$x5.openModal('full')">Full</button>
    <hr />
    <!-- Output -->
    <p>You can also customise modals from the open call itself:</p>
    <input v-model="dataIn" placeholder="Something to send" class="boxed" maxlength="20" />
    <button class="button" @click="interactive">Interactive</button>
    <p>
      And it returned:
      <span class="boxed greyed">{{ dataOut ? `${dataOut} 😀` : 'Nothing returned 😥' }}</span>
    </p>
    <hr />
    <!-- Routes -->
    <p>We also disable back buttons when a modal is opened.</p>
    <p>Not ideal, but without it the modal persists even when the route changes.</p>
    <router-view></router-view>
    <!-- Modals -->
    <x5-modals></x5-modals>
  </div>
</template>

<script>
import PlainModal from './PlainModal'
import NoButtonsModal from './NoButtonsModal'
import DoubleModal from './DoubleModal'
import FullModal from './FullModal'
import InteractiveModal from './InteractiveModal'
import RouteModal from './RouteModal'

export default {
  name: 'Example-App',
  data: () => ({
    dataOut: null,
    dataIn: null
  }),
  methods: {
    interactive() {
      this.$x5.openModal('interactive', {}, this.dataIn).then(val => {
        this.dataOut = val
      })
    }
  },
  created() {
    this.$x5.registerModal('full', FullModal)
    this.$x5.registerModal('plain', PlainModal)
    this.$x5.registerModal('double', DoubleModal)
    this.$x5.registerModal('noButtons', NoButtonsModal)
    this.$x5.registerModal('interactive', InteractiveModal)
    this.$x5.registerModal('route', RouteModal)
  }
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
