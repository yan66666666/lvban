<template>
	<div class="login">
		<div class="toubu">
			<div class="left">
				<router-link to="/" tag="span">
					<img src="../assets/关  闭.png"/>
				</router-link>
			</div>
			<div class="right">
				<router-link to="/zhuce" tag="span">
				注册
				</router-link>
			</div>
		</div>
		<h1>登录</h1>
		<div class="neirong">
			<div class="zhengzai">
				<div class="tu">
					<img src="../assets/login/zhanghao.png"/>
				</div>
				<input type="text" v-model="tel" placeholder="手机号/邮箱" />
			</div>
			<div class="zhengzai">
				<div class="tu">
					<img src="../assets/login/mima.png"/>
				</div>
				<input :type="flag?'text':'password'" v-model="pwd" placeholder="请输入登录密码"/>
				<div class="yan" @click="qiehuan()">
					<img src="../assets/login/yincang.png"/>
				</div>
			</div>
			<p class="wangji">忘记密码</p>
			<my-button @sub="sub()">登录</my-button>
			<div class="disanfang">
				<div><img src="../assets/login/qq.png"/></div>
				<div><img src="../assets/login/wb.png"/></div>
				<div><img src="../assets/login/wx.png"/></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	data(){
		return {
			tel:"",
			pwd:"",
			flag:false,
		}
	},
	computed:{
		...mapState(["pas"])
	},
	methods:{
		qiehuan(){
			this.flag = !this.flag
		},
		async sub(){
			if(this.tel == "" && this.pwd == ""){
				this.$toast("请输入账号密码")
			}else{
				let reg = /^1[3|4|5|7|8][0-9]{9}$/;
				let zheng = reg.test(this.tel)
				if(zheng){
					let pwdreg = /(\w|\-){6,16}/.test(this.pwd)
					if(pwdreg){
						let login = await this.$http.get("/user?tel="+this.tel)
						if(login.data!="可以使用"){
							if(this.tel == login.data.tel && this.pwd == login.data.pwd){
								this.$toast("登录成功")
								this.$store.commit("changeUser",this.tel)
								this.$router.push(this.pas)
								this.$store.commit("changepas","/")
							}else{
								this.$toast("账号或者密码错误")
							}
							
						}else{
							this.$toast("请先注册")
						}
						
					}else{
						this.$toast("密码为6-16位字符")
					}
					
					
				}else{
					this.$toast("请输入有效的账号")
				}
				
			}
			
		}
	}
}
</script>

<style scoped lang="less">
.login{
	min-height: 8.1rem;
	background: url(../assets/login/login-bg.png) no-repeat;
	background-position-y: bottom;
	background-size:100% ;
	.toubu{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0.2rem;
		.left{
			width: 0.18rem;
		}
	}
	h1{
		padding: 0.15rem 0.3rem;
		font-weight: normal;
		font-size: 0.26rem;
	}
	.neirong{
		padding: 0.2rem 0.6rem;
		.zhengzai{
			display:flex;
			align-items: center;
			padding: 0 0.1rem;
			margin-bottom: 0.1rem;
			border-bottom: 1px solid #8C939D;
			.tu{
				width: 0.24rem;
			}
			input{
				border: none;
				margin-left: 0.2rem;
				height: 0.4rem;
				width: 100%;
				font-size: 0.14rem;
			}
			.yan{
				width: 0.18rem;
			}
		}
		
	}
	.wangji{
		text-align: right;
		font-size: 0.14rem;
		padding: 0.02rem;
		margin-bottom: 0.1rem;
	}
	.disanfang{
		margin: 0.1rem 0;
		display: flex;
		div{
			width: 0.18rem;
			margin-right: 0.3rem;
		}
	}
}
</style>