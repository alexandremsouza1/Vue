<template>
<section id="header" :class="{'nobackground':bgclass,'defbackground':!bgclass}">
<div class="header-content">
<ul>
    <li><router-link to="/">全部文章</router-link></li>
    <li><router-link to="/articles">发表文章</router-link></li>
    <li><router-link to="/login">{{login}}</router-link></li>
    <li><router-link to="/register">{{register}}</router-link></li>
</ul>
<!-- <div class="rest">
    
      <router-link to="/login">{{logins}}</router-link>
      <router-link to="/register">{{register}}</router-link>
  
</div> -->
 
</div>
</section>
</template>
<script>
import { mapState } from 'vuex'
export default {

  data(){
      return {
         login:'登录',
         register:'注册',
         bgclass:false,
      }
  },

  computed:{
         ...mapState([
            'userInfo',
        ]),
         logins(){ 
            // return this.login = this.userInfo == ''? '登录':this.userInfo
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
    position: relative;
    display: block;
    a{
    padding: 30px 15px;
    }
     }
      }
    // box-shadow: 4px 2px 7px 0px rgba(45, 45, 45, 0.08);
    .header-content{
        width: 1070px;
        line-height: 60px;
        margin: 0 auto;
        height: 100%;

        // .rest{
        //     display: inline-block;
        //     float: right;
        //     a{
        //         color: #353535
        //     }
        // }
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
            color: #fff;
       }
}
</style>

