<template>
	<div class="fens">
		<my-header2>
			
			<img slot="left" src="../assets/返回.png" @click="fanhui()"/>
			<span v-if="wdgz">粉丝</span>
			<span v-else>他的粉丝</span>
			
		</my-header2>
		<mt-search v-model="value"></mt-search>
		<h1>全部粉丝</h1>
		<div class="yh">
			<div class="xh" v-for="(i,j) in fans">
				<div class="left">
					<img :src="i.userimg"/>
					<div class="xingbie">
						<img src="../assets/nan.png" v-if="i.sex=='男'"/>
						<img src="../assets/nv.png" v-else/>
					</div>
					
				</div>
				<div class="zhong">
					<p>{{i.userName}}</p>
					<span>{{i.signa}}</span>
				</div>
				<div class="right">
					<button @click="qx(j)" v-if="i.gzs">已关注</button>
					<button @click="gz(j)" class="gz" v-else>关注ta</button>
					
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
			users:[],
			gzmy:[],
			fans:[],
//			gzs:[false],
			my:{},
			wdgz:false,
		}
	},
	computed:{
		...mapState(["tel","pas"])
	},
	async created(){
		let uss = await this.$http.get("/users")
		this.users = uss.data
		let usmy = await this.$http.get("/user?tel="+this.tel)
		this.my = usmy.data
		for(let i=0;i<this.users.length;i++){
			if(this.users[i].attention.indexOf(this.$route.query.tel)!=-1){
				this.gzmy.push(this.users[i].tel)
			}
		}
		
		for(let i=0;i<this.gzmy.length;i++){
			let us = await this.$http.get("/user?tel="+this.gzmy[i])
			this.fans.push(us.data)
			if(this.my.attention.indexOf(this.gzmy[i])!=-1){
				this.fans[i].gzs = true
			}else{
				this.fans[i].gzs = false
			}
		}
		
		if(this.tel == this.$route.query.tel){
			this.wdgz = true
		}
	},
	methods:{
		async qx(j){
			if(this.wdgz){
				this.my.attention.splice(j,1)
				
				let sc = await this.$http.put("/useratt?tel="+this.tel,this.my.attention)
			}else{
				
				for(let i=0;i<this.my.attention.length;i++){
					if(this.my.attention[i]==this.gzmy[j]){
						this.my.attention.splice(i,1)
						
					}
				}
				let sc = await this.$http.put("/useratt?tel="+this.tel,this.my.attention)
				//展现数据
				let a = []
				for(let i=0;i<this.gzmy.length;i++){
					let us = await this.$http.get("/user?tel="+this.gzmy[i])
					a.push(us.data)
					if(this.my.attention.indexOf(this.gzmy[i])!=-1){
						a[i].gzs = true
					}else{
						a[i].gzs = false
					}
				}
				this.fans = a
				
			}
		},
		async gz(j){
			this.my.attention.push(this.gzmy[j])
			
			let sc = await this.$http.put("/useratt?tel="+this.tel,this.my.attention)
			
			//展现数据
			let a = []
			for(let i=0;i<this.gzmy.length;i++){
				let us = await this.$http.get("/user?tel="+this.gzmy[i])
				a.push(us.data)
				if(this.my.attention.indexOf(this.gzmy[i])!=-1){
					a[i].gzs = true
				}else{
					a[i].gzs = false
				}
			}
			this.fans = a
		},
		fanhui(){
			this.$router.push(this.pas)
			this.$store.commit("changepas","/")
		}
	}
}
</script>

<style scoped lang="less">
.fens{
	background: #f8f9fb;
	height: 6.67rem;
	/deep/.mint-searchbar{
		background: #f8f9fb;
	}
	/deep/.mint-search{
		height: auto;
	}
	h1{
		font-weight: normal;
		font-size: 0.14rem;
		padding: 0.08rem 0.15rem 0 ;
	}
	.yh{
		padding-top:0.1rem ;
		.xh{
			display: flex;
			align-items: center;
			padding: 0.15rem;
			background: #fff;
			border-bottom: 1px solid #DEDEDE;
			.left{
				
				width: 0.5rem;
				height: 0.5rem;
			
				position: relative;
				.tx{
					width: 0.5rem;
					height: 0.5rem;
					border-radius:50% ;
				}
				.xingbie{
					position: absolute;
					bottom: 0;
					right: 0;
					width: 0.22rem;
				}
				img{
					height: 100%;
					border-radius:50% ;
				}
			}
			.zhong{
				flex: 1;
				padding: 0 0.1rem;
				p{
					font-size: 0.16rem;
				}
				span{
					color: #8C939D;
					font-size: 0.12rem;
				}
			}
			.right{
				button{
					background:none ;
					border: 1px solid #FFBE00;
					padding: 0.05rem 0.1rem;
					border-radius:0.2rem ;
					color: #FFBE00;
				}
				.gz{
					background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#ffd101), to(#f7b604)) ;
					border: none;
					padding: 0.05rem 0.1rem;
					border-radius:0.2rem ;
					color: #fff;
				}
			}
		}
	}
}
</style>