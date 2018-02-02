<template>
  <section>
    <headers></headers>
      <div class="main">
          <div class="edit">
              <el-input v-model="title" placeholder="请输入标题" class='title'></el-input>
              <vue-editor v-model="content" @keyup.enter="report"></vue-editor>
              <div class="btnclass">
              <el-button type="primary" @click="report">提交</el-button>
              <el-button>清空</el-button>
              </div>
          
          </div>
 
<side></side>
      </div>
         
  </section>    
</template>
<script>
import { VueEditor } from 'vue2-editor'
import { create ,checkUser } from '@/data/Data'
import side from '@/components/Side'
import headers from '@/components/Header'
export default {
  name: 'articles', 
  components:{
  side,
  headers,
  VueEditor
   }, 
  data(){
      return {
            content:'',
            title:'',
            id:'',
            name:'',
      }
  },
  mounted () {
        checkUser(localStorage.getItem('user'),localStorage.getItem('token')).then(data => {
            if (data == 'success') {
                this.id = localStorage.getItem('id');
                this.name = localStorage.getItem('user');
                // this.$router.push({path:'/'})
            }else if(data == 'expired'){
                this.$message.warning('登录信息已经过期');
                this.createUser('')
                 setTimeout(()=>{
                        this.$router.push({path:'/login'})
                    },1500)
                localStorage.clear()
            }else{
                localStorage.clear()
            }
        })
    },
  methods:{
      initDate(){
        //   localStorage.getItem('user')
      },
      report(){
       //  console.log(this.content)
         create(this.title,this.content,this.id,this.name).then(data=>{
                console.log(data)
         })
      }
  }
}
</script>
<style lang="scss" scoped>
 .main{
     width: 1070px;
     margin: 80px auto 0;
     .edit{
     width: 68%;
     float: left;
     margin-right: 30px; 
     .btnclass{
         margin-top: 10px;
     }
     .title{
         margin-bottom: 10px;
     }
     }
 }
</style>


