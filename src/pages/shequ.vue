<template>
	<div class="shequ">
		<my-header></my-header>
		<div class="remen">
			<div class="shang">
				<h1>热门旅拍</h1>
				<span>查看更多></span>
			</div>
			<div class="zhong">精选旅拍等你来赞</div>
			<div class="fu">
				<div class="xia">
					<div class="xiaitme">
						<div class="tu">
							<img src="../assets/rmlp1.jpg"/>
						</div>
						<div class="wen">
							<div class="dianzan">
			    				<div class="ren">
			    					<img src="../assets/gltx.png"/>
			    					<span>叶疏远</span>
			    				</div>
			    				<div class="zan">
			    					<img src="../assets/点赞图标.png"/>
			    					<span>1</span>
			    				</div>
			    			</div>
						</div>
						<div class="biaoqian">
							NO.1
						</div>
						<div class="dizhi">
							<img src="../assets/位置图标.png"/>
							上野公园
						</div>
					</div>
					
					<div class="xiaitme">
						<div class="tu">
							<img src="../assets/rmlp2.jpg"/>
						</div>
						<div class="wen">
							<div class="dianzan">
			    				<div class="ren">
			    					<img src="../assets/gltx.png"/>
			    					<span>叶疏远</span>
			    				</div>
			    				<div class="zan">
			    					<img src="../assets/点赞图标.png"/>
			    					<span>1</span>
			    				</div>
			    			</div>
						</div>
						<div class="biaoqian">
							NO.1
						</div>
						<div class="dizhi">
							<img src="../assets/位置图标.png"/>
							上野公园
						</div>
					</div>
					
					<div class="xiaitme">
						<div class="tu">
							<img src="../assets/rmlp1.jpg"/>
						</div>
						<div class="wen">
							<div class="dianzan">
			    				<div class="ren">
			    					<img src="../assets/gltx.png"/>
			    					<span>叶疏远</span>
			    				</div>
			    				<div class="zan">
			    					<img src="../assets/点赞图标.png"/>
			    					<span>1</span>
			    				</div>
			    			</div>
						</div>
						<div class="biaoqian">
							NO.1
						</div>
						<div class="dizhi">
							<img src="../assets/位置图标.png"/>
							上野公园
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="remendaren">
			<div class="shang">
				<h1>热门旅达人</h1>
				<span>查看更多></span>
			</div>
			<div class="zhong">你可能感兴趣的人</div>
			<div class="fu">
				<div class="rmxia">
					<div class="rmxiaitme">
						<div class="tu">
							<img src="../assets/gltx.png"/>
						</div>
						<h1>Placebo</h1>
						<p>签约旅行家</p>
						<span>关注ta</span>
					</div>
					<div class="rmxiaitme">
						<div class="tu">
							<img src="../assets/gltx.png"/>
						</div>
						<h1>Placebo</h1>
						<p>签约旅行家</p>
						<span>关注ta</span>
					</div>
					<div class="rmxiaitme">
						<div class="tu">
							<img src="../assets/gltx.png"/>
						</div>
						<h1>Placebo</h1>
						<p>签约旅行家</p>
						<span>关注ta</span>
					</div>
					<div class="rmxiaitme">
						<div class="tu">
							<img src="../assets/gltx.png"/>
						</div>
						<h1>Placebo</h1>
						<p>签约旅行家</p>
						<span>关注ta</span>
					</div>
					<div class="rmxiaitme">
						<div class="tu">
							<img src="../assets/gltx.png"/>
						</div>
						<h1>Placebo</h1>
						<p>签约旅行家</p>
						<span>关注ta</span>
					</div>
					<div class="rmxiaitme">
						<div class="tu">
							<img src="../assets/gltx.png"/>
						</div>
						<h1>Placebo</h1>
						<p>签约旅行家</p>
						<span>关注ta</span>
					</div>
					
				</div>
			</div>
		</div>
		<div class="zhengzai">
			<div class="shang">
				<h1>TA们正在结伴</h1>
				<router-link to="/jieban" tag="span">
					查看更多>
				</router-link>
			</div>
			<div class="zhong">你可能感兴趣的人</div>
			<div class="fu">
				<div class="zz">
					<div class="zzitme">
						<div class="tu">
							<img src="../assets/wenzhangtu.jpg"/>
						</div>
						<div class="touxiang">
							<img src="../assets/gltx.png"/>
						</div>
						<div class="wen">
							<p>去土耳其</p>
							<span>2020-05-05出发</span>
						</div>
					</div>
					<div class="zzitme">
						<div class="tu">
							<img src="../assets/wenzhangtu.jpg"/>
						</div>
						<div class="touxiang">
							<img src="../assets/gltx.png"/>
						</div>
						<div class="wen">
							<p>去土耳其</p>
							<span>2020-05-05出发</span>
						</div>
					</div>
					<div class="zzitme">
						<div class="tu">
							<img src="../assets/wenzhangtu.jpg"/>
						</div>
						<div class="touxiang">
							<img src="../assets/gltx.png"/>
						</div>
						<div class="wen">
							<p>去土耳其</p>
							<span>2020-05-05出发</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="gao"></div>
		<my-footer></my-footer>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
