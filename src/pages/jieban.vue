<template>
	<div class="jiebann">
		<my-header2>
			<router-link slot="left" style="width: 0.25rem; display: block; margin: 0 auto;" to="/shequ" tag="span">
				<img src="../assets/返回.png"/>
			</router-link>
			结伴
			<img slot="right" src="../assets/攻略-消息.png"/>
		</my-header2>
		<div class="da">
			<div class="itme" v-for="(i,j) in arr" :key="j" @click="qu(i._id)">
				<div class="shang">
					<div class="yonghu">
						<div class="">
							<img :src="user[j].userimg"/>
						</div>
						<p>{{user[j].userName}}</p>
					</div>
					<div class="shanchu" @click="guanbi(j)">
						<img src="../assets/关  闭.png"/>
					</div>
				</div>
				<div class="zhong">
					<div class="left">
						<p>{{i.title}}</p>
						<div class="lu">
							<span>路线：{{i.chufa}} - {{i.mudidi}}</span>
							<span>时间：{{i.riqi}} - {{i.riqi}}</span>
						</div>
					</div>
					<div class="right">
						<img :src="JSON.parse(i.pic)[0]"/>
					</div>
				</div>
				<div class="xia">
					
				</div>
			</div>
			
		</div>
		<div style="height: 0.5rem;"></div>
		
		
		<div class="di">
			<my-button @sub="fabu()">发布结伴</my-button>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	data(){
		return {
			arr:"",
			user:[]
		}
	},
	computed:{
		...mapState(["xiangqing"])
	},
	async created(){
		let withs = await this.$http.get("/withs")
		this.arr = withs.data
		this.arr.forEach(async i=>{
			let login = await this.$http.get("/user?tel="+i.tel)
			this.user.push(login.data)
		})
		
	},
	methods:{
		fabu(){
			this.$router.push("/fabu")
			
		},
		guanbi(j){
			this.arr.splice(j,1)
		},
		qu(id){
			this.$store.commit("changxq","/jieban")
			this.$router.push("/detail?id="+id)
		}
	}
}
</script>

<style lang="less">
.jiebann{
	
	.di{
		background: #fff;
		padding: 0.1rem 0.15rem;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.da{
		padding: 0.15rem;
		.itme{
			margin-bottom: 0.2rem;
			.shang{
				display: flex;
				justify-content: space-between;
				.yonghu{
					
					display: flex;
					align-items: center;
					div{
						border: 2px solid #F8CE00;
						border-radius:50% ;
						width: 0.35rem;
						height: 0.35rem;
						img{
							border-radius:50% ;
							height: 100%;
						}
						
					}
					p{
						font-size: 0.14rem;
						margin-left: 0.05rem;
					}
				}
				.shanchu{
					width: 0.15rem;
					img{
						width: 100%;
					}
				}
			}
			.zhong{
				margin-top:0.1rem ;
				display: flex;
				.left{
					flex: 1;
					p{
						font-size: 0.18rem;
						font-weight: bold;
					}
					div{
						margin-top: 0.2rem;
						font-size: 0.14rem ;
						color: #636363;
						span{
							display: block;
						}
					}
				}
				.right{
					width: 0.9rem;
					height: 0.9rem;
					img{
						border-radius: 0.1rem;
						width: 100%;
						height: 100%;
					}
				}
				
			}
		}
	}
			
}
</style>