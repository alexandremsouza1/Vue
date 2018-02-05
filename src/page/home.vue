<template>
<section> 
    <loading v-show="showLoading"></loading>
    <section id="main" v-if="!showLoading">
    <div class="blog">
    <headers></headers>
    <mains :listpage="lists"></mains>
    </div>
  <side></side>
 
</section>
</section>
 

 </template>
    <script>
    import side from '@/components/Side'
    import headers from '@/components/Header'
    import loading from '@/components/loading'
    import mains from '@/components/mains'
    import { list } from '@/data/Data' 
    import { mapActions } from 'vuex'
    export default {
       name: 'home',
       components:{
        side,
        headers,
        mains,
        loading
       },
      data(){
        return {
          lists:'',
          showLoading:true
        }
      },

      computed:{
 
      },
      mounted () {
       this.initData()
      },
      
       methods:{
       initData(){
          list().then(data=>{
            
            this.lists = data.posts;
             setTimeout(() => {
            this.showLoading = false;
                 },3000)
            })
        }
    
      }

    }
    </script>

 <style lang="scss" scoped>
  html{font-size: 62.5%;}
  #main{
    width: 1070px;
    margin: 80px auto 0;
    display: flex;
    .blog{
      width: 68%;
      margin-right: 30px;
    }
  }
    </style>

