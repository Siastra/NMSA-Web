<template lang="pug">
  .content
    .common-navbar
      span {{ header }}
    slot(name="banner")
    .slot
      slot
</template>

<script>
  export default {
    name: 'generic-template',
    props: ['header']
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .content {
    height: calc(100vh - 64px);
    width: calc(100vw - 170px);
    overflow: scroll;
  }

  .slot {
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
  }

  .common-navbar {
    align-items: center;
    background-color: #fafafa;
    box-sizing: border-box;
    box-shadow: 0 2px 1px 0 rgba(0,0,0,.12);
    display: flex;
    flex-direction: row;
    font-size: 18.2px;
    font-family: 'Roboto', sans-serif;
    height: 64px;
    padding: 0 16px;
    margin-bottom: 2px;
  
    span {
      line-height: 20px;
    }
  }
</style>
