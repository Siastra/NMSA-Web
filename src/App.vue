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
      router-link(to="/explorer" active-class="active")
        icon(name="calendar")
        span Explorer
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
        .icon
          icon(name="question-circle")
        .icon(onclick="var xhr = new XMLHttpRequest(); xhr.open('GET', 'http://localhost/api/shutdown')")
          icon(name="sign-out")
    router-view
</template>

<script>
  export default {
    name: 'app'
  }

  /* eslint-disable no-unused-vars */
  function shutdown () {
    console.log('Test')
  }
</script>

<style lang="scss">
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
      background-color: #e1e1e1;
      height: 1px;
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
