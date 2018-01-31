<template>
  <section>
      <headers :session="userName"></headers>
      <el-row type="flex" class="row-bg" justify="center">
          <div class="inputlength">
            <ui-textbox
                floating-label
                label="用户名"
                class="labels"
                autofocus='true'
                required='true'
                placeholder="用户名"
                v-model="userName">
            </ui-textbox>
            <ui-textbox
                floating-label
                label="密码"
                class="labels"
                required='true'
                type='password'
                placeholder="密码"
                v-model="password">
            </ui-textbox>
            <ul class="input-box">
                <li class="input-bottom1">
                    <ui-checkbox v-model="check1"><span class="password-flog">记住密码</span></ui-checkbox>
                </li>
                <li class="input-bottom">
                    <span>忘记密码</span>
                </li>
 
            </ul>
            <ui-button color="green" :size="large" @click='login'>登录</ui-button>
          </div>
      </el-row>
  </section>
</template>
<script>
import headers from '@/components/Header'
import { signin } from '@/data/Data'
export default {
  name: 'login',
  components:{
        headers
       },
  data(){
      return {
      userName:'',
      password:'',
      check1: false,
      }
  },
  computed:{
        userName(){ 
           // console.log(localStorage.getItem('avator'))
            return localStorage.getItem('user') ? localStorage.getItem('user') : '';
        },
  },
  methods:{
      login(){
             if (this.userName === '' || this.password === '') {
                this.$message.error('用户名/密码不能为空');
                return;
            }
            signin(this.userName,this.password).then(res => {
                var data = JSON.parse(res);
               
                if(data.session){
                    this.$message.success('登录成功');
                    this.session = data.session.user;
                    localStorage.setItem('user',this.userName)
                    setTimeout(() => {
                        this.$router.push({path:'/'})
                    },1000)
                }else if(res == '4'){
                    this.$message.error('密码错误');
                    this.userName = '';
                    this.password = '';
                }
            })
        }
  }

}
</script>

<style lang="scss" scoped>
.row-bg{
     align-items: center;
     min-height: calc(100vh - 200px);
}
.inputlength{
    width: 360px;
    .labels{
        width: 100%;
    }
}
.password-flog{
    font-size: 12px;
    color: #909399
}
.input-bottom1{
    float: left;
}
.input-bottom{
    float: right;
    height: 30px;
    line-height: 25px;
    span{
        color: #909399
    }
}
.input-box{
    height: 70px;
}
</style>


