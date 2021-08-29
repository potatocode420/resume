<template>
  <div class="sidebar-wrapper">
    <nav id="sidebar">
      <ul class="list-unstyled components">
        <li class="text-uppercase" v-for="(tab, index) in tabs" :key="index" @click="switchContent(tab)" :class="{highlight: highlightTab === tab}">
          {{tab}}
        </li>
      </ul>
    </nav>

    <div id="content">
      <div class="admin mr-0">
        <keep-alive>
        <component :is="currentTab" :data="data"/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios/ajaxcalls";
import Profile from "../components/Profile.vue"
import Experience from "../components/Experience.vue"
import Project from "../components/Project.vue"

export default {
  name: "Main",
  components: {
    "profile": Profile,
    "work experience": Experience,
    "projects": Project
  },
  data() {
    return {
      tabs: ["profile", "work experience", "projects"],
      highlightTab: 0,
      currentTab: 0,
      data: []
    };
  },
  methods: {
    async switchContent(index) {
      this.highlightTab = index
      if (index == "profile") {
        this.data = await axios.getMyProfile()
      } else if (index == "work experience") {
        this.data = await axios.getMyExperience()
      } else if (index == "projects") {
        this.data = await axios.getMyProject()
      }
      this.currentTab = index
    }
  },
  async created() {
    this.switchContent(this.tabs[0])
  },
};
</script>

<style scoped>
.sidebar-wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  transition: all 0.3s;
  width:30%;
}

#sidebar,
#sidebar a {
  color: black;
}

#sidebar ul.components {
  padding: 10px 0;
}

#sidebar ul li {
  font-weight: 700;
  font-size: 1em;
  margin-bottom: 1em;
  cursor: default;
  border-radius: 50px;
  text-align: center;
}

#content {
  width: 70%;
  transition: all 0.3s;
  padding: 10px 0;
  margin-left: 10px;
  max-height: 75vh;
  overflow: auto;
}

.highlight {
  background-color:var(--theme);
}

/*firefox scrollbar*/
#content {
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: var(--theme) rgba(0,0,0,0);   /* scroll thumb and track */
}


/*chrome, safari, edge scrollbar*/
#content::-webkit-scrollbar {
  width: 3px;               /* width of the entire scrollbar */
}

#content::-webkit-scrollbar-track {
  background: none;     /* color of the tracking area */
}

#content::-webkit-scrollbar-thumb {
  background-color: var(--theme);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}
</style>