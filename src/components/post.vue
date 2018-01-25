    <template>
      <div id="app">
        <!-- 头部导航 -->
        <span>{{lists}}</span> 
      </div>
    </template>

    <script>
    import { list } from '../data/Data'
    export default {
      name: 'app',
      data: function (){
        return {
          active:true,
          lists:''
        }
      },
      created () {
           this.initData()
          },
      methods:{
        initData () {
            list().then(data =>  {
          //    this.lists = data.posts 
                //console.log(data)
            })
        }
    }
    }
    </script>

    <style>
      body{margin: 0;}
    #app {
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }

    </style>

