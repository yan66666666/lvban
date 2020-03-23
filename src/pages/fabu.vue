<template>
	<div class="jieban">
		<my-header2>
			<router-link slot="left" style="width: 0.25rem; display: block; margin: 0 auto;" to="/jieban" tag="span">
				<img src="../assets/返回.png"/>
			</router-link>
			发布结伴
		</my-header2>
		<div class="didian">
			<div>
				<p>出发地</p>
				<div>
					<input type="text" v-model="chufa" placeholder="请输入出发地"/>
				</div>
			</div>
			<div >
				<p>目的地</p>
				<div>
					<input type="text" v-model="mudidi" placeholder="请输入出发地"/>
				</div>
			</div>
			<div class="shijian">
				<p>选择时间</p>
				<div style="border: none;">
					<input type="date" v-model="da"/>
				</div>
				
			</div>
		</div>
		<div class="neirong">
			<div class="title">
				<p>结伴标题</p>
				<div>
					<input type="text" v-model="title" placeholder="请输入出发地"/>
				</div>
			</div>
			<div class="nei">
				<span>结伴详情</span>
				<textarea v-model="content" placeholder="为什么结伴，结伴介绍，你是谁，希望小伙伴是谁，主义事项，尽可能的详细秒是哦"></textarea>
			</div>
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
    data() {
      return {
      	chufa:"",
      	mudidi:"",
      	da:"",
      	title:"",
      	content:"",
        dialogImageUrl: [],
        dialogVisible: false,
      	imageUrl:[],
		num:3,
		auto:false,
        ruleForm:{
        	pic:[]
        }
      };
    },
    computed:{
		...mapState(["tel"])
	},
    methods: {
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
     async fabu(){
     	if(this.tel){
     		let obj = {
     			chufa:this.chufa,
		      	mudidi:this.mudidi,
		      	riqi:this.da,
     			title:this.title,
	     		content:this.content,
	     		pic: JSON.stringify(this.ruleForm.pic),
	     		tel:this.tel
	     	}
     		let res = await this.$http.post("/withs",obj)
     		console.log(res)
     		this.$router.push("/jieban")
     	}else{
     		this.$store.commit("changepas","/fabu")
			this.$toast("您还没有登录，请先登录")
			this.$router.push("/login")
     	}
     	
     	
     }

    }
  }
</script>

<style lang="less">
.jieban{
	min-height: 6.67rem;
	background: #f8f9fb;
	.di{
		background: #fff;
		padding: 0.1rem 0.15rem;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.didian{
		background: #fff;
		border-radius:0.1rem ;
		padding: 0.1rem;
		margin: 0.15rem;
		div{
			display: flex;
			border-bottom:1px solid #f4f6fb ;
			line-height: 0.45rem;
			p{
				padding-left: 0.1rem;
				flex: 2;
			}
			div{flex: 5;
				input{
					font-size: 0.16rem;
					border: none;
					
				}
			}
		}
		.shijian{
			border: none;
			p{
				padding-left: 0.1rem;
				flex: 2;
			}
			div{flex: 5;
				
			}
		}
		
	}
	.neirong{
		background: #fff;
		border-radius:0.1rem ;
		padding: 0.1rem;
		margin: 0.15rem;
		.title{
			display: flex;
			border-bottom:1px solid #f4f6fb ;
			line-height: 0.45rem;
			p{
				padding-left: 0.1rem;
				flex: 2;
			}
			div{flex: 5;
				input{
					font-size: 0.16rem;
					border: none;
					line-height: 0.45rem;
				}
			}
		}
		.nei{
			padding: 0.1rem;
			border-bottom:1px solid #f4f6fb ;
			span{
				display: block;
			}
			textarea{
				height: 1rem;
				border: none;
				width: 100%;
				font-size: 0.16rem;
				margin-top: 0.1rem;
			}
		}
	}
	
	
	.tianjiatp{
	padding: 0.1rem;
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
	
}
</style>