<template>
  <div class="header">
		<div class="imageholder holder">
      <img src="@/assets/images/profile_picture.jpg" />
    </div>
    <div class="infoholder holder">
      <div class="infoholder-name">
        <h1>Marc Chai</h1>
      </div>
      <div class="infoholder-details">
        <span v-for="c in contact" :key="c" class="infoholder-details-item">
					<span v-if="c.type=='link'">
						<a :href="c.info" target="_blank">{{c.info}}</a>
					</span>
					<span v-else-if="c.type==='email'">
						<a :href="'mailto:'+c.info" target="_blank">{{c.info}}</a>
					</span>
					<span v-else>
						{{c.info}}
					</span>
				</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios/ajaxcalls"

export default {
  name: "Header",
	data() {
		return {
			contact: []
		}
	},
	methods: {
	},
	async created() {
		this.contact = await axios.getMyContact()
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
	box-sizing: border-box;
	display: flex;
	border-bottom: var(--separator-border-size);
}

.imageholder {
  width: 30%;
}

.imageholder img {
  width: 100%;
}

.imageholder, .infoholder {
	padding: 10px 0;
}

.infoholder {
  width: 70%;
	padding: 10px;
}

.infoholder-name {
	vertical-align: top;
	padding: 10px;
}

.infoholder h1 {
	display: inline;
	font-weight: 700;
	font-size: 4em;
}

.infoholder-details {
	padding: 10px;
	font-size: var(--fontsize);
	width:70%;
	color: var(--theme);
}

.infoholder-details a {
	text-decoration: none;
	color: #ffc107;
	display: inline;
}

.infoholder-details-item::after {
	content: "| ";
	color: black;
	font-size: 1em;
	font-weight: 700;
}

@media only screen and (max-width: 992px) {
	.infoholder h1 {
		font-size: 3em;
	}

	.imageholder {
		width: 50%;
	}
}

@media only screen and (max-width: 768px) {
	.infoholder h1 {
		font-size: 2em;
	}
}

@media only screen and (max-width: 600px) {
}

@media only screen and (max-width: 320px) {
	.infoholder h1 {
		font-size:1em;
	}
}
</style>
