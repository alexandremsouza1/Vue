<template>
<section id="main">
  <div class="blog">
    <headers></headers>
    <div>1</div>
  </div>
  <side></side>
</section>
 </template>
    <script>
    import side from '@/components/Side'
    import headers from '@/components/Header'
    export default {
       name: 'home',
       components:{
        side,
        headers,
       },
      data(){
        return {
        }
      },
      computed:{
 
      },
      mounted () {

      },
     methods:{

    
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

