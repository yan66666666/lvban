<template>
	<div class="myjieban">
		<my-header2>
			<img slot="left" src="../assets/返回.png" @click="fanhui()"/>
			我的结伴
		</my-header2>
		<div class="neirong">
			<div class="biaoti">
				<mt-navbar v-model="selected">
					<mt-tab-item id="1">我发起的</mt-tab-item>
					<mt-tab-item id="2">我结伴的</mt-tab-item>
				</mt-navbar>
			</div>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="da">
						<div class="itme" v-for="(i,j) in wfbd" :key="j" @click="qu(i._id)">
							<div class="shang">
								<div class="yonghu">
									<div class="">
										<img :src="myuser.userimg"/>
									</div>
									<p>{{myuser.userName}}</p>
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
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="da">
						<div class="itme" v-for="(i,j) in wjbd" :key="j" @click="qu(i._id)">
							<div class="shang">
								<div class="yonghu">
									<div class="">
										<img :src="wjbduser[j].userimg"/>
									</div>
									<p>{{wjbduser[j].userName}}</p>
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
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	data(){
		return {
			selected:"1",
			wfbd:[],
			wjbd:[],
			arr:"",
			myuser:{},
			wjbduser:[]
		}
	},
	computed:{
		...mapState(["tel"])
	},
	async created(){
		let withs = await this.$http.get("/withs")
		this.arr = withs.data
		for(let i=0;i<withs.data.length;i++){
			if(withs.data[i].tel == this.tel){
				this.wfbd.push(withs.data[i])
				let login = await this.$http.get("/user?tel="+withs.data[i].tel)
				this.myuser = login.data
			}
			if(withs.data[i].register.indexOf(this.tel)!=-1){
				this.wjbd.push(withs.data[i])
				let login = await this.$http.get("/user?tel="+withs.data[i].tel)
				this.wjbduser.push(login.data)
			}
		}
//		this.arr.forEach(async i=>{
//			let login = await this.$http.get("/user?tel="+i.tel)
//			this.user.push(login.data)
//		})
		
	},
	methods:{
		
		fanhui(){
			this.$router.push("/my")
		},
		
		qu(id){
			this.$store.commit("changxq","/myjieban")
			this.$router.push("/detail?id="+id)
		}
	}
}
</script>

<style scoped lang="less">
.myjieban{
	/deep/.mint-navbar .mint-tab-item.is-selected{
		border-bottom:0.02rem solid #FFBE00 ;
		color: #FFBE00;
	}
	/deep/.mint-tab-item-label{
		font-size: 0.16rem;
	}
	.neirong{
		border-top:1px solid #DEDEDE ;
		
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
}
</style>