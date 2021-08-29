<template>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" :style="{width: width + '%'}">{{strength}}</div>
</div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    width: Number
  },
  data() {
    return {
      
    }
  },
  methods: {
  },
  computed: {
    strength() {
      if (this.width > 80) {
        return "Very Strong"
      } else if (this.width > 60) {
        return "Strong"
      } else if (this.width > 40) {
        return "Decent"
      } else {
        return "Weak"
      }
    }
  }
}
</script>

<style scoped>
  @keyframes load-progress {
    0% { width: 0; }
  }
.progress-bar {
  animation: 0.8s load-progress;
}
</style>
