<template>
	<div class="usermy">
		<div class="toubu">
			<div class="ding">
				<div class="wen" @click="fan()">
					<img src="../assets/fanhui1.png"/>
				</div>
				<div class="right">
					个人资料
					
				</div>
			</div>
			<div class="touxiang">
				<div class="toix">
					<div class="tu">
						<img :src="user.userimg"/>
					</div>
					<div class="fangke" @click="guanzhuta()">
						<span v-if="flag">已关注</span>
						<span v-else>关注ta</span>
					</div>
				</div>
				
			</div>
			<div class="wangming">
				<p>{{user.userName}}</p>
				<span>{{user.signa}}</span>
			</div>
			<div class="fense">
				<div class="fs" @click="qfs(user.tel)">
					<p>{{gzmy.length}}</p>
					<p>粉丝</p>
				</div>
				<div class="guanzhu" @click="qgz(user.tel)">
					<p>{{user.attention.length}}</p>
					<p>关注</p>
				</div>
				<div class="beizan">
					<p>{{zans}}</p>
					<p>被赞</p>
				</div>
			</div>
		</div>
		
		<div class="dongtai">
			<div class="dt">
				<p>动态</p>
			</div>
			<div class="xiang">
				<!--<div class="itme" v-for="(i,j) in dynamic" :key="j">
					<div class="left">
						<p><span>{{i.relTime.substr(8,2)}}</span>{{i.relTime.substr(5,2)}}月</p>
					</div>
					<div class="right">
						<p>{{i.content}}</p>
						<div class="tu1" v-if="JSON.parse(i.pic).length == 1">
							<div v-for="(n,m) in JSON.parse(i.pic)" :key="m"><img :src="n"/></div>
						</div>
						<div class="tu" v-else="">
							<div v-for="(n,m) in JSON.parse(i.pic)" :key="m"><img :src="n"/></div>
						</div>
						<div class="geng">
							<div class="biaoqian">
								<span></span>
								{{i.lab}}
							</div>
							<div class="gengduo">
								<img src="../assets/mypage/shenglue.png"/>
							</div>
						</div>
						
					</div>
				</div>-->
				<div class="itme" v-for="(i,j) in dynamic" :key="j">
					<div class="yong">
						<div class="yh">
							<div class="yhtu">
								<img :src="user.userimg"/>
							</div>
							<div class="yhname">
								<p>{{user.userName}}</p>
								<span>{{i.relTime.substr(5,2)}}月{{i.relTime.substr(8,2)}}日发布</span>
							</div>
						</div>
						<div class="fenx">
							<img src="../assets/fen.png"/>
						</div>
					</div>
					<div class="right">
						<p>{{i.content}}</p>
						<div class="tu1" v-if="JSON.parse(i.pic).length == 1">
							<div v-for="(n,m) in JSON.parse(i.pic)" :key="m"><img :src="n"/></div>
						</div>
						<div class="tu" v-else="">
							<div v-for="(n,m) in JSON.parse(i.pic)" :key="m"><img :src="n"/></div>
						</div>
						<div class="geng">
							<div class="biaoqian">
								<span></span>
								{{i.lab}}
							</div>
							
						</div>
					</div>
					<div class="xia">
						<span></span>
						<div class="pl">
							<div class="tu">
								<img src="../assets/攻略-消息.png"/>
							</div>
							<p>{{i.comments.length}}</p>
						</div>
						<div class="zan" @click="zan(j,i._id)">
							<div class="tu">
								<img src="../assets/dianzan-active.png" v-if="sszan[j]"/>
								<img src="../assets/dianzan.png" v-else/>
							</div>
							<p>{{i.like.length}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		

	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	data(){
		return {
			user:{},
			dynamic:[],
			nian:"",
			yue:"",
			sszan:[false],
			flag:false,
			myuser:"",
			gzmy:[],
			zans:0
		}
	},
	computed:{
		...mapState(["pas","tel"])
	},
	async created(){
		let a = await this.$http.get("/user?tel="+this.$route.query.tel)
		this.user = a.data


		//获取动态
		let dynamic = await this.$http.get("/dynamic?tel="+this.$route.query.tel)
		this.dynamic = dynamic.data
		this.dynamic.forEach(i=>{
			this.zans += i.like.length
		})
		
		
		for(let i=0;i<this.dynamic.length;i++){
			
			
			if(this.dynamic[i].like.indexOf(this.tel)!=-1){
				this.sszan[i] = true
			}else{
				this.sszan[i] = false
			}
			
		}
		let myusers = await this.$http.get("/user?tel="+this.tel)
		this.myuser = myusers.data
		if(this.myuser.attention.indexOf(this.$route.query.tel)!=-1){
			this.flag = true
		}
		
		let uss = await this.$http.get("/users")
		this.users = uss.data
		for(let i=0;i<this.users.length;i++){
			if(this.users[i].attention.indexOf(this.$route.query.tel)!=-1){
				this.gzmy.push(this.users[i].tel)
			}
		}
		
		if(this.tel){
			this.user.visitors++
			let fk = await this.$http.put("/fk?tel="+this.$route.query.tel+"&vis="+this.user.visitors)
			console.log(fk)
		}
		
	},
	methods:{
		
		async zan(l,id){
			if(this.tel){
				let com = this.dynamic
				
					if(com[l].like.indexOf(this.tel)!=-1){
						return false
					}
					this.sszan[l] = true
					com[l].like.push(this.tel)
					
					let sc = await this.$http.put("/usmylike?id="+id,com[l])
					console.log(sc)
					let a=0
					this.dynamic.forEach(i=>{
						a += i.like.length
					})
					this.zans = a
				
			}else{
				this.$store.commit("changepas","/usermy?tel="+this.$route.query.tel)
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		fan(){
			this.$router.push(this.pas)
		},
		async guanzhuta(){
			if(this.tel){
				
				if(this.myuser.attention.indexOf(this.$route.query.tel)==-1){
					this.myuser.attention.push(this.$route.query.tel)
					
					let sc = await this.$http.put("/useratt?tel="+this.tel,this.myuser.attention)
					console.log(sc)
					this.flag = true
				}else{
					return false
				}
				
			}else{
				this.$store.commit("changepas","/usermy?tel="+this.$route.query.tel)
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		qgz(tel){
			this.$store.commit("changepas","/usermy?tel="+tel)
			this.$router.push("/guanzhu?tel="+tel)
		},
		qfs(tel){
			this.$store.commit("changepas","/usermy?tel="+tel)
			this.$router.push("/fans?tel="+tel)
		}
	}
	
}

</script>

<style scoped lang="less">
.gao{
	height: 0.8rem;
}
.usermy{
	background: #fafafa;
	.toubu{
		height: 3.4rem;
		background: url(../assets/mybg.png) no-repeat;
		background-size:100%;
		.ding{
			display: flex;
			justify-content: space-between;
			padding:0.35rem 0.15rem 0;
			align-items: center;
			
			.wen{
				width: 0.25rem;
				font-size: 0.18rem;
				color: #fff;
				text-shadow: 0 0 0.1rem rgba(254,174,16,1);
			}
			.right{
				flex: 1;
				text-align: center;
				color: #fff;
				margin-right: 0.25rem;
			}
		}
		.shoudaoxiaoxi{
			background: #fff;
			width: 1.6rem;
			padding: 0.04rem 0.06rem 0.06rem 0.12rem;
			border-radius:0.5rem ;
			margin: 0.15rem auto;
			img{
				width: 0.2rem;
			}
			span{
				font-size: 0.12rem;
				color: #e95208;
			}
		}
		.touxiang{
			margin-top:0.2rem ;
			.toix{
				position: relative;
				.tu{
					width: 0.85rem;
					height: 0.85rem;
					margin: 0 auto;
					border: 2px solid #fff;
					border-radius:50% ;
					overflow: hidden;
					img{
						height: 100%;
					}
				}
				.fangke{
					position: absolute;
					bottom: 0;
					left: 1.56rem;
					background: #fff;
					display: flex;
					align-items: center;
					border-radius:0.2rem ;
					font-size: 0.12rem;
					color: #ffaf7f;
					padding: 0.03rem 0.13rem;
					
					
				}
			}
			.bianji{
				.bj{
					margin: 0.2rem auto;
					border: 1px solid #fff;
					width: 0.8rem;
					border-radius:0.3rem ;
					padding: 0.03rem 0.1rem 0.07rem;
					color: #fff;
					img{
						width: 0.17rem;
						
					}
				}
				
			}
		}
		.wangming{
			margin-top:0.15rem;
			text-align: center;
			font-size: 0.18rem;
			line-height: 1em;
			span{
				font-size: 0.12rem;
				color: #333;
			}
		}
		.fense{
			display: flex;
			text-align: center;
			padding: 0.15rem 0;
			div{
				flex: 1;
			}
			p{line-height: 2em; }
		}
	}
	
	.dongtai{
		margin: 0.15rem;
		margin-top: -0.35rem;
		background: #fff;
		border-radius:0.15rem ;
		padding: 0.13rem 0;
		.dt{
			
			border-bottom:1px solid #eee ;
			margin-left: 0.15rem;
			p{
				padding: 0.1rem;
				font-size: 0.16rem;
				font-weight: bold;
				border-bottom: 2px solid #F8CE00;
				width: 0.55rem;
			}
		}
		.xiang{
			padding: 0 0.1rem ;
			padding-left: 0.15rem;
			.itme{
				padding:0.2rem 0;
				border-bottom:1px solid #DEDEDE ;
				.yong{
					display: flex;
					justify-content: space-between;
					align-content: center;
					.yh{
						display: flex;
						margin-bottom:0.1rem;
						img{
							width: 0.35rem;
							height: 0.35rem;
							border-radius:50% ;
						}
						.yhname{
							margin-left: 0.1rem;
							line-height: 0.18rem;
							font-size:0.16rem ;
							span{
								font-size: 0.14rem;
								color: #8C939D;
							}
						}
					}
					.fenx{
						width: 0.23rem;
					}
				}
				.right{
					
					.tu{
						flex-wrap:wrap ;
						margin: 0.1rem 0;
						display: flex;
						div{
							padding-right: 0.1rem;
							padding-bottom: 0.1rem;
							width: 48%;
							
							img{
								border-radius:0.1rem ;
								height: 100%;
							}
						}
					}
					.tu1{
						margin: 0.1rem 0;
						display: flex;
						div{
							padding-right: 0.1rem;
							img{
								border-radius:0.1rem ;
							}
						}
					}
					.geng{
						display: flex;
						justify-content: space-between;
						.biaoqian{
							background: #f6f6f6;
							border-radius:0.2rem ;
							padding: 0.03rem;
							font-size: 0.14rem;
							display: flex;
							align-items: center;
							padding-right:0.15rem;
							span{
								display: inline-block;
								background: #F8CE00;
								width: 0.05rem;
								height: 0.05rem;
								border-radius:50% ;
								margin: 0 0.1rem;
							}
						}
						.gengduo{
							img{
								width: 70%;
								text-align: right;
							}
						}
						
					}
					
				}
				.xia{
					display: flex;
					align-items: center;
					font-size: 0.14rem;
					span{
						display: block;
						flex: 1;
					}
					div{
						min-width: 0.24rem;
						display: flex;
						margin-left:0.1rem ;
						img{
							width: 0.2rem;
							height: 0.17rem;
						}
					}
					
				}
			}
		}
	}
}
</style>