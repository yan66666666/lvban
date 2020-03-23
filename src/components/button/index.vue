<template>
	<div class="btn">
		<button @click="$emit('sub')"><slot></slot></button>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
.btn{
	button{
		width: 100%;
		padding: 0.1rem;
		border-radius:0.04rem;
		font-size: 0.16rem;
		border: none;
		background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#ffd101), to(#f7b604));
	}
}
</style>