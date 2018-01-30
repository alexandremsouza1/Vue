<template>
<section id="main">
    <vheader></vheader>
  <div class="blog">
    <div class="card">

        <div class="top-card">
          <div class="bg-category">
          <div class="category-name">
          <span>
          <a href="http://best-themexpose.blogspot.com/search/label/Fashion?max-results=12" rel="tag nofollow">Fashion</a>
          </span>
          </div>
          </div>
          <h3>Papilion Minter Savior</h3>
          <p>BY RINA CHAUDHARY - MARCH 04, 2015</p>
        </div>

          <div class="main-card">
                <img src="https://3.bp.blogspot.com/-akO-Mdlld1I/VbtmnhcbSPI/AAAAAAAAGcY/DsqyJ0mhWJM/s1600/8.jpg" alt="" width="730" height="430">
                <div class="posts-content">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </div>
                <div class="posts-y">
                  <ui-button color="orange" :size="size">阅读全文</ui-button>
                </div>
          </div>

              <div class="bottom-blog">
              <ul class="bolg-comment">
              <li>
              <a href="http://best-themexpose.blogspot.com/2015/03/papilion-minter-savior.html#comments">17 Comments</a>
              </li>
              </ul>
              </div>

    </div>
  </div>
  <vright></vright>
</section>
 </template>
    <script>
    import vright from './common/vright.vue'
    import vheader from './common/vheader.vue'
    import { list } from '../data/Data'
    export default {
      name: 'app',
       components:{
        vright,
        vheader
       },
      data: function (){
        return {
          lists:'',
          size: 'large',
        }
      },
      created () {
           this.initData()
          },
       methods:{

        initData () {
            list().then(data =>  {
              this.lists = data.posts 
                //console.log(data)
            })
        }
        
    }
    }
    </script>

 <style lang="scss" scope>
 

html {
    font-size: 100%;
}
  body{margin: 0;   
   color: #353535;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 23px;
    font-family: Lato, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;}
    ol,
ul,
li {
    list-style: none
}
ul {
    margin: 0;
    padding: 0;
    }
  html{font-size: 62.5%;}
  a:hover {
    text-decoration: none
}
  a{
    text-decoration: none
}
  #main{
    width: 1070px;
    margin: 80px auto 0;
    display: flex;
    
    .blog{
      width: 68%;
      padding-right: 30px;
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

