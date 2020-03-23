<template>
	<div class="login">
		<div class="toubu">
			<div class="left">
				<img src="../assets/关  闭.png"/>
			</div>
			<div class="right">
				<router-link to="/login" tag="span">
					登录
				</router-link>
			</div>
		</div>
		<h1>注册</h1>
		<div class="neirong">
			<div class="zhengzai">
				<div class="tu">
					<img src="../assets/login/zhanghao.png"/>
				</div>
				<input type="text" v-model="obj.tel" placeholder="手机号/邮箱" />
				<div class="yan">
					
				</div>
			</div>
			<div class="zhengzai">
				<div class="tu sj">
					<img src="../assets/login/sj.png"/>
				</div>
				<input type="text" v-model="inyzm" placeholder="请输入短信验证码"/>
				<button @click="hqyzm()" :disabled="jin">{{anniuwen}}</button>
			</div>
			<div class="zhengzai">
				<div class="tu">
					<img src="../assets/login/mima.png"/>
				</div>
				<input :type="flag?'text':'password'" v-model="obj.pwd" placeholder="请输入登录密码"/>
				<div class="yan" @click="qiehuan()">
					<img src="../assets/login/yincang.png"/>
				</div>
			</div>
			<div class="gao">
			</div>
			<my-button @sub="sub()">注册</my-button>
			<div class="xieyi">
				<p>注册视为同意 <span>旅伴服务条款</span></p>
			</div>
		</div>
		<div class="yanzhengma" :class="xs">
			<div>
				<div class="">
					
				</div>
				<p>【旅伴】验证码：{{yzm}}，60秒内输入有效，请立即登录</p>
				<div class="hf">
					<span>回复</span>
					<span>标记已读</span>
					<span>复制验证码</span>
				</div>
			</div>
			<div class="anniu">
				<span><img src="../assets/分享.png"/></span>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			obj:{
				tel:"",
				pwd:""
			},
			flag:false,
			yzm:"",
			inyzm:"",
			xs:"",
			anniuwen:"获取验证码",
			jin:false
		}
	},
	methods:{
		async sub(){
			let reg = /^1[3|4|5|7|8][0-9]{9}$/;
			let zheng = reg.test(this.obj.tel)
			let chongfu = await this.$http.get("/user?tel="+this.obj.tel)
			if(chongfu.data == "已经注册"){
				this.$toast("您已经注册过了，请登录")
				return false
			}
			if(zheng){
				if(this.yzm!=""){
					if(this.yzm == this.inyzm){
						let pwdreg = /(\w|\-){6,16}/.test(this.obj.pwd)
						if(pwdreg){
							let res = await this.$http.post("/user",this.obj)
							if(res){
								this.$toast("注册成功")
								this.$router.push("/login")
							}else{
								this.$toast("注册失败")
							}
							
						}else{
							this.$toast("密码为6-16位字符")
						}
						
					}else{
						this.$toast("验证码错误")
					}
				}else{
					this.$toast("请输入验证码")
				}
			}else{
				this.$toast("请输入正确的手机号")
			}
		},
		qiehuan(){
			this.flag = !this.flag
		},
		hqyzm(){
			let reg = /^1[3|4|5|7|8][0-9]{9}$/;
			let zheng = reg.test(this.obj.tel)
			if(!zheng){
				this.$toast("请输入正确的手机号")
				return false
			}
			let ran = Math.round(Math.random()*10000)
			if(ran.toString().length<4){
				ran=Math.round(Math.random()*10000)
			}
			console.log(ran)
			this.yzm = ran
			this.xs = "xs"
			this.jin = true
			let i = 60
			this.anniuwen = i
			clearInterval(timer)
			let timer = setInterval(()=>{
				i--;
				this.anniuwen = i
				if(i==0){
					this.anniuwen = "重新获取"
					this.jin = false
					this.xs = ""
					this.yzm = ""
					clearInterval(timer)
				}
			},1000)
			
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
			padding-right: 0;
			margin-bottom: 0.1rem;
			border-bottom: 1px solid #8C939D;
			.tu{
				width: 0.24rem;
			}
			.sj{
				width: 0.28rem;
			}
			input{
				border: none;
				margin-left: 0.2rem;
				height: 0.4rem;
				width: 100%;
				font-size: 0.14rem;
			}
			.yan{
				width: 0.2rem;
				margin: 0.1rem;
			}
			button{
				color: #fff;
				font-size: 0.12rem;
				width: 1.4rem;
				height: 0.3rem;
				background: #636363;
				border: 1px solid #3f3f3f;
				border-radius:0.04rem ;
			}
		}
		
	}
	.gao{
		height: 0.15rem;
	}
	.xieyi{
		font-size: 0.14rem;
		margin-top: 0.1rem;
		span{
			text-decoration: underline;
		}
	}
	.yanzhengma{
		display: flex;
		background: #fff;
		border: 1px solid #efefef;
		position: absolute;
		top: 0.2rem;
		width: 95%;
		padding: 0.1rem;
		margin: 0.1rem;
		display: none;
		.hf{
			display: flex;
			text-align: center;
			span{
				margin-top: 0.1rem;
				padding: 0 0.08rem;
				color: #42B983;
			}
		}
		.anniu{
			width: 1.2rem;
			text-align: center;
			span{
				margin: 0 auto;
				width: 0.3rem;
				line-height: 0.8rem;
				display: block;
			}
		}
	}
	.xs{display: flex;}
}
</style>