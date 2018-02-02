<template>
<section id="main">
  <div class="blog">
    <headers></headers>
    <mainBlog></mainBlog>
  </div>
  <side></side>
</section>
 </template>
    <script>
    import side from '@/components/Side'
    import headers from '@/components/Header'
    import mainBlog from '@/components/Mains'
    import { list,checkUser } from '@/data/Data' 
    import { mapActions } from 'vuex'
    export default {
       name: 'home',
       components:{
        side,
        headers,
        mainBlog
       },
      data(){
        return {
          avator:'',
        }
      },

      computed:{
 
      },
      mounted () {
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
            }
        })
      },
      
       methods:{
        ...mapActions([
            'createUser'
        ]),
    
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

