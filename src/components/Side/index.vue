<template>
<section id="side">  
<div class="text-me">
     <h2 class="title title-bootom">
     ABOUT ME
     </h2>
     <div class="side-content">
     <img src="https://1.bp.blogspot.com/-bpKmzXzMnzU/WjVHGKLLo2I/AAAAAAAAKKI/bV9N42WPFmohZ30Jy5qAzhzIuj-tRxgkQCLcBGAs/s1600/photovatar.jpg" alt="">
     <p>Months had too ham cousin remove far spirit. She procuring the why performed continual improving. </p>
     <a href="">more</a>
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
export default {
    name: 'vright',
    data () {
        return {
        msg: ''
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
