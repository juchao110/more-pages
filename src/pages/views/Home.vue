<template>
<div class="home">
	<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
	<HelloWorld msg="Welcome to Your Vue.js App" />
	<div>
		<p>vue-json-editor</p>
		<vue-json-editor v-model="json" :show-btns="true" :expandedOnStart="true" @json-change="onJsonChange"></vue-json-editor>
	</div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import vueJsonEditor from 'vue-json-editor'

export default {
	name: 'Home',
	components: {
		HelloWorld,
		vueJsonEditor
	},
	data() {
		return {
			json: {
				msg: 'demo of jsoneditor'
			}
		}
	},
	methods: {
		onJsonChange(value) {
			console.log('value:', value)
		}
	}
}
</script>
