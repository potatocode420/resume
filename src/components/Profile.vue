<template>
<div class="section">
  <span class="tab-title">ABOUT ME</span>
  <ListSubHeading :items="data.description"/>
</div>


<KeySkills :data="data" />
<IndustrySkills :data="data" />
<Education :data="data" />
</template>

<script>
import ListSubHeading from "./ListSubheading.vue"
import KeySkills from "./KeySkills.vue"
import IndustrySkills from "./IndustrySkills.vue"
import Education from "./Education.vue"

export default {
  name: "Profile",
  components: {
    ListSubHeading,
    KeySkills,
    IndustrySkills,
    Education
  },
  props: {
    data: [Array, Object],
  }
}
</script>

<style scoped>
.profile-section {
  padding: 10px;
  border-bottom: var(--separator-border-size);
}
</style>
