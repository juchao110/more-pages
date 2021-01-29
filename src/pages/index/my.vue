<template lang="html">
  <div class="">
    this is my page;
    <div>
  		<p>vue-json-editor</p>
  		<vue-json-editor v-model="json" :show-btns="true" :expandedOnStart="true" @json-change="onJsonChange"></vue-json-editor>
  	</div>
  </div>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'

export default {
	components: {
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

<style lang="css" scoped>
</style>
