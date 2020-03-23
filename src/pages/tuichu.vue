<template>
	<div class="tuichu">
		<my-header2>
			<router-link slot="left" style="width: 0.25rem; display: block; margin: 0 auto;" to="/my" tag="span">
				<img src="../assets/返回.png"/>
			</router-link>
			设置
		</my-header2>
		<div class="liebiao">
			<div class="yi">
				账户与安全
			</div>
			<div class="yi">
				通用设置
			</div>
			<div class="yi">
				地区设置
			</div>
			<div class="yi">
				问题反馈
			</div>
			<div class="yi">
				关于我们
			</div>
		</div>
		<div class="di">
			<button @click="tuichu()">退出登录</button>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex"
export default{
	computed:{
		...mapState(["tel"])
	},
	methods:{
		tuichu(){
			this.$store.commit("changeUser","")
			this.$toast("退出成功")
			this.$router.push("/")
		}
	}
}
</script>

<style scoped lang="less">
.tuichu{
	min-height: 6.67rem;
	background: #F8F9FB;
	.liebiao{
		margin-top:0.1rem;
		.yi{
			line-height: 0.4rem;
			padding: 0 0.2rem;
			background: #fff;
			border-bottom:1px solid #DEDEDE ;
		}
	}
	.di{
		margin-top:0.2rem;
		button{
			width: 100%;
			line-height: 0.4rem;
			background: #fff;
			border: none;
		}
	}
}
</style>