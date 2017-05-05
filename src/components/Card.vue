<template lang="pug">
  .card
    slot
</template>

<script>
  import GenericTemplate from './GenericTemplate'
  import Testchart from './Testchart'

  export default {
    components: { GenericTemplate, Testchart },
    name: 'card'
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .card {
    background-color: #fafafa;
    border-radius: 2px;
    box-shadow: 0 1px 2px 1px rgba(0,0,0,.12);
    box-sizing: border-box;
    padding: 16px;
    margin: 4px;

    @media only screen and (max-width: 900px) {
      width: calc(100% - 8px);
    }

    @media only screen and (min-width: 900px) {
      width: calc(50% - 8px);
    }

    @media only screen and (min-width: 1200px) {
      width: calc(33% - 8px);
    }

    @media only screen and (min-width: 1600px) {
      width: calc(20% - 8px);
    }
  }
</style>
