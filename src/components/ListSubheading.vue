<!--CUSTOM CSS CLASSES  
list-item-styled - for ListItem component to add discs

list-group-nonheading - for ListSubHeading component to remove bold and lower font size


these custom css classes are passed as props from parent, and its effects are modified in the child components themselves
feel free to add in more custom css classes to manipulate the child components as you wish

NOTE: THIS REUSABLE COMPONENT ONLY WORKS IF THE DATA BEING PASSED IS AN ARRAY
take note that because i wanted to be complicated as fuck and have different styles of lists for EVERY part, the components may not be
be able to be reused optimally
-->
<template>
  <ul class="list-unstyled list-group">
    <li class="list-group-subheading" :class="groupchildclass">{{subheading}}</li>
    <div class="list-group-items" v-for="(item, index) in items" :key="index">
      <ListItem :listitem="item" :class="childclass" />
    </div>
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue"

export default {
  name: "ListSubHeading",
  components: {
    ListItem
  },
  props: {
    subheading: String,
    items: [Number, String, Array, Object],
    childclass: String,
    groupchildclass: String
  }
}
</script>

<style scoped>
li.list-group-subheading {
  font-weight: 700;
  font-size: 1em;
}

li.list-group-nonheading {
  font-weight: 500;
  font-size: 0.9em;
}
</style>
