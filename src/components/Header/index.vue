<template>
<section id="header">
<div class="header-content">
<img src="" alt="">
<div class="rest">
    <template v-if="!userInfo">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
   </template>
   <template v-else>
       <span>{{userInfo}}</span>
   </template>   
</div>
 
</div>
</section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data(){
      return {
         
      }
  },
 
  computed:{
         ...mapState([
            'userInfo',
        ]),
  },
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
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: transparent;
    // box-shadow: 4px 2px 7px 0px rgba(45, 45, 45, 0.08);
    .header-content{
        width: 1070px;
        line-height: 60px;
        margin: 0 auto;
        height: 100%;
        .rest{
            display: inline-block;
            float: right;
            a{
                color: #353535
            }
        }
    }

}
</style>

