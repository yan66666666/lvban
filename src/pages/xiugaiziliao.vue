<template>
	<div class="xiugai">
		<my-header2>
			<router-link to="/my" slot="left" tag="span">
				取消
			</router-link>
			编辑资料
			<span slot="right" class="wancheng" @click="wancheng()">完成</span>
		</my-header2>
		<div class="touxiangs">
			<el-upload
			  class="avatar-uploader"
			  :action="$URL"
			  :show-file-list="false"
			  :on-success="handleAvatarSuccess"
			  :before-upload="beforeAvatarUpload">
			  <img v-if="imageUrl" :src="user.userimg" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</div>
		
		
		<mt-field label="用户名" placeholder="请输入用户名" v-model="user.userName"></mt-field>
<mt-field label="个性签名" placeholder="请输入个性签名" v-model="user.signa"></mt-field>
<mt-field label="年龄" placeholder="请输入年龄" v-model="user.age"></mt-field>
<mt-field label="性别" placeholder="请输入性别" v-model="user.sex"></mt-field>
		<!--<div class="xixi">
			<div>
				<span>用户名：</span>
				<input type="text" placeholder="请输入用户名" />
			</div>
			<div>
				<span>个性签名：</span>
				<input type="text" placeholder="请输入个性签名" />
			</div>
			<div>
				<span>性别：</span>
				<input type="text" placeholder="请输入用户名" />
			</div>
			<div>
				<span>年龄：</span>
				<input type="text" placeholder="请输入用户名" />
			</div>
		</div>-->
	</div>
	
</template>

<script>
import { mapState } from "vuex"
export default {
	data() {
	  return {
	    user:""
	  };
	},
	computed:{
		...mapState(["tel"])
	},
	async created(){
		let user = await this.$http.get("/user?tel="+this.tel)
		console.log(user.data)
		this.user = user.data
		this.imageUrl = this.user.userimg
	},
	methods: {
		handleAvatarSuccess(res, file) {
			console.log(res)
		    this.user.userimg = this.$URL+res;
		},
		beforeAvatarUpload(file) {
		    const isJPG = file.type === 'image/jpeg';
		    const isLt2M = file.size / 1024 / 1024 < 2;
		
		    if (!isJPG) {
		        this.$message.error('上传头像图片只能是 JPG 格式!');
		    }
		    if (!isLt2M) {
		        this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	   },
	   async wancheng(){
	   	this.user.age = parseInt(this.user.age)
	   	let user = await this.$http.put("/user?tel="+this.tel,this.user)
	   	this.$router.push("/my")
	   }
	}
}
</script>

<style lang="less">
.wancheng{
	color: #F7B902;
}
.touxiangs{
	width: 0.8rem;
	margin: 0.4rem auto;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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
  .avatar-uploader .el-upload{
  	border: none;
  }
  .xixi{
  	
  }
</style>