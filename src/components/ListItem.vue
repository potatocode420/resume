<template>
  <li class="list-item">{{listitem}}</li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    listitem: [String, Object],
    childclass: String
  },
  methods: {

  }
}
</script>

<style scoped>
li.list-item {
  font-weight: 500;
  font-size: var(--fontsize);
  list-style-position: inside;
}

.list-item-indented {
  margin-left: 10px;
}

.list-item-styled {
  list-style-type: disc;
}
</style>
