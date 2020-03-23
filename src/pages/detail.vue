<template>
	<div class="xiangqing">
		
		<div class="lunbo">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="(i,j) in JSON.parse(detail.pic)" :key="j">
			  	<img :src="i"/>
			  </mt-swipe-item>
			  
			</mt-swipe>
			<div class="dingwei">
				<div class="fanhui" @click="fanhui()">
					<img src="../assets/fanhui51.png"/>
				</div>
				<div class="fenxiang">
					<img src="../assets/fenxiang111.png"/>
				</div>
			</div>
		</div>
		<div class="yonghu">
			<div class="left" >
				<div class="tu" @click="tm(user.tel)">
					<img :src="user.userimg"/>
				</div>
				<div class="wen">
					<p>{{user.userName}}</p>
					<span>{{detail.relTime.substr(5,2)}}月{{detail.relTime.substr(8,2)}}日发布</span>
				</div>
			</div>
			<div class="right">
				<button>私信ta</button>
			</div>
		</div>
		<div class="didian">
			<div class="yi">
				<span><img src="../assets/位置粉色.png"/></span>
				<p>{{detail.chufa}} - {{detail.mudidi}}</p>
			</div>
			
			<p>时间：<em>{{detail.riqi}} - {{detail.riqi}}</em></p>
		</div>
		<div class="wenzi">
			<h1>{{detail.title}}</h1>
			<p>{{detail.content}}</p>
		</div>
		<div class="fx">
			<div>
				<img src="../assets/fen.png"/>
			</div>
			<div @click="shoucang()">
				<img src="../assets/shoucang-a.png" v-if="shou"/>
				<img src="../assets/shoucang.png" v-else/>
				<span>{{detail.receive.length}}</span>
			</div>
			<div @click="dianzan()">
				<img src="../assets/点赞图标.png" v-if="zan"/>
				<img src="../assets/dianzantubiao1.png" v-else/>
				<span>{{detail.like.length}}</span>
			</div>
		</div>
		<div class="baoming">
			<span>{{jieban.length}}人已报名</span>
			<div class="da">
				<div class="tx" v-for="i in jieban" @click="tm(i.tel)">
					<img :src="i.userimg"/>
					<div class="xingb">
						<img src="../assets/nan.png" v-if="i.sex=='男'"/>
						<img src="../assets/nv.png" v-else/>
					</div>
				</div>
				
			</div>
			<div class="pinglun">
				<h1>活动讨论<span>({{detail.comments.length}})</span></h1>
				<div class="kuang">
					<div class="biaoqing">
						<img src="../assets/表情.png"/>
					</div>
					<div class="shuru">
						<input type="text" v-model="pinglun" placeholder="写下你的评论吧~" />
					</div>
					<div class="fabu" @click="fabu()">
						<img src="../assets/发布.png"/>
					</div>
				</div>
			</div>
			<div class="pl">
				<div class="it" v-for="(p,l) in detail.comments">
					<div class="shangyh">
						<div class="yh">
							<div class="tu" @click="tm(p.tel)">
								<img :src="pldyh[l].userimg"/>
							</div>
							<div class="nam">
								<p>{{pldyh[l].userName}}</p>
								<span>{{p.time.substr(5,2)}}月{{p.time.substr(8,2)}}日评论   {{l+1}}楼</span>
							</div>
						</div>
						<div class="zan" @click="pldz(l)">
							<div class="azan">
								<img src="../assets/点赞图标.png" v-if="plzan[l]"/>
								<img src="../assets/dianzantubiao1.png" v-else/>
							</div>
							<p>{{p.like.length}}</p>
						</div>
					</div>
					<div class="xiapl">
						<p>{{p.pinglun}}</p>
					</div>
				</div>
				
			</div>
		</div>
		<div style="height: 0.5rem;"></div>
		<div class="di">
			<my-button @sub="jie()">我要结伴</my-button>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	data(){
		return {
			detail:{},
			user:{},
			shou:false,
			zan:false,
			pinglun:"",
			pldyh:[],
			plzan:[false],
			jieban:[]
		}
	},
	async created(){
		let withsdel = await this.$http.get("/withsdel?id="+this.$route.query.id)
		this.detail = withsdel.data
//		this.like = withsdel.data.like.length
//		this.receive = withsdel.data.receive.length
		for(let i=0;i<this.detail.comments.length;i++){
			let pluh = await this.$http.get("/user?tel="+this.detail.comments[i].tel)
			this.pldyh.push(pluh.data)
			
			if(this.detail.comments[i].like.indexOf(this.tel)!=-1){
				this.plzan[i] = true
			}else{
				this.plzan[i] = false
			}
			
		}
		for(let i=0;i<this.detail.register.length;i++){
			let bao = await this.$http.get("/user?tel="+this.detail.register[i])
			this.jieban.push(bao.data)
		}
		
		
		let userr = await this.$http.get("/user?tel="+withsdel.data.tel)
//		console.log(userr)
		this.user = userr.data
		if(this.detail.receive.indexOf(this.tel)!=-1){
			this.shou =true
		}
		if(this.detail.like.indexOf(this.tel)!=-1){
			this.zan =true
		}
		
	},
	computed:{
		...mapState(["tel","xiangqing"])
	},
	methods:{
		tm(tel){
			this.$store.commit("changepas","/detail?id="+this.detail._id)
			this.$router.push("/usermy?tel="+tel)
		},
		async shoucang(){
			if(this.tel){
				if(this.detail.receive.indexOf(this.tel)!=-1){
					return false
				}
				this.shou =true
				this.detail.receive.push(this.tel)
				
				let sc = await this.$http.put("/receive?id="+this.$route.query.id,this.detail.receive)
				console.log(sc)
				
			}else{
				this.$store.commit("changepas","/detail?id="+this.$route.query.id)
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		async dianzan(){
			if(this.tel){
				if(this.detail.like.indexOf(this.tel)!=-1){
					return false
				}
				this.zan =true
				this.detail.like.push(this.tel)
				
				let sc = await this.$http.put("/like?id="+this.$route.query.id,this.detail.like)
				console.log(sc)
				
				
			}else{
				this.$store.commit("changepas","/detail?id="+this.$route.query.id)
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		fanhui(){
			this.$router.push(this.xiangqing)
		},
		async fabu(){
			if(this.tel){
				if(this.pinglun==""){
					return false
				}
				let obj = {}
				obj.pinglun = this.pinglun
				obj.time = this.getDate()
	//			obj.pluserimg = this.user.userimg
	//			obj.plusername = this.user.userName
				obj.tel = this.tel
				obj.like = []
				console.log(obj)
				this.detail.comments.push(obj)
				let pl = await this.$http.put("/comments?id="+this.$route.query.id,this.detail.comments)
				console.log(pl)
				this.pinglun = ""
				let a = []
				for(let i=0;i<this.detail.comments.length;i++){
					let pluh = await this.$http.get("/user?tel="+this.detail.comments[i].tel)
					a.push(pluh.data)
					
					if(this.detail.comments[i].like.indexOf(this.tel)!=-1){
						this.plzan[i] = true
					}else{
						this.plzan[i] = false
					}
					
				}
				this.pldyh = a
				
			}else{
				this.$store.commit("changepas","/detail?id="+this.$route.query.id)
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		async pldz(l){
			if(this.tel){
				let com = this.detail.comments
				
					if(com[l].like.indexOf(this.tel)!=-1){
						return false
					}
					this.plzan[l] =true
					com[l].like.push(this.tel)
					
					let sc = await this.$http.put("/comlike?id="+this.$route.query.id,this.detail)
					console.log(sc)
				
				
			}else{
				this.$store.commit("changepas","/detail?id="+this.$route.query.id)
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		async jie(){
			if(this.tel){
				if(this.detail.register.indexOf(this.tel)!=-1){
					return false
				}
				this.detail.register.push(this.tel)
				
				let sc = await this.$http.put("/register?id="+this.$route.query.id,this.detail.register)
				console.log(sc)
				let a = []
				for(let i=0;i<this.detail.register.length;i++){
					
					let bao = await this.$http.get("/user?tel="+this.detail.register[i])
					a.push(bao.data)
					
				}
				this.jieban = a
			}else{
				this.$store.commit("changepas","/detail?id="+this.$route.query.id)
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		getDate(){
			var time = new Date();
		//	console.dir(time)  //日期对象
			//1.获取年
			var year = time.getFullYear(); //2019
			//2.获取月
			var month = time.getMonth()+1; //月的范围是0-11
			//3.获取日
			var day = time.getDate();
			//4.获取星期
			var week = time.getDay();//3 //星期范围是0-6,星期天是一周第一天
			var weekStr = "日一二三四五六";
			var week1 = weekStr[week]; //三
			//5.获取小时
			var hours = time.getHours(); //小时范围是 0-23
			//6.获取分钟
			var minutes = time.getMinutes(); //分钟范围是 0-59
			return `${year}-${month}-${day}-${hours}-${minutes}`
		}
	}
}
</script>

<style scoped lang="less">
.xiangqing{
	.di{
		background: #fff;
		padding: 0.1rem 0.15rem;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
		.lunbo{
		position: relative;
		/deep/.mint-swipe{
			height: 2.4rem;
			.mint-swipe-indicator{
				background: #fff;
				opacity: 0.8;
				width: 0.06rem;
				height: 0.06rem;
			}
			.is-active{
				background: #FFBE00;
			}
			img{
				height: 100%;
			}
		}
		.dingwei{
			position: absolute;
			top: 0.1rem;
			width: 100%;
			display: flex;
			padding: 0.15rem;
			justify-content: space-between;
			div{
				width: 0.35rem;
			}
		}
	}
	.yonghu{
		padding: 0.15rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			display: flex;
			align-items: center;
			.tu{
				width: 0.38rem;
				height: 0.38rem;
				img{
					border-radius:50% ;
					height: 100%;
					border: 2px solid #FFBE00;
				}
			}
			.wen{
				padding-left: 0.1rem;
				p{
					font-size: 0.14rem;
					font-weight: bold;
				}
				span{
					font-size: 0.12rem;
					color: #9f9f9f;
				}
			}
		}
		.right{
			button{
				background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#fb7053), to(#fc5a41));
				border: none;
				padding: 0.06rem 0.14rem;
				color: #fff;
				border-radius:0.2rem ;
			}
		}
	}
	.didian{
		box-shadow: 0 0 0.15rem rgba(255,103,103,.1);
		border-radius:0.1rem ;
		margin: 0.1rem 0.15rem;
		padding: 0.1rem;
		.yi{
			display: flex;
			align-items: center;
			span{
				margin-right: 0.05rem;
				display: block;
				width: 0.2rem;
			}
		}
		p{
			line-height: 1.5em;
			em{
				font-style: normal;
				font-weight: bold;
			}
			
		}
	}
	.wenzi{
		padding: 0.15rem;
		h1{
			font-size: 0.2rem;
			margin: 0 0 0.1rem 0;
		}
		p{
			width:100%;
		}
	}
	.fx{
		
		border-bottom:1px solid #D9D9D9;
		display: flex;
		align-items: center;
		padding: 0.1rem 0.9rem;
		padding-bottom: 0.25rem;
		margin: 0 0.1rem;
		div{
			border: 1px solid #333333;
			border-radius:50%;
			width: 0.4rem;
			height: 0.4rem;
			text-align: center;
			line-height: 0.32rem;
			margin: 0 0.1rem;
			position: relative;
			span{
				display: block;
				background: #FF3619;
				color: #fff;
				position: absolute;
				padding: 0.02rem 0.05rem;
				border-radius:0.1rem;
				line-height: 0.12rem;
				font-size: 0.12rem;
				top: -0.06rem;
				right: -0.05rem;
			}
		}
		img{
			width: 60%;
			
		}
	}
	.baoming{
		margin: 0.15rem;
		span{
			display: block;
			margin-bottom: 0.1rem;
		}
		.da{
			display: flex;
		}
		.tx{
			margin: 0 0.03rem;
			position: relative;
			width: 0.5rem;
			height: 0.5rem;
			
			img{
				border-radius:50% ;
				height: 100%;
			}
			.xingb{
				position: absolute;
				width: 0.2rem;
				bottom: -0.05rem;
				right: 0;
			}
		}
	}
	.pinglun{

		margin-top: 0.35rem;
		h1{
			display: flex;
			line-height: 0.18rem;
			font-size: 0.18rem;
			span{
				font-weight: normal;
				font-size: 0.14rem;
				margin-left: 0.03rem;
			}
		}
		.kuang{
			display: flex;
			align-items: center;
			.biaoqing{
				width: 0.4rem;
				padding: 0.05rem;
				background: #dedede;
				border-radius:50% ;
				margin-right: 0.08rem;
			}
			.shuru{
				background: #f3f1f2;
				padding: 0.04rem;
				border-radius:0.3rem ;
				width: 100%;
				input{
					margin: 0.04rem 0.1rem;
					background: none;
					border: none;
					font-size: 0.16rem;
					line-height: 0.16rem;
				}
			}
			.fabu{
				width: 0.4rem;
				padding: 0.05rem;
				background: #dedede;
				border-radius:50% ;
				margin-left: 0.08rem;
			}
		}
		
	}
	.pl{
		padding:0.15rem 0 ;
		.it{
			margin: 0.1rem 0;
			.shangyh{
				
				display: flex;
				justify-content: space-between;
				.yh{
					
					display: flex;
					
					.tu{
						width: 0.3rem;
						height: 0.3rem;
						img{
							height: 100%;
							border-radius:50% ;
							border: 1px solid #FFBE00;
						}
					}
					.nam{
						margin-left: 0.1rem;
						line-height: 0.18rem;
						font-size:0.16rem ;
						span{
							font-size: 0.14rem;
							color: #8C939D;
						}
					}
				}
				.zan{
					display: flex;
					align-items: center;
					img{
						width: 0.14rem;
						margin-right: 0.05rem;
					}
				}
			}
			.xiapl{
				margin-left: 0.4rem;
				border-bottom:1px solid #D9D9D9 ;
				padding: 0.06rem 0 0.12rem;
			}
		}
	}
}

</style>