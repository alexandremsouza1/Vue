<template>
  <section>
 
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
            <ui-textbox
                floating-label
                label="确认密码"
                class="labels"
                type='password'
                placeholder="密码"
                v-model="repeatpass">
            </ui-textbox>
            <transition name="fade">
            <div v-if="defaultName">
            <img :src="dataUrl" class="upimg" v-show='imgshow'/>
            </div>
            </transition>
            <div class="updata">
            <ui-fileupload color="primary" name="avator" @change="onChange">{{upimgdata}}</ui-fileupload>
            <input type="hidden" id="avatorVal">
            </div>
            <!-- <img class="preview" src="http://vue.wclimb.site/images/" alt="预览头像"> -->
         
 
            <ui-button color="green" @click="register">注册</ui-button>
          </div>
      </el-row>
  </section>
</template>
<script>
import headers from '@/components/Header'
import { signup } from '@/data/Data'
export default {
  name: 'register',
  components:{
        headers
       },
  data(){
      return {
      userName:'',
      password:'',
      repeatpass:'',
      dataUrl: '',
      defaultName:false,
      imgshow:true,
      upimgdata:'上传头像'
      }
  },
  computed:{
        avator(){ 
           // console.log(localStorage.getItem('avator'))
            return localStorage.getItem('avator') ? localStorage.getItem('avator') : '';
        },
  },
  methods: {
       onChange(files) {
           let self = this;
            this.file11PreviewImage = URL.createObjectURL(files[0]);
             if (files.length != 0) {
                    var file = files[0],
                        reader = new FileReader();
                    if (!reader) {
                        this.value = '';
                        return;
                    };
             }
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                // console.log(this.result)
                    self.defaultName = true;
                    self.imgshow = true;
                    console.log(self.defaultName)
                    self.dataUrl = this.result;
                }

        },
        upimg(){
       // localStorage.clear('avator');
        this.imgshow = false;
        this.upimgdata ='';
        console.log(this.imgshow)
        },
        register(){
             if (this.userName === '' || this.password === '') {
                this.$message.error('用户名/密码不能为空');
                return;
            }
            signup(this.userName,this.password,this.repeatpass,this.dataUrl).then(res => {
                if(res == '3'){
                    this.$message.success('注册成功');
                    localStorage.setItem('user',this.userName)
                    localStorage.setItem('avator',this.dataUrl);
                    setTimeout(() => {
                        this.$router.push({path:'/'})
                    },1000)
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
.updata{
    margin-bottom: 20px;
    }
.upimg{
    margin-bottom: 20px;
    width:100px;
    height:100px;
    border-radius: 50%;
 
    margin-top:10px;

}

.input-box{
    height: 70px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


