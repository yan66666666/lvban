<template>
	<div class="lvpai">
		<my-header2>
	    	
	    	发布动态
	    	<button slot="right" @click="sub()">发布</button>
	    </my-header2>
		
		<div class="tianjiatp">
			<el-upload
			  :action="$URL"
			  list-type="picture-card"
			  :limit="num"
			  :before-upload="beforeupload"
			  :on-success="handleAvatarSuccess"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</div>
		<!--<div class="title">
			<input type="text" v-model="title" placeholder="标题：写下你的目的地，会被更多人找到" />
		</div>-->
		<div class="neirong">
			<textarea rows="" cols="" v-model="content" placeholder="请输入你的内容"></textarea>
		</div>
		<!--<div class="didian">
			<p>添加地点</p>
			<div class="dizhi">
				<div class="left">
					<input type="text" placeholder="出发地"/>
				</div>
				<div class="tu">
					<img src="../assets/交换.png"/>
				</div>
				<div class="right">
					<input type="text" placeholder="目的地" />
				</div>
			</div>
		</div>-->
		<div class="fenlei">
			<div class="meiyige" :class="ac==j && active" @click="acti(j)" v-for="(i,j) in biaoqian" :key="j">
				<div class="dian"></div>
				<p>{{i}}</p>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
    data() {
      return {
//    	title:"",
      	content:"",
      	biaoqian:["一个人的旅行","一个人","周末去哪玩","美食","景点","假期好去处"],
        dialogImageUrl: [],
        dialogVisible: false,
      	imageUrl:[],
		num:3,
		auto:false,
        ruleForm:{
        	pic:[]
        },
        active:"active",
        ac:0
      };
    },
    computed:{
		...mapState(["tel"])
	},
    methods: {
      handleRemove(file, fileList) {
//    	this.ruleForm.pic = this.ruleForm.pic.filter(i=>i.urls==file.url)
//      console.log(file, fileList,this.ruleForm);
      },
      handlePictureCardPreview(file) {
      	console.log(file)
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeupload (file) {

		const isJPG = /\.(jpg|jpeg|gif|png)$/i.test(file.name);
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
	  },
	  handleAvatarSuccess(res, file) {
       console.log(res)
       console.log(file)
       this.ruleForm.pic.push(this.$URL+res);
       //	console.log(this.ruleForm.pic)
       
        this.imageUrl.push(URL.createObjectURL(file.raw));
     },
     async sub(){
     	if(this.tel){
     		let obj = {
	     		content:this.content,
	     		pic: JSON.stringify(this.ruleForm.pic),
	     		lab:this.biaoqian[this.ac],
	     		tel:this.tel
	     	}
     		let res = await this.$http.post("/dynamic",obj)
     		console.log(res)
     		this.$router.push("/my")
     	}else{
     		this.$store.commit("changepas","/lvpai")
			this.$toast("您还没有登录，请先登录")
			this.$router.push("/login")
     	}
     	
     	
     },
     acti(j){
     	this.ac = j
     }

    }
  }
</script>

<style lang="less">
.lvpai{
	button{
	background: #F8CE00;
	border: none;
	padding: 0.05rem 0.15rem;
	margin-right: 0.1rem;
	border-radius:0.4rem ;
}
.tianjiatp{
	padding: 0.1rem;
	border-bottom: 1px solid #d9d9d9;
}

.el-upload--picture-card{
	width: 0.8rem;
	height:0.8rem;
	line-height: 0.8rem;
}
.el-upload-list--picture-card .el-upload-list__item{
	width: 0.8rem;
	height: 0.8rem;
	
}
.el-progress-circle{
	display: none;
}
.el-upload-list--picture-card .el-progress{
	width: 0.8rem;
	height: 0.8rem;
	div{
		width: 100%;
	}
}
.el-upload-list--picture-card .el-upload-list__item-status-label i{
	margin-top:-0.08rem;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #d9d9d9;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
  }
  .avatar {
    width: 0.8rem;
    height: 0.8rem;
    display: block;
  }
 .lvpai{
 	padding: 0.1rem;
 }
 .title{
 	border-bottom: 1px solid #d9d9d9;
 	input{
 		border: none;
 		width: 100%;
 		line-height: 2em;
 		padding: 0.1rem;
 		font-size: 0.16rem;
 	}
 }
 .neirong{
 	padding: 0.05rem;
 	border-bottom: 1px solid #d9d9d9;
 	textarea{
 		border: none;
 		width: 100%;
 		height: 1.5rem;
 		font-size: 0.18rem;
 		padding: 0.1rem;
 	}
 }
 .didian{
 	margin-top: 0.1rem;
 	border-bottom: 1px solid #d9d9d9;
 	
 	/*.dizhi{
 		
 		display: flex;
 		text-align: center;
 		
 		align-items: center;
 		.tu{
 			width: 0.25rem;
 			padding: 0;
 		}
 		div{
 			padding: 0.1rem;
 		}
 		input{
 			width: 100%;
 			height: 0.5rem;
 			line-height: 0.5rem;
 			text-align: center;
 			font-size: 0.16rem;
 			border: none;
 		}
 	}*/
 }
 .fenlei{
 	display: flex;
 	flex-wrap:wrap ;
 	padding: 0.1rem 0;
 	.meiyige{
 		font-size: 0.14rem;
 		border: 1px solid #666666;
 		margin: 0.08rem;
 		border-radius:0.4rem ;
 		display:flex;
 		align-items: center;
 		padding:0.02rem 0.1rem;
 		.dian{background: #F7B902; width: 0.05rem; height: 0.05rem; border-radius:50% ; margin-right:0.1rem ;}
 		
 	}
 	.active{
 		background: #F7B902;
 		border: none;
 		color: #fff;
 		.dian{
 			background: #fff;
 			
 		}
 	}
 }
	
	
	
}

</style>