.gao{
	height: 0.8rem;
}
.fu{
	overflow-x: scroll;
}
.shang{
	padding: 0.1rem 0.15rem 0;
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
.shequ{
	.remen{
		padding-top: 0.15rem;
		
		
		.xia{
			display: flex;
			width: 5.5rem;
			padding: 0.15rem;
			.xiaitme{
				margin-right: 0.15rem;
				border-radius:0.08rem ;
				overflow: hidden;
				position: relative;
				box-shadow: 0 0 0.07rem rgba(0,0,0,.1);
				width:1.6rem;
				.tu{
					width: 100%;
					height: 1.05rem;
					img{
						height: 100%;
					}
				}
				.dianzan{
					display: flex;
					justify-content: space-between;
					padding: 0.04rem 0.08rem;
					img{
						margin-right:0.03rem ;
					}
					.ren{
						display: flex;
						align-items: center;
						font-size: 0.14rem;
						img{
							width: 0.25rem;
							height: 0.25rem;
							border: 2px solid #F7B902;
							border-radius:50% ;
						}
					}
					.zan{
						display: flex;
						align-items: center;
						img{
							width: 0.18rem;
						}
					}
				}
				.biaoqian{
					background: #ff3619;
					position: absolute;
					font-size: 0.12rem;
					padding: 0.03rem;
					padding-left: 0.1rem;
					border-radius:0.05rem ;
					color: #fff;
					z-index: 1;
					top: -0.02rem;
					left: -0.08rem;
				}
				.dizhi{
					background: rgba(0,0,0,.4);
					border-radius:0.5rem ;
					padding: 0.02rem 0.1rem;
					position: absolute;
					font-size:0.12rem;
					color:#fff;
					z-index: 1;
					bottom: 0.4rem;
					right: 0.1rem;
					img{
						
						width: 0.11rem;
						margin-right: 0.02rem;
						vertical-align: sub;
					}
				}
			}
		}
	}
	
}
.rmxia{
	display: flex;
	
	.rmxiaitme{
		padding: 0.2rem 0.1rem;
		width: 1.4rem;
		text-align: center;
		.tu{
			margin: 0.04rem;
			border: 1px solid #F7B902;
			border-radius:50% ;
			overflow: hidden;
			padding: 0.02rem;
			img{
				width: 100%;
			}
		}
		h1{
			font-size: 0.2rem;
			font-weight: normal;
		}
		p{
			font-size: 0.14rem;
			color: #666666;
			margin: 0.03rem 0;
		}
		span{
			font-size: 0.14rem;
			background: linear-gradient(135deg,#fcd102 0%,#fea102 100%);
			padding: 0.02rem 0.1rem;
			border-radius:0.2rem ;
		}
	}
}
.zhengzai{
	
	.zz{
		display: flex;
		width: 4.5rem;
		padding: 0.15rem;
		.zzitme{
			width: 1.3rem;
			box-shadow: 0 0 0.07rem rgba(0,0,0,.1);
			border-radius:0.1rem ;
			overflow: hidden;
			margin-right:0.1rem ;
			position:relative;
			.tu{
				width: 100%;
				height: 1rem;
				img{
					width: 100%; height: 100%;
				}
			}
			.touxiang{
				width: 0.35rem;
				border: 1px solid #F7B902;
				border-radius:50% ;
				background: #fff;
				padding: 0.02rem;
				position: absolute;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
			}
			.wen{
				height: 0.7rem;
				padding-top: 0.2rem;
				text-align: center;
				span{
					font-size: 0.14rem;
					color: #666666;
				}
			}
		}
	}
}

</style>