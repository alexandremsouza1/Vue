<template>
<section>   
    <transition name="fade"><loading v-show="showLoading"></loading></transition>
    <section id="main">
  <div class="blog">
    <headers></headers>
    <div>
        <div class="Header">
            <h1>{{lists.title}}</h1>
            <div class="Header-data">
            <span>{{lists.moment}}</span>  浏览次数：<span>{{lists.pv}}</span>
            </div>
        </div>
        <div class="posts" v-html="lists.md">
            
        </div>
        <div v-if="lists.name === userInfo">
            <span @click="deletepost(lists.id)">删除</span><router-link :to="{path: '/edit', query:{id:postsid}}">编辑</router-link>
        </div>
        <!-- <div class="bottom-blog">
            <ul>
                <li>{{lists.commentLenght}}</li>
            </ul>
        </div> -->
        <div class="post-box">
        <h4 class="post-box-title">
        {{commentLenght}}条评论
        </h4>
        </div>
   <template v-if="userInfo == ''">
    <div>需要登录后才能评论</div>
   </template>
    <template v-else>
       <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="content">
        </el-input>
        <el-button type="primary" class="submit" @click='submit'>提交留言</el-button>
    </template>
        <div class="comment-holder">
            <ul>
                <li class="comment" v-for="(comment,index) in comments" :key="index">
                    <template v-if="comment.avator != '' ">
                    <div class="avatar-image-container"><img :src="base + comment.avator"></div>
                    </template>
                    <template v-else>
                        <div class="avator">
                        {{comment.name.charAt(0)}}
                        </div>
                    </template>
                    <div class="comment-block">
                        <div class="comment-header">
                                <a class="nofollow" href="">{{comment.name}}</a>
                                <span class="datetime">{{comment.moment}}</span>
                                <p class="comment-content" v-html="comment.content"></p>
                                <span v-if="comment.name === userInfo" @click="delete_comment(comment.id)">删除</span>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>    
  </div>
  <side></side>
</section>
</section>
 </template>
    <script>
    import side from '@/components/Side'
    import headers from '@/components/Header'
    import loading from '@/components/loading'
    import { singlePostData,comment,delete_comment,delete_posts } from '@/data/Data'
    import { mapState} from 'vuex' 
    export default {
       name: 'Detail',
       components:{
        side,
        headers,
        loading
       },
      data(){
        return {
        lists:'',
        postsid:'',
        showLoading:true,
        commentLenght:'',//留言个数
        content:'',//留言内容
        routerId:'',//路由
        comments:'',//评论

        base:'http://localhost:3000/images/',
        
        }
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'initData', 
      },
      computed:{
       ...mapState([
            'userInfo',
        ]),
        avator(){ 
          return localStorage.getItem('avator');
        },
      },
      mounted () {
       this.initData()
      },
      methods:{
            initData () {
            this.routerId = this.$route.params.id;
            singlePostData(this.routerId).then(data =>  {
                this.lists = data.posts;
                this.postsid = data.posts.id;
                this.commentLenght= data.commentLenght;
                this.comments = data.pageOne;
                this.showLoading = false;
               // console.log(data)
            })
            .catch(e => console.log("error", e)) 
            },

            submit(){
             if (this.content == '') {
                this.$message.warning('请输入评论内容');
                this.content = '';
                return
            }
            var avator = this.avator == null ? '' : this.avator;
            comment(this.content,this.routerId,this.userInfo).then(data =>{
                     if(data){
             this.$message.success('评论成功');
             this.initData ()
             this.content = '';
                     }else{
             this.$message.error('评论失败');
                     }
            }).catch(e => console.log("error", e)) 

            },
            delete_comment(id){
                delete_comment(this.postsid,id,this.userInfo).then(data=>{    
                this.initData ()
                this.$message.success('删除成功');
                }).catch(e => console.log("error", e))
            },
            deletepost(id){
                delete_posts(id,this.userInfo).then(data=>{
                   console.log(data)
                   
                   this.$message.success('删除成功');
                   setTimeout(() => {
                   this.$router.push({path:'/mypost'})
                   })
                })  
            }  

 
      }

    }
    </script>

 <style lang="scss" scoped>
     .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
  html{font-size: 62.5%;}
  #main{
    width: 1070px;
    margin: 80px auto 0;
    display: flex;
    .blog{
      width: 68%;
      margin-right: 30px;
      .Header{
      text-align: center;
      h1{
          font-size: 30px;
          margin: 0 0 20px;
      }
      .Header-data{
          margin: 0 0 20px;
          font-size: 10px;
          color: #b4b4b4;
      }
      }  
      .bottom-blog{
          margin-top: 35px;
          padding-bottom: 15px;
          padding: 13px 0;
      }
      .post-box{
          text-align: center;
          .post-box-title{
            margin-top: 0;
            font-style: normal;
            margin-bottom: 20px;
            color: #282828;
            font-size: 16px;
            text-transform: uppercase;
            font-family: "lato";
            margin: 0 0 30px 0;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 1px;
            position: relative;
            text-align: center;
            border-bottom: 1px solid #282828;
            display: inline-block;
          }
      }
      .comment-holder{
          li{
                border-bottom: 1px dotted #eee;
                margin-top: 20px;
                margin-bottom: 34px;
                padding-bottom: 40px;
          }
      }
    }
  }
 .comment-header{
     a{
    display: block;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 6px;
    color: #333;
    font-family: "Open Sans";
     }
     .datetime{
    font-size: 14px;
    color: #999;
    font-style: italic;
    display: block;
    margin-bottom: 10px;
     }
 }
 .avatar-image-container{
    float: left;
    max-height: 50px;
    overflow: hidden;
    width: 50px;
    img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    max-width: 50px;
    max-height: 50px;
    }
 }
 .comment-block{
    margin-left: 80px;
    position: relative;
 }
 .submit{
     margin-top: 10px;
 }
.avator{
	width: 60px;
	height: 60px;
	border-radius:50%;
    float: left;
	background: #4ebf60;
	text-align: center;
	line-height:60px;
	color: #fff;
	font-size: 16px;
	overflow: hidden;
	flex: none;
	img{
		width: 100%;
		height: 100%;
	}
    }
    </style>

