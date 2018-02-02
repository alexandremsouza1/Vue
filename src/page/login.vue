<template>
  <section>
      <headers></headers>
      <el-row type="flex" class="row-bg" justify="center">
          <div class="inputlength">
            <ui-textbox
                floating-label
                label="用户名"
                class="labels"
                placeholder="用户名"
                v-model="userName">
            </ui-textbox>
            <ui-textbox
                floating-label
                label="密码"
                class="labels"
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
            <ui-button color="green" @click='login'>登录</ui-button>
          </div>
      </el-row>
  </section>
</template>
<script>
import headers from '@/components/Header'
import { signin ,checkUser } from '@/data/Data'
import { mapActions } from 'vuex'
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
        userNames(){ 
           // console.log(localStorage.getItem('avator'))
            return localStorage.getItem('user') ? localStorage.getItem('user') : '';
        },
  },
  mounted () {
      // console.log(localStorage.getItem('token'))
        checkUser(localStorage.getItem('user'),localStorage.getItem('token')).then(data => {
            //console.log(data)
            if (data == 'success') {
                this.createUser(localStorage.getItem('user'))
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
       ...mapActions([
            'createUser'
        ]),
      login(){
             if (this.userName === '' || this.password === '') {
                this.$message.error('用户名/密码不能为空');
                return;
            }
            
            signin(this.userName,this.password).then(res => {
                  
                var data = JSON.parse(res);
                 
                if(data.msg == 'ok'){
                    this.$message.success('登录成功');
                    localStorage.setItem('user',this.userName)
                    localStorage.setItem('avator',data.avator)
                    localStorage.setItem('id',data.id)
                    localStorage.setItem('token',data.token)
                    this.createUser(localStorage.getItem('user'))
                    // this.createUser(this.userName)
                    setTimeout(() => {
                        this.$router.push({path:'/'})
                    },1000)
                }else{
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


