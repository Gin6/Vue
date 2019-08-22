<template>
	<div>
		<p ref="p">{{msg}}</p>
		<button @click="changeColor()">改变颜色</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: '组件',
			}
		},
		methods: {
			changeColor () {
				this.$refs.p.style.color = '#DE3D3D'
			}
		}
	}
</script>

<style lang="scss" scoped>  /*scoped局部作用域*/
	div {
		width: 100%;
		height: 30px;
		border: 1px solid #eee;
		p {
			margin: 0px;
			padding: 5px;
		}
		button {
			margin-top: 5px;
		}
	}
</style>