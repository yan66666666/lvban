<template>
	<div class="home">
		<div class="banner">
			<div class="header">
				<div class="left">
					<span style="text-shadow: 1px 1px 3px #000000;">杭州</span>
					<img src="../assets/下箭头.png"/>
				</div>
				<div class="content">
					<input type="text" name="" id="" value="" placeholder="请输入目的地..." />
				</div>
				<div class="right">
					<img src="../assets/消息框.png"/>
					<div class="xiaoxi">
						12
					</div>
				</div>
			</div>
			<div class="nav">
				<div class="list">
					<div><img src="../assets/index-nav1.png"/><span>订票</span></div>
					<div><img src="../assets/index-nav2.png"/><span>住宿</span></div>
					<div><img src="../assets/index-nav3.png"/><span>攻略</span></div>
					<div><img src="../assets/index-nav4.png"/><span>结伴</span></div>
				</div>
				<div class="nanwang">
					<img src="../assets/nanwang.png"/>
				</div>
			</div>
		</div>
		<div class="fujin">
			<div class="shang">
				<h1>附近结伴</h1>
				<span>更多></span>
			</div>
			<div class="zhong">寻找志同道合的Ta</div>
			
			<div class="fu">
				
				<div class="xia">
					<!--<div class="xia-one">
						<span class="juli">0.06km</span>
						<div class="touxiang">
							<img src="../assets/首页头像1.png"/>
							<div class="xingbie">
								<img src="../assets/性别女.png"/>
							</div>
							
						</div>
						<div class="name">
							<h2>散步的鸟</h2>
							<span>旅行达人</span>
						</div>
						<div class="guangbo">
							<img src="../assets/喇叭.png"/>
							<span>想去巴黎岛...</span>
						</div>
						<div class="dashan">
							搭讪
						</div>
					</div>-->
					<div class="xia-one" v-for="i in users" @click="tm(i.tel)">
						<span class="juli">0.06km</span>
						<div class="touxiang">
							<img :src="i.userimg" class="tx"/>
							<div class="xingbie">
								<img src="../assets/nan.png" v-if="i.sex == '男'"/>
								<img src="../assets/nv.png" v-else/>
							</div>
							
						</div>
						<div class="name">
							<h2>{{i.userName}}</h2>
							<span>旅行达人</span>
						</div>
						<div class="guangbo">
							<img src="../assets/蓝色喇叭.png"/>
							<span style="color: #024fe6;">想去巴黎岛...</span>
						</div>
						<div class="dashan">
							搭讪
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div class="tuijian">
			<div class="shang">
				<h1>旅游推荐</h1>
				<span>更多></span>
			</div>
			<div class="zhong">网红经典，美食大赏</div>
			<div class="fu">
				<div class="xia">
					<div class="xia-one">
						<img src="../assets/lvxingtuijian.png"/>
					</div>
					<div class="xia-one">
						<img src="../assets/lvxingtuijian.png"/>
					</div>
				</div>
			</div>
		</div>
		
		<div class="zutuan">
			<div class="shang">
				<h1>附近组团</h1>
				<span>更多></span>
			</div>
			<div class="zhong">省力省时又省钱</div>
			<div class="xia">
				<div class="xia-one" v-for="(i,j) in arr" :key="j" @click="qu(i._id)">
					<div class="shang">
						<h1>{{i.title}}</h1>
						<img src="../assets/三个点.png"/>
					</div>
					<div class="content">
						<div class="le">
							<img :src="JSON.parse(i.pic)[0]"/>
						</div>
						<div class="ri">
							<ul>
								<li>出发时间 {{i.riqi}}</li>
								<li>结束时间  {{i.riqi}}</li>
								<li>团员人数{{i.register.length}}人</li>
							</ul>
							<div class="btn">
								立即加入
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
		<my-footer></my-footer>
		
	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	data(){
		return {
			arr:"",
			users:[],
			kuan:0
		}
	},
	computed:{
		...mapState(["pas"])
	},
	async created(){
		let withs = await this.$http.get("/withs")
		this.arr = withs.data
		let a = await this.$http.get("/users")
		this.users = a.data
		
	},
	methods:{
		qu(id){
			this.$store.commit("changxq","/")
			this.$router.push("/detail?id="+id)
		},
		tm(tel){
			this.$store.commit("changepas","/")
			this.$router.push("/usermy?tel="+tel)
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.home{
	.banner{
		background: url(../assets/banner.png) no-repeat;
		background-size: 100% ;
		
		.header{
			display: flex;
			align-items: center;
			padding: 0.1rem;
			padding-top: 0.4rem;
			padding-bottom: 2rem;
			
			.left{
				padding-left: 0.1rem;
				width: 25%;
				color:#fff;
				
				font-size:0.19rem;
				
				img{
					width: 25%;
				}
			}
			.content{
				flex: 1;
				padding-left: 0.1rem;
				background: url(../assets/搜索.png) no-repeat 10%;
				background-size:10% ;
					
				input{
					width: 100%;
					padding-left: 0.4rem;
					border: none;
					opacity: 0.6;
					height: 0.3rem;
					border-radius:0.15rem ;
					font-size: 0.14rem;
					/*color: #fff;*/
					
				}
			}
			
			.right{
				width: 15%;
				
				text-align: center;
				position: relative;
				img{
					width: 50%;
					
				}
				
				.xiaoxi{
					position: absolute;
					top: -0.05rem;
					right: 0.01rem;
					font-size: 0.08rem;
					background: #fd2333;
					padding: 0 0.02rem;
					border: 0.02rem solid #fff;
					color: #fff;
					border-radius:47% ;
				}
			}
		}
		
		position:relative;
		.nav{
			width: 92%;
			height: 2rem;
			background: #fff;
			border-radius:0.17rem ;
			margin: 0.15rem;
			box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1);
			position: absolute;
			bottom: -1.5rem;
			padding: 0.15rem;
			
			.list{
				display: flex;
				text-align: center;
				
				div{
					margin: 0 0.06rem;
					font-size: 0.14rem;
					
				}
			}
			.nanwang{
				margin-top: 0.18rem;
			}
		}
		
	}
	.fu{
		overflow-x: scroll;
	}
	.fujin{
		margin-top: 1.5rem;
		
		.shang{
			padding: 0 0.15rem;
			padding-bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			h1{
				font-size: 0.2rem;
				font-weight: normal;
			}
			span{
				font-size: 0.14rem;
				color: #666;
			}
		}
		.zhong{
			padding: 0 0.15rem;
			padding-top: 0;
			font-size: 0.14rem;
			color: #666;
			margin: 0.03rem 0;
		}
		
		.xia{
			width: 8.2rem;
			display: flex;
			padding: 0.2rem;
			.xia-one{
				width: 1.5rem;
				background: #fff;
				box-shadow: 0 0 0.15rem rgba(0,0,0,.1);
				border-radius:0.07rem ;
				padding-bottom:0.13rem ;
				margin-right: 0.15rem;
				position:relative;
				
				
				div{
					margin: 0 auto;
				}
				.juli{
					font-size: 0.06rem;
					position: absolute;
					right: 0.02rem;
					top: 0.02rem;
					color: #666;
				}
				.touxiang{
					width: 0.7rem;
					height: 0.9rem;
					padding-top: 0.2rem;
					position: relative;
					.tx{
						width: 0.7rem;
						height: 0.7rem;
						border-radius:50% ;
					}
					.xingbie{
						position: absolute;
						bottom: 0;
						right: 0;
						width: 0.22rem;
					}
					
				}
				.name{
					margin-top: 0.03rem;
					text-align: center;
					
					h2{
						font-size: 0.16rem;
					}
					span{
						color: #666;
						font-size: 0.14rem;
					}
				}
				.guangbo{
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 0.85rem;
					font-size: 0.12rem;
					padding: 0.1rem 0;
					color: #fd779a;
					img{
						width: 15%;
					}
				}
				.dashan{
					width: 0.9rem;
					background: #f8ce00;
					padding: 0.04rem ;
					text-align: center;
					border-radius:0.2rem ;
					color: #fff;
					font-size: 0.15rem;
				}
				
			}
			
		}
	}
	.tuijian{
		
		
		
		.shang{
			padding: 0.15rem;
			padding-bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			h1{
				font-size: 0.2rem;
				font-weight: normal;
			}
			span{
				font-size: 0.14rem;
				color: #666;
			}
		}
		.zhong{
			padding: 0.15rem;
			padding-top: 0;
			font-size: 0.14rem;
			color: #666;
		}
		.xia{
			width: 5.6rem;
			padding: 0.1rem;
			padding-top: 0;
			display: flex;
			.xia-one{
				width: 2.7rem;
			}
		}
	}
	
	.zutuan{
		margin-bottom: 0.7rem;
		padding: 0.15rem;
		
		.shang{
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			h1{
				font-size: 0.2rem;
				font-weight: normal;
			}
			span{
				font-size: 0.14rem;
				color: #666;
			}
		}
		.zhong{
			font-size: 0.14rem;
			color: #666;
		}
		.xia{
			margin: 0.1rem 0 0;
			
			.xia-one{
				background: #fff;
				box-shadow: 0 0 0.2rem rgba(0,0,0,.1);
				padding:0.13rem;
				border-radius: 0.1rem;
				margin:0.15rem 0;
				
				
				background:url(../assets/jinxingzhong.png) no-repeat;
				background-size:0.4rem ;
				background-position-y:calc(100% + 0.03rem) ;
				background-position-x: calc(100% + 0.05rem);
				
				.shang{
					display: flex;
					margin-bottom: 0.1rem;
					
					h1{
						font-size: 0.17rem;
						font-weight: normal;
						padding-left: 0.25rem;
						background: url(../assets/HOT.png) no-repeat 0 0.02rem;
						background-size: 0.2rem ;
					}
					img{
						width: 7%;
					}
					
				}
				
				.content{
					display: flex;
					
					
					.le{
						width: 45%;
						margin-right: 0.1rem;
						img{
							border-radius: 0.1rem;
						}
					}
					.ri{
						flex: 1;
						font-size: 0.14rem;
						ul{
							li{
								padding-left:0.16rem ;
								margin: 0.02rem 0;
								background: url(../assets/时间.png) no-repeat 0 50%;
								background-size:0.14rem ;
							}
							li:nth-child(3){
								background: url(../assets/人.png) no-repeat 0 50%;
								background-size:0.14rem ;
							}
						}
						.btn{
							width: 0.9rem;
							text-align: center;
							margin: 0.15rem auto 0.1rem;
							border-radius:0.3rem ;
							font-size: 0.12rem;
							padding: 0.02rem 0.05rem;
							color: #fff;
							background: #42B983;
						}
					}
				}
				
			}
		}
	}
	
}
</style>