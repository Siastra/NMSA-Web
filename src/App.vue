<template lang="pug">
  #app
    #header
      span#title NmSA
      span#seperator
      span#subtitle Never miss School Again!
    #navbar
      router-link(to="/dashboard" active-class="active")
        icon(name="th")
        span Dashboard
      router-link(to="/ranking" active-class="active")
        icon(name="list-alt")
        span Ranking
      router-link(to="/monthOverview" active-class="active")
        icon(name="area-chart")
        span Month Overview
      .divider
      router-link(to="log" active-class="active")
        icon(name="book")
        span Log
      .right
        .icon(v-on:click="test()")
          icon(name="question-circle")
        .icon(v-on:click="shut()" onclick="req = new XMLHttpRequest(); req.open('GET', 'http://localhost/api/shutdown'); req.send( null );")
          icon(name="sign-out")
    router-view
    sweet-modal.sw-modal(ref="modal")
      documentation
    sweet-modal.sw-modal(ref="modal2" hide-close-button blocking)
      h1 You may close the window now!
</template>

<script>
  import { SweetModal } from 'sweet-modal-vue'
  import Documentation from './components/Documentation.vue'

  export default {
    name: 'app',
    components: { SweetModal, Documentation },
    methods: {
      test () {
        this.$refs.modal.open()
      },
      shut () {
        this.$refs.modal2.open()
      }
    }
  }

  /* eslint-disable no-unused-vars */
  function shutdown () {
    console.log('Test')
  }
</script>

<style lang="scss">
  #app > div.sw-modal.sweet-modal-overlay.sweet-modal-clickable.is-visible > div {
    max-width: 100vw!important;
    max-height: 80vh;
  }

  #app {
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #navbar {
    background-color: #eeeeee;
    border-right: 1px solid #e1e1e1;
    display: inline-block;
    height: calc(100vh - 64px);
    width: 169px;

    .active {
      background-color: #e1e1e1;
      font-weight: 700;
      color: #1287ba
    }

    a {
      align-items: center;
      color: #222;
      display: flex;
      font-style: normal;
      font-size: 15px;
      line-height: 24px;
      padding: 8px 0 8px 16px;
      text-decoration: none;
      svg {
        margin-right: 8px;
      }
    }

    .divider {
      background-color: #aaa;
      height: .5px;
      width: 100%;
    }

    .right {
      position: absolute;
      right: 0;
      top: 0;

      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 56px;
        width: 56px;
        background-color: #175582;
        margin: 4px;
        color: white;
        transition: background-color 0.5s ease;

        &:hover {
          background-color: #F76C5E;
        }

        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  #header {
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #c4c9d8;
    box-shadow: inset 0 2px 1px #fff,0 1px 2px #d9dce6;
    box-sizing: border-box;
    color: #175582;
    display: inline-flex;
    font-size: 24px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 24px;
    padding-left: 20px;
    height: 64px;
    width: 100vw;

    #title {
      font-weight: bold;
    }

    #seperator {
      background-color: #cedae3;
      border-radius: 50%;
      margin: 0 6px;
      height: 32px;
      width: 1.5px;
    }

    #subtitle {
      font-weight: 100;
    }
  }
</style>
