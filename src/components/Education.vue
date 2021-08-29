<template>
<div class="section">
  <span class="tab-title">EDUCATION</span>
  <ul v-for="(d, index) in data.education" :key="index" class="list-unstyled">
    <li class="fw-bold list-">{{d.name}}</li>
    <li>{{d.graduation}}</li>
    <li v-show="d.CGPA != null">CGPA: {{d.CGPA}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Education",
  props: {
    data: [Object, Array]
  }
}
</script>


<style scoped>
</style>
