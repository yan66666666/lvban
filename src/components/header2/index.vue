<template>
	<header class="header1">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<h2>
			<slot></slot>
		</h2>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script>

</script>

<style lang="less" scoped>
.header1{
	background: #fff;
	height: 0.5rem;
	display: flex;
	align-items: center;
	text-align: center;
	color: #000;
	img{
		width: 40%;
	}
	.left{
		width: 0.6rem;
	}
	h2{
		flex: 1;
		font-weight: normal;
		font-size: 0.18rem;
	}
	.right{
		width: 0.7rem;
		
	}
	
}
</style>