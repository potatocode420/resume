<template>
  <div class="section">
    <span class="tab-title">KEY SKILLS</span>
    <ListSubHeading :items="data.keyskills" :childclass="'ms-3 list-item-styled'"/>
  </div>
</template>

<script>
import ListSubHeading from "./ListSubheading.vue"

export default {
  name: "KeySkills",
  components: {
    ListSubHeading
  },
  props: {
    data: [Array, Object],
  }
}
</script>