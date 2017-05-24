<template lang="pug">
  generic-template(header="Dashboard")
    card3
      h2.head Timetable
      dropzone(id="hourTableDropzone" url="http://localhost/api/upload/timetable" paramName="uploaded_file" v-on:vdropzone-success="showSuccess")
    card3
      h2.head Absences
      dropzone(id="missings" url="http://localhost/api/upload/absences" paramName="uploaded_file" v-on:vdropzone-success="showSuccess")
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
