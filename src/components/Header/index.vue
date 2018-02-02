<template>
<section id="header" :class="{'nobackground':bgclass,'defbackground':!bgclass}">
<div class="header-content">
<ul>
    <template v-if="logins">
    <li><router-link to="/" class="box">全部文章</router-link></li>
    <li><router-link to="/articles" class="box">发表文章</router-link></li>
    </template>
    <template v-else>
    <li><router-link to="/login" class="loginbox">登录</router-link></li>
    <li><router-link to="/register" class="box">注册</router-link></li>
    </template>
</ul>
</div>
</section>
</template>
<script>
import { mapState } from 'vuex'
export default {

  data(){
      return {
         bgclass:false,
         checklg:true,
      }
  },

  computed:{
         ...mapState([
            'userInfo',
        ]),
         logins(){ 
             return this.checklg = this.userInfo == ''? false:true;
        },
  },
 
  mounted () {
      window.addEventListener('scroll',this.winScroll);
    },

  methods:{
      winScroll(){
           window.scrollY > 60? this.bgclass = true:this.bgclass = false;
        },    
  }
}
</script>
<style lang="scss" scoped>
.login-icon{
    width: 25px!important;
    height: 25px!important;
    margin-right: 10px;
}
#header{
    height: 60px;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    display: block;
    border: none;
    z-index: 1000;
    ul {
    float: right;
    margin-right: 15px;
    li{
    float: left;
    text-align: center;
    width: 90px;
    position: relative;
    display: block;
    a{
    
    }
     }
      }
    // box-shadow: 4px 2px 7px 0px rgba(45, 45, 45, 0.08);
    .header-content{
        width: 1070px;
        line-height: 60px;
        margin: 0 auto;
        height: 100%;
    }

}
.defbackground{
       background-color: transparent;
       transition: all 1s ease-in-out;
       ul li a{
           color:#423f3f;
       }
}
.nobackground{
    background-color: #5BC98A!important;
    box-shadow: 0px 2px 5px rgba(190, 190, 190, 0.3);
     ul li a{
            color: #666;
       }
}

.box {
    padding: 10px!important;
        height: 8px;
    line-height: 10px;
    width: 50px;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  transition: 0.5s;
  cursor: pointer;
  border: 1px solid #666;
  transition: 0.5s;
  &:hover{
        color: #666;
        text-decoration: none;
  }
}

.box::before, .box::after {
  width: 100%;
  height: 100%;
  z-index: 3;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  transform: scale(0);
  transition: 0.5s;
}

.box::before {
  border-bottom: 1px solid #666;
  border-left: 1px solid #666;
  transform-origin: 0 100%;
}

.box::after {
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  transform-origin: 100% 0%;
}

.box:hover::after, .box:hover::before {
  transform: scale(1);
}
.loginbox{   
   border-radius: 100px;
    background: linear-gradient(135deg, #FF4B4B 0%, #FF1B66 100%);
    color: white!important;
    padding: 5px 15px;
    font-size: 13px;
  
    line-height: 15px;
    margin-top: -2px;

    }
</style>

