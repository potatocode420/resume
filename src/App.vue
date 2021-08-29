<template>
<div class="container-resume">
  <Header />
  <Main />
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./views/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main
  },
};
</script>

<style>
:root {
  --fontsize: 1em;
  --title: 1.5em;
  --separator-border-size: 5px solid black;
  --theme: #ffc107;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: blanchedalmond;
}

.container-resume {
  height: 100vh;
  margin: 0 auto;
  padding: 10px;
  width: 60%;
  background-color: white;
  box-shadow: 4px 0 8px 4px black;
}

.line-separator {
  width:100%;
  background-color: black;
  padding:2px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/*REUSABLE CSS*/
.tab-title {
  font-size: var(--title);
  font-weight: 700;
}

.section {
  padding: 10px;
  border-bottom: var(--separator-border-size);
}

@media only screen and (max-width: 992px) {
  :root {
    --fontsize: 0.8em;
    --separator-border-size: 4px solid black;
  }
}

@media only screen and (max-width: 768px) {
	:root {
		font-size: 0.7em;
    --separator-border-size: 3px solid black;
	}

}

@media only screen and (max-width: 320px) {
	:root {
		font-size: 0.6em;
	}
}
@media only screen and (max-width: 600px) {
  .container-resume {
    width: 100%;
    min-width: 250px;
  }

  :root {
    --separator-border-size: 2px solid black;
  }
}
</style>
