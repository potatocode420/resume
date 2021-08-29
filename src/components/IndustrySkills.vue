<template>
<div class="section">
  <span class="tab-title">INDUSTRY SKILLS</span>
  <ul class="list-unstyled list-group">
    <li><ListSubHeading :subheading="'LANGUAGES'" />
      <ul v-for="(d, index) in data.industryskills.languages" :key="index" class="fw-normal">
        <li>
          {{d.Language}}
          <ProgressBar :width="strength(d.Strength)" />
        </li>
      </ul>
    </li>
    <li class="list-group-subheading fw-bold">Frameworks
      <ul v-for="(d, index) in data.industryskills.Frameworks" :key="index" class="fw-normal">
        <li>
          {{d.Framework}}
          <ProgressBar :width="strength(d.Strength)" />
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>
import ListSubHeading from "./ListSubheading.vue"
import ProgressBar from "./ProgressBar.vue"

export default {
  name: "IndustrySkills",
  components: {
    ListSubHeading,
    ProgressBar
  },
  props: {
    data: [Array, Object],
  },
  methods: {
    strength(score) {
      return (score.split("/")[0] / score.split("/")[1]) * 100
    }
  }
}
</script>