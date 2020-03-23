<template>
	<div class="gonglue">
		<my-header></my-header>
		<div class="lvbanzhuanlan">
			<div class="lb-wen">
				<div class="lb-le">
					旅伴专栏
				</div>
				<div class="lb-ri">
					查看更多>
				</div>
			</div>
			<div class="fu">
				<div class="xia">
					<div class="xia-one">
						<img src="../assets/gltx.png"/>
						<p>煎饼果子满地跑</p>
						<div class="xia-onewen">
							进入专栏
						</div>
					</div>
					<div class="xia-one">
						<img src="../assets/gltx.png"/>
						<p>煎饼果子满地跑</p>
						<div class="xia-onewen">
							进入专栏
						</div>
					</div>
					<div class="xia-one">
						<img src="../assets/gltx.png"/>
						<p>煎饼果子满地跑</p>
						<div class="xia-onewen">
							进入专栏
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="lvhuati">
			<p>旅话题</p>
			<div class="neirong">
				<div class="biaoti">
					<mt-navbar v-model="selected">
						<mt-tab-item id="1">推荐文章</mt-tab-item>
						<mt-tab-item id="2">话题专栏</mt-tab-item>
					</mt-navbar>
				</div>
				
				
				
				<!-- tab-container -->
				<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1">
						<div class="wenzhang">
							<div class="wzitme">
								<div class="wzitmetu">
									<img src="../assets/wenzhangtu.jpg"/>
								</div>
								<p>打卡纽约，双城连游！</p>
								<div class="weizhi">
									<img src="../assets/位置图标.png"/>
									
									在纽约
								</div>
							</div>
							<div class="wzitme">
								<div class="wzitmetu">
									<img src="../assets/wenzhangtu.jpg"/>
								</div>
								<p>打卡纽约，双城连游！</p>
								<div class="weizhi">
									<img src="../assets/位置图标.png"/>
									
									在纽约
								</div>
							</div>
							
						</div>
						
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<div class="huati">
							<p>#周末好去处</p>
							<p>#假期去哪玩</p>
							<p>#取景打卡地</p>
						</div>
						<div class="da">
							<div class="ht-itme">
								<div class="shangtu">
									<div class="biaoqian">
						    			<img src="../assets/位置图标.png"/>
						    			上野公园
						    		</div>
						    		<img class="datu" src="../assets/lvhttp.png"/>
								</div>
					    		
					    		<div class="neirongg">
					    			<p>带着背包去稻城——稻城亚丁#色达</p>
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
					    	</div>
					    	<div class="ht-itme">
					    		<div class="shangtu">
					    			<div class="biaoqian">
						    			<img src="../assets/位置图标.png"/>
						    			上野公园
						    		</div>
						    		<img class="datu" src="../assets/lvhuatitu2.png"/>
					    		</div>
					    		
					    		<div class="neirongg">
					    			<p>带着背包去稻城——稻城亚丁#色达</p>
					    			<div class="dianzan">
					    				<div class="ren">
					    					<img src="../assets/gltx.png"/>
					    					<span>叶疏远</span>
					    				</div>
					    				<div class="zan">
					    					<img src="../assets/dianzantubiao1.png"/>
					    					<span>0</span>
					    				</div>
					    			</div>
					    		</div>
					    	</div>
						</div>
				    	
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
		
		<div class="gao">
			
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
export default {
	data(){
		return {
			selected:"2"
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.gao{
	height: 0.8rem;
}
.fu{
	overflow-x: scroll;
}
.lvbanzhuanlan{
	.lb-wen{
		padding: 0.15rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		
		.lb-le{
			font-size: 0.2rem;
		}
		.lb-ri{
			font-size: 0.14rem;
		}
	}
	.xia{
		display: flex;
		width: 6rem;
		padding: 0 0.15rem 0.1rem;
		.xia-one{
			margin-right:0.2rem ;
			overflow: hidden;
			background: #d9f9f6;
			border-radius:0.1rem ;
			width: 1.5rem;
			box-shadow: 0 0 0.1rem rgba(0,0,0,.1);
			text-align: center;
			img{
				width: 50%;
				margin: 0.2rem 0.2rem 0;
			}
			p{
				margin: 0.1rem;
			}
			.xia-onewen{
				height: 0.35rem;
				line-height: 0.35rem;
				background: #91e9ea;
				font-size: 0.14rem;
			}
		}
	}
}
.lvhuati{
	padding: 0.15rem;
	p{
		font-size: 0.2rem;
	}
	.neirong{
		
		.biaoti{
			width: 2rem;
			
			.is-selected{
				color: #f7b902;
				border-bottom: none;
			}
			.mint-tab-item .mint-tab-item-label{
				font-size: 0.16rem;
			}
			
		}
		.huati{
			display: flex;
			
			p{
				font-size: 0.14rem;
				border: 1px solid #666666;
				padding: 0.02rem 0.1rem;
				border-radius:0.5rem ;
				margin: 0.05rem;
			}
			
			
		}
	}
	.da{
		display: flex;
		flex-wrap:wrap ;
	}
	.ht-itme{
		
		margin: 0.05rem;
		border-radius:0.1rem ;
		overflow: hidden;
		width: 47%;
		padding-bottom:0.15rem ;
		box-shadow: 0 0 0.05rem rgba(0,0,0,.1);
		.shangtu{
			overflow: hidden;
			position: relative;
			height:1.5rem;
			.biaoqian{
				background: rgba(0,0,0,.4);
				border-radius:0.5rem ;
				padding: 0.02rem 0.1rem;
				position: absolute;
				font-size:0.12rem;
				color:#fff;
				z-index: 1;
				bottom: 0.1rem;
				left: 0.1rem;
				img{
					
					width: 0.11rem;
					margin-right: 0.02rem;
					vertical-align: sub;
				}
			}
			.datu{
				min-height: 0.15rem;
				position: absolute;
				
			}
		}
		
		.neirongg{
			p{
				padding: 0.1rem;
				font-size: 0.14rem;
			}
			.dianzan{
				display: flex;
				justify-content: space-between;
				padding: 0 0.1rem;
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
		}
		
	}
	.wenzhang{
		
		.wzitme{
			position: relative;
			
			.wzitmetu{
				overflow: hidden;
				width: 100%;
				height: 1.4rem;
				border-radius: 0.1rem;
				img{
					width: 100%;
				}
			}
			p{
				font-size: 0.16rem;
				margin: 0.1rem 0 0.15rem;
			}
			.weizhi{
				position: absolute;
				top: 1.13rem;
				left: 0.05rem;
				font-size: 0.14rem;
				color: #F0F0F0;
				img{
					width: 0.11rem;
					vertical-align: sub;
				}
			}
		}
	}
}
</style>