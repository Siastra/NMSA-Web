<template lang="pug">
  .card
    slot
</template>

<script>
  export default {
    name: 'card2'
  }
</script>

<style scoped lang="scss">
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
      width: calc(100% - 8px);
    }

    @media only screen and (min-width: 1200px) {
      width: calc(100% - 8px);
    }

    @media only screen and (min-width: 1600px) {
      width: calc(70% - 8px);
    }
  }
</style>
