<template>
  <p class="alert">
    <span class="icon" v-html="$options.static.mdiAddCircle"></span>
    View up to date information on how Illinois is handling
    the Coronavirus Disease 2019 (COVID-19) from the
    <a
      href="http://coronavirus.illinois.gov"
      target="_blank"
      rel="noreferrer"
    >
      State of Illinois Coronavirus Response Site
      <span class="icon" v-html="$options.static.mdiLaunch"></span>
    </a>
  </p>
</template>

<script>
export default {
  static: {
    mdiAddCircle:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" width="16px" role="img" aria-hidden="true"><path fill="red" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>',
    mdiLaunch:
      '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>'
  }
};
</script>

<style scoped>
.alert {
  background-color: rgba(33, 150, 243, 0.12);
  color: #2196f3 !important;
  font-family: "Lato";
  padding: 1rem;
}

.alert .icon {
  display: inline-flex;
  vertical-align: middle;
}

.alert a {
  text-decoration: underline;
}
</style>