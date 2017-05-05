<template lang="pug">
  generic-template(header="404 Not found")
    p Error
</template>

<script>
  import GenericTemplate from './GenericTemplate'

  export default {
    components: { GenericTemplate },
    name: 'notfound'
  }
</script>

<style scoped lang="scss">

</style>
