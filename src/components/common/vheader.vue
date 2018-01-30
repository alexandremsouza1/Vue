<template>
<section id="header">
<div class="header-content">
<img src="" alt="">
<div class="rest">
<a href="">登录</a>
<a href="">注册</a>
</div>
 
</div>
</section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scope>
#header{
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    box-shadow: 4px 2px 7px 0px rgba(45, 45, 45, 0.08);
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

