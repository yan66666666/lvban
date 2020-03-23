<template>
	<div class="footer">
		<router-link to="/" tag="div" :class="$route.path=='/' && active">
			<img src="../../assets/首页2.png" v-if="$route.path=='/'" />
			<img src="../../assets/首页1.png" v-else />
			<span>首页</span>
		</router-link>
		<router-link to="/gonglue" tag="div" :class="$route.path=='/gonglue' && active">
			<img src="../../assets/攻略2.png" v-if="$route.path=='/gonglue'" />
			<img src="../../assets/攻略1.png" v-else />
			<span>攻略</span>
		</router-link>
		<router-link to="/lvpai" tag="div" :class="$route.path=='/lvpai' && active">
			<img src="../../assets/社区1.png" style="opacity: 0;"/>
			<span>旅拍</span>
		</router-link>
		<router-link to="/shequ" tag="div" :class="$route.path=='/shequ' && active">
			<img src="../../assets/社区2.png" v-if="$route.path=='/shequ'"/>
			<img src="../../assets/社区1.png" v-else/>
			
			<span>社区 </span>
		</router-link>
		<router-link to="/my" tag="div" :class="$route.path=='/my' && active">
			<img src="../../assets/我的2.png" v-if="$route.path=='/my'"/>
			<img src="../../assets/我的1.png" v-else/>
			
			<span>我的</span>
		</router-link>
		<router-link to="/lvpai" tag="div" class="xiangji">
			<img src="../../assets/lvpai.png"/>
		</router-link>
	</div>
</template>

<script>
export default{
	data(){
		return {
			active:"active"
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.footer{
	display: flex;
	background: #fff;
	border-top:1px solid #cdcbcc ;
	padding: 0.1rem;
	position: fixed;
	bottom: 0;
	width: 100%;
	
	div{
		flex: 1;
		text-align: center;
		display: flex;
		flex-direction:  column;
		align-items: center;
		font-size: 0.1rem;
		
		img{
			width: auto;
			height: 0.2rem;
			margin-bottom: 0.05rem;
		}
		
	}
	.xiangji{
		
		position: absolute;
		left: calc(50% - 0.32rem);
		top: -46%;
		img{
			width: 0.64rem;
			height: auto;
		}
	}
}
.active{
	color: #ffbe00;
}
</style>