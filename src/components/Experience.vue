<template>
<div class="section">
  <span class="tab-title">WORK EXPERIENCE</span>

  <div v-for="d in data" :key="d">
    <ListSubHeading :subheading="d.workplace" />
    <ListSubHeading :subheading="d.position" class="ms-3"/>
    <ListSubHeading :subheading="d.timestamp" :groupchildclass="'list-group-nonheading'" class="ms-3" :items="d.actions" :childclass="'list-item-styled ms-3'" />
  </div>
</div>
</template>

<script>
import ListSubHeading from "./ListSubheading.vue"
export default {
  name: "Experience",
  components: {
    ListSubHeading
  },
  props: {
    data: [Array, Object]
  }
}
</script>

<style scoped>
</style>
