<template>
<div class="section">
  <span class="tab-title">PROJECTS</span>
  <div v-for="d in data" :key="d">
    <ListSubHeading :subheading="projectheader(d.name,d.type)" :items="d.contributions" :childclass="'list-item-styled ms-3'"/>
  </div>
</div>
</template>

<script>
import ListSubHeading from "./ListSubheading.vue"
export default {
  name: "Project",
  data() {
    return {
    }
  },
  components: {
    ListSubHeading
  },
  props: {
    data: [Object, Array]
  },
  methods: {
    projectheader(name, type) {
      return name + " (" + type + ")";
    }
  }
}
</script>

<style scoped>
</style>
