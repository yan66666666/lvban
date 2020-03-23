<template>
	<div class="wode">
		<div class="toubu">
			<div class="ding">
				<div class="wen">
					我的
				</div>
				<div class="right">
					<div class="xiaoxikuang">
						<img src="../assets/消息框.png"/>
						<div class="xiaoxi">
							12
						</div>
					</div>
					
					<img src="../assets/mypage/shezhi.png" @click="shezhi()"/>
				</div>
			</div>
			<div class="shoudaoxiaoxi">
				<img src="../assets/mypage/jiebanxiaoxi.png"/>
				<span>收到一条结伴邀请>></span>
			</div>
			<div class="touxiang">
				<div></div>
				<div class="toix">
					<div class="tu">
						<img :src="user.userimg"/>
					</div>
					<div class="fangke">
						<img src="../assets/fangke.png"/>
						<span>{{user.visitors}}人来访</span>
					</div>
				</div>
				<div class="bianji" @click="bianji()">
					<div class="bj">
						<img src="../assets/mypage/bianji.png"/>
						<span>编辑</span>
					</div>
					
				</div>
			</div>
			<div class="wangming">
				<p>{{user.userName}}</p>
				<span>{{user.signa}}</span>
			</div>
			<div class="fense">
				<div class="fs" @click="qfs()">
					<p>{{gzmy.length}}</p>
					<p>粉丝</p>
				</div>
				<div class="guanzhu" @click="qgz()">
					<p>{{user.attention}}</p>
					<p>关注</p>
				</div>
				<div class="beizan">
					<p>{{zan}}</p>
					<p>被赞</p>
				</div>
			</div>
		</div>
		<div class="nav">
			<div>
				<img src="../assets/mypage/nav-1.png"/>
				<p>打卡城市</p>
			</div>
			<div @click="qujieban()">
				<img src="../assets/mypage/nav-2.png"/>
				<p>我的结伴</p>
			</div>
			<div>
				<img src="../assets/mypage/nav-3.png"/>
				<p>行程单</p>
			</div>
			<div>
				<img src="../assets/mypage/nav-4.png"/>
				<p>我的好友</p>
			</div>
			<div>
				<img src="../assets/mypage/nav-5.png"/>
				<p>我的订单</p>
			</div>
			<div>
				<img src="../assets/mypage/nav-6.png"/>
				<p>我的钱包</p>
			</div>
			<div>
				<img src="../assets/mypage/nav-7.png"/>
				<p>我的收藏</p>
			</div>
			<div>
				<img src="../assets/mypage/nav-81.png"/>
				<p>我的攻略</p>
			</div>
		</div>
		<div class="dongtai">
			<div class="dt">
				<p>动态</p>
			</div>
			<div class="xiang">
				<div class="itme" v-for="(i,j) in dynamic" :key="j">
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
				</div>
				<!--<div class="itme">
					<div class="left">
						<p><span>05</span>4月</p>
					</div>
					<div class="right">
						<p>终于来马来西亚了~</p>
						<div class="tu">
							<div><img src="../assets/mypage/dongtaitu1.png"/></div>
							<div><img src="../assets/mypage/dongtaitu2.png"/></div>
						</div>
						<div class="geng">
							<div class="biaoqian">
								<span></span>
								一个人的旅行
							</div>
							<div class="gengduo">
								<img src="../assets/mypage/shenglue.png"/>
							</div>
						</div>
						
					</div>
				</div>-->
			</div>
		</div>
		
		<div class="gao"></div>
		<my-footer></my-footer>
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
			gzmy:[],
			zan:0
		}
	},
	computed:{
		...mapState(["tel"])
	},
	methods:{
		async shuju(){
			if(this.tel){
			
				let user = await this.$http.get("/user?tel="+this.tel)
				this.user.userName = user.data.userName
				this.user.userimg = user.data.userimg
				this.user.attention = user.data.attention.length
				this.user.fans = user.data.fans.length
				this.user.signa = user.data.signa
				this.user.visitors = user.data.visitors
				this.user = {...this.user}
//				console.log(this.user.userimg)


				//获取动态
				let dynamic = await this.$http.get("/dynamic?tel="+this.tel)
				this.dynamic = dynamic.data
				this.dynamic.forEach(i=>{
					this.zan += i.like.length
				})
				
				let uss = await this.$http.get("/users")
				this.users = uss.data
				for(let i=0;i<this.users.length;i++){
					if(this.users[i].attention.indexOf(this.tel)!=-1){
						this.gzmy.push(this.users[i].tel)
					}
				}
			}else{
				this.$store.commit("changepas","/my")
				this.$toast("您还没有登录，请先登录")
				this.$router.push("/login")
			}
		},
		bianji(){
			this.$router.push("/xiugaiziliao")
		},
		qfs(){
			this.$store.commit("changepas","/my")
			this.$router.push("/fans?tel="+this.tel)
		},
		qgz(){
			this.$store.commit("changepas","/my")
			this.$router.push("/guanzhu?tel="+this.tel)
		},
		qujieban(){
			this.$router.push("/myjieban")
		},
		shezhi(){
			this.$router.push("/tuichu")
		}
	},
	created(){
		this.shuju()
		
	}
}

</script>

<style scoped lang="less">
.gao{
	height: 0.8rem;
}
.wode{
	background: #fafafa;
	.toubu{
		height: 3.9rem;
		background: url(../assets/mybg.png) no-repeat;
		background-size:100%;
		.ding{
			display: flex;
			justify-content: space-between;
			padding:0.35rem 0.15rem 0;
			align-items: center;
			
			.wen{
				font-size: 0.18rem;
				color: #fff;
				text-shadow: 0 0 0.1rem rgba(254,174,16,1);
			}
			.right{
				display: flex;
				
				
				.xiaoxikuang{
					margin-top: 0.02rem;
					position: relative;
					img{
						width: 0.25rem;
						height: 0.25rem;
					}
					.xiaoxi{
						position: absolute;
						top: -0.05rem;
						right: -0.1rem;
						font-size: 0.08rem;
						background: #fd2333;
						padding: 0 0.02rem;
						border: 0.02rem solid #fff;
						color: #fff;
						border-radius:47% ;
					}
				}
				img{
					margin-left: 0.15rem;
					width: 0.3rem;
					height: 0.3rem;
				}
				
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
			display: flex;
			div{
				flex: 1;
			}
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
					left: 0.25rem;
					background: #fff;
					display: flex;
					align-items: center;
					border-radius:0.2rem ;
					font-size: 0.12rem;
					color: #ffaf7f;
					padding: 0.02rem 0.05rem;
					img{
						width: 0.14rem;
					}
					
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
	.nav{
		margin: 0.15rem;
		background: #fff;
		border-radius:0.15rem ;
		position: relative;
		top: -0.5rem;
		display: flex;
		padding: 0.15rem;
		flex-wrap:wrap ;
		div{
			padding: 0.1rem;
			width: 25%;
			text-align: center;
			font-size: 0.14rem;
			p{
				margin-top: 0.1rem;
			}
			img{
				width: 0.45rem;
			}
		}
	}
	.dongtai{
		margin: 0.15rem;
		margin-top: -0.45rem;
		background: #fff;
		border-radius:0.15rem ;
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
				display: flex;
				padding:0.2rem 0;
				.left{
					flex: 3;
					margin-right: 0.1rem;
					p{
						
						span{
							font-size: 0.3rem;
						}
					}
				}
				.right{
					flex: 10;
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
			}
		}
	}
}
</style>