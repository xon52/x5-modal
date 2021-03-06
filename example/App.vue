<template>
  <div class="wrapper">
    <img src="./img/logo.svg" width="300" />
    <h1 class="title">x5-Modal Example</h1>
    <p><a href="https://github.com/xon52/x5-modal" target="_blank">https://github.com/xon52/x5-modal</a></p>
    <button class="button" @click="$x5.openModal('plain')">Plain</button>
    <button class="button" @click="$x5.openModal('noButtons')">No Buttons</button>
    <button class="button" @click="$x5.openModal('double')">Double</button>
    <button class="button" @click="$x5.openModal('full')">Full</button>
    <button class="button" @click="$x5.openModal('download')">Download</button>
    <button class="button" @click="$x5.openModal('timeout')">Download Timeout</button>
    <hr />
    <!-- Output -->
    <p>You can also customise modals from the open call itself:</p>
    <input v-model="dataIn" placeholder="Something to send" class="boxed" maxlength="20" />
    <button class="button" :disabled="!dataIn" @click="interactive">Interactive</button>
    <p v-if="dataOut">
      And it returned:
      <span class="boxed greyed">{{ dataOut ? `${dataOut} 😀` : 'Nothing returned 😥' }}</span>
    </p>
    <hr />
    <!-- Routes -->
    <p>If you use vue-router and change the route, it automatically closes any open modals.</p>
    <p>If you'd like to disable this function, use the <code>keepOpen</code> option.</p>
    <router-view></router-view>
    <hr />
    <!-- Extra Modals -->
    <h1 class="title">Extra Provided Modals</h1>
    <button class="button" @click="alert">Alert</button>
    <button class="button" @click="confirm">Confirm</button>
    <button class="button" @click="prompt">Prompt</button>
    <!-- Modals -->
    <x5-modals></x5-modals>
  </div>
</template>

<script>
import DoubleModal from './DoubleModal'
import FullModal from './FullModal'

export default {
  name: 'Example-App',
  data: () => ({
    dataOut: null,
    dataIn: null
  }),
  methods: {
    interactive() {
      this.$x5.openModal('interactive', this.dataIn).then(val => {
        this.dataOut = val
      })
    },
    alert() {
      this.$x5.alert('This is some alert text.', 'Alert Title')
    },
    confirm() {
      this.$x5
        .confirm('Are you sure you like this confirm box?', 'Confirm Box Title')
        .then(res => this.$x5.alert(`That returned ${res}`, 'Confirm Response'))
    },
    prompt() {
      this.$x5
        .prompt("What's your rating of this prompt?", 'Prompt Title')
        .then(res => this.$x5.alert(`That returned ${res}`, 'Prompt Response'))
    }
  },
  created() {
    // This shows the two different ways to register a component
    this.$x5.registerModal('full', FullModal)
    this.$x5.registerModal('double', DoubleModal)
    this.$x5.registerModal('plain', () => import('./PlainModal'))
    this.$x5.registerModal('interactive', () => import('./InteractiveModal'))
    this.$x5.registerModal('noButtons', () => import('./NoButtonsModal'))
    this.$x5.registerModal('route', () => import('./RouteModal'))
    this.$x5.registerModal(
      'download',
      () => new Promise(resolve => setTimeout(() => resolve(import('./PlainModal')), 3000))
    )
    this.$x5.registerModal(
      'timeout',
      () => new Promise(resolve => setTimeout(() => resolve(import('./PlainModal')), 6000))
    )
  }
}
</script>

<style>
.wrapper {
  text-align: center;
  margin-bottom: 100px;
}
.boxed {
  padding: 10px;
  border: 1px #999999 solid;
}
.greyed {
  background: #eeeeee;
}
hr {
  max-width: 300px;
  margin: 40px auto;
}
code {
  background: rgba(0, 136, 0, 0.07);
  color: green;
  font-size: 1.1em;
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
a {
  background: rgba(0, 0, 136, 0.1);
  color: rgba(0, 0, 136, 0.7);
  font-size: 1.2em;
  padding: 3px;
  cursor: pointer;
}
</style>
