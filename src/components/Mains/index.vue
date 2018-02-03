<template>
<section id="card">  
    <div class="card" v-for="(list,index) in lists" :key="index">
        <div class="top-card">
          <h3>{{list.title}}</h3>
          <p>{{list.time}}</p>
        </div>
          <div class="main-card">
                <div class="posts-content" v-html="list.md"></div>
                <div class="posts-y">
                  <ui-button color="orange"><router-link :to="'/detail/'+list.id">阅读全文</router-link></ui-button>
                </div>
          </div>

              <div class="bottom-blog">
              <ul class="bolg-comment">
              <li>
              <a href="http://best-themexpose.blogspot.com/2015/03/papilion-minter-savior.html#comments">{{list.comments}}</a>
              </li>
              </ul>
              </div>
    </div>
</section>
</template>
<script>
import { mapState } from 'vuex'
import { list,checkUser } from '@/data/Data' 
export default {
    name: 'mains',
    data () {
        return {
           lists: '',
        }
    },
    computed:{

     },
    created() {
     this.initData()
    },
    methods:{
        initData(){
          list().then(data=>{
           // console.log(data.posts)
           this.lists = data.posts;
         //  console.log(this.lists)
          })
        }
      }

}
</script>
<style lang="scss" scoped>
    .card{
      margin-bottom: 40px;
      .top-card{
        text-align: center;
        margin-bottom: 10px;
         h3{
            margin-bottom: 20px;
            font-style: normal;
            line-height: 1.25;
            padding: 0;
            margin: 0 0 20px;
            font-weight: 400;
            font-family: 'Playfair Display';
            line-height: 30px;
            color: #000;
            font-size: 30px;
            line-height: 36px;

         }
         p{
            line-height: 16px;
            font-family: lato;
            word-spacing: 1px;
            color: #b4b4b4;
            display: inline-block;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            position: relative;
            padding: 0 0px;
         }

      }
 
    }
    .category-name{
    position: relative;
    display: inline-block;
    height: auto;
    color: #C49B5F;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 16px;
    font-family: lato;
    position: relative;
    padding-bottom: 2px;
    display: inline-block;
    margin-bottom: 21px;
    span{
    position: relative;
    display: inline-block;
    height: auto;
    line-height: 10px;
    a{
    color: #C49B5F;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 16px;
    font-family: lato;
    position: relative;
    padding-bottom: 2px;
    display: inline-block;
    }
    &:after{
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0px auto;
    background: #C49B5F;
    }
    }
  }
  .grid-content {
    min-height: 36px;
    text-align: center;
    line-height: 36px;

  }  
  
  .posts-content{   
    text-align: justify;
    margin-top: 30px;
    }
  .posts-y{
     text-align: center;
     margin-top: 25px;
   }
   .bottom-blog {
    display: inline-block;
    width: 100%;
    padding: 13px 0;
    border-bottom: 3px double #e6e6e6;
    margin-top: 35px;
    padding-bottom: 10px;
    line-height: 7px;
}
.bolg-comment{
  float: left;
 li{
   color: #949494;
    float: left;
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 12px !important;
    margin: 0 15px 0 0;
    padding-right: 15px;
    position: relative;
    text-transform: uppercase;
    a{
          color: #222;
    }
 }
}
.blog-comment-right{
  float: right;
  li{
    display: inline-block;
  }
}
</style>
