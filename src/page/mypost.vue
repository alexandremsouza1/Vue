<template>
<section id="main">
  <div class="blog">
    <headers></headers>
    <mains :listpage="listpage"></mains>
  </div>
  <side></side>
</section>
 </template>
    <script>
    import side from '@/components/Side'
    import headers from '@/components/Header'
    import mains from '@/components/mains'
    import { mylist } from '@/data/Data' 
    import { mapState } from 'vuex'
    export default {
       name: 'home',
       components:{
        side,
        headers,
        mains
       },
      data(){
        return {
          listpage:'',
        }
      },

      computed:{
      ...mapState([
            'userInfo',
        ]),
      },
      mounted () {
       this.initData()
      },
       methods:{
       initData(){
          var author = this.$route.query.author;
          mylist(author).then(data=>{this.listpage = data.postspage})
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

