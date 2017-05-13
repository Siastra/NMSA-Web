<template lang="pug">
  generic-template(header="Dashboard")
    card3
      h2.head Timetable
      dropzone(id="hourTableDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess")
        input(type="hidden" name="token" value="xxx")
    card3
      h2.head Absences
      dropzone(id="missings" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess")
        input(type="hidden" name="token" value="xxx")
</template>

<script>
  import Card3 from './Card3'
  import Dropzone from 'vue2-dropzone'
  import GenericTemplate from './GenericTemplate'
  import Testchart from './Testchart'

  export default {
    components: { GenericTemplate, Card3, Testchart, Dropzone },
    name: 'dashboard',
    methods: {
      'showSuccess': function (file) {
        console.log('Datei erfolgreich hochgeladen')
      }
    }
  }
</script>

<style scoped lang="scss">
  .head {
    text-align: left;
    margin-top: 0;
  }
</style>
