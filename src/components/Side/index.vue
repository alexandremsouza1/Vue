<template>
<section id="side">  
<div class="text-me">
     <h2 class="title title-bootom">
     ABOUT ME
     </h2>
     <div class="side-content">
     <img v-lazy="base + avators" alt="">
     <p>{{name}} </p>
     </div>
</div>
 
<div class="text-more">
     <h2 class="title">
     FOLLOW US
     </h2>
</div>

</section>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'side',
    data () {
        return {
        avators:'',
        name: '',
        base:'http://localhost:3000/images/',
        }
    },
    computed:{
          ...mapState([
            'userInfo',
        ]),

     },
    created() {
    this.insdata()
    },
    methods:{
      insdata(){
          this.avators = localStorage.getItem('avator') ? localStorage.getItem('avator') : '';
          this.name = localStorage.getItem('user') ? localStorage.getItem('user') : '';
      }

      }

}
</script>
<style lang="scss" scoped>
#side{
    width: 28%;
    float: right;
    .text-me{
    float: left;
    margin-bottom: 45px;
    text-align: center;
    width: 100%;
    img{
            max-width: 100%;
    }
    }
}
.title-bootom{
margin-bottom: 20px!important;
}
.title{
         
        color: #222;
        display: inline-block;
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        line-height: 1.4;
        font-weight: 800;
        letter-spacing: 1px;
        margin: 0 40px;
        padding: 0 15px;
        position: relative;
        text-transform: uppercase;
     &:after{
            background: #e7e7e7;
            content: "";
            height: 1px;
            width: 40px;
            position: absolute;
            left: -40px;
            top: 50%;
            left: auto;
            right: -40px;
    }
    &:before{
            background: #e7e7e7;
            content: "";
            height: 1px;
            width: 40px;
            position: absolute;
            left: -40px;
            top: 50%;
        
    }
    }
    .text-more{text-align: center}
</style>
