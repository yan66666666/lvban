<template>
	<div class="header">
		<div class="left">
			<input type="text" name="" id="" value="" placeholder="搜索目的地" />
		</div>
		<div class="right">
			<img src="../../assets/攻略-消息.png"/>
			<div class="xiaoxi">
				12
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
.header{
	display: flex;
	align-items: center;
	margin-top:0.4rem ;
	.left{
		padding: 0 0.3rem;
		width: 85%;
		
		input{
			border: none;
			background: #f0f0f0 url(../../assets/灰色搜索.png) no-repeat 0.15rem 0.05rem;
			background-size:0.23rem ;
			border-radius: 0.32rem ;
			height: 0.35rem;
			width: 100%;
			padding-left: 0.5rem;
			line-height: 0.35rem;
		}
	}
	.right{
		position: relative;
		
		img{
			width: 52%;
		}
		.xiaoxi{
			position: absolute;
			top: -0.05rem;
			right: 0.1rem;
			font-size: 0.08rem;
			background: #fd2333;
			padding: 0 0.02rem;
			border: 0.02rem solid #fff;
			color: #fff;
			border-radius:47% ;
		}
	}
}

</style>