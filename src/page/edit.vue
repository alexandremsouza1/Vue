<template>
<section id="main">
  <div class="blog">
    <headers></headers>
     <div>123</div>
  </div>
  <side></side>
</section>
 </template>
    <script>
    import side from '@/components/Side'
    import headers from '@/components/Header'
    import { editposts,edit } from '@/data/Data' 
    export default {
       name: 'edit',
       components:{
        side,
        headers,
       },
      data(){
        return {
          lists:'',
        }
      },

      computed:{
 
      },
      mounted () {
       this.initData()
      },
 
      methods:{
      initData(){
          var id = this.$route.query.id
        //   var author = this.$route.query.author;
          editposts(id).then(data=>{
              console.log(data)
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

