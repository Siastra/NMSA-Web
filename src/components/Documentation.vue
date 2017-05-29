<template lang="pug">
  .doc
    h1
      a#User_Manual_0
      | User Manual
    h2
      a#Uploading_new_Files_1
      | Uploading new Files
    ol
      li Navigate to the Dashboard using the Buttons on the left side of the screen.
      li Click the “Drop files here to Upload” Button
      li Choose the desired File
      li Wait for the files to upload
    h2
      a#View_Ranking_7
      | View Ranking
    ol
      li
        | Upload the necessary files using the dashboard - consult “Uploading new files” for further assistance
      li Navigate to the “Ranking” Menu using the Buttons on the left side of the screen
    h2
      a#View_a_certain_Student_11
      | View a certain Student
    ol
      li
        | Upload the necessary files using the dashboard - consult “Uploading new files” for further assistance
      li Navigate to the “Ranking” Menu using the Buttons on the left side of the screen
      li Click on the desired Student
    h2
      a#View_the_Month_Overview_16
      | View the Month Overview
    ol
      li
        ol(start='2')
          li
            | Navigate to the “Month Overview” Menu using the Buttons on the left side of the screen
</template>

<script>
  export default {
    name: 'documentation'
  }
</script>

<style scoped lang="scss">
  .doc {
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(80vh - 124px);
  }

  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .air-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .air-h1,
  h2,
  .air-h2,
  h3,
  .air-h3,
  h4,
  .air-h4 {
    margin: 1.414rem 0 .5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .air-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2,
  .air-h2 {
    text-align: left;
    font-size: 2.827rem;
  }

  h3,
  .air-h3 {
    font-size: 1.999rem;
  }

  h4,
  .air-h4 {
    font-size: 1.414rem;
  }

  h5,
  .air-h5 {
    font-size: 1.121rem;
  }

  h6,
  .air-h6 {
    font-size: .88rem;
  }

  small,
  .air-small {
    font-size: .707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,300);

  .doc {
    color: #444;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-weight: 300;
  }

  img {
    border-radius: 50%;
    height: 200px;
    margin: 0 auto;
    width: 200px;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  pre {
    background-color: #fafafa;
    padding: 1rem;
    text-align: left;
  }

  blockquote {
    margin: 0;
    border-left: 5px solid #7a7a7a;
    font-style: italic;
    padding: 1.33em;
    text-align: left;
  }

  ul,
  ol,
  li {
    text-align: left;
  }

  p {
    color: #777;
  }
</style>
