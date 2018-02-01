const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const md5 = require('md5')
const koaBody = require('koa-body')
const moment = require('moment');
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin

// router.get('/signin', async(ctx, next) => {
//     await checkNotLogin(ctx)
//     await ctx.render('signin', {
//         session: ctx.session,
//     })
// })
router.post('/checkUser',koaBody(),async(ctx,next)=>{
    var requestBody = ctx.request.body;
    if (typeof requestBody === 'string') {
        data = JSON.parse(requestBody)
    }
    else if (typeof requestBody === 'object') {
        data = requestBody
    }
    // console.log(data.name)
    await userModel.checkUser([data.name])
            .then(res => {
                console.log(res[0].token)
                var user_token = res[0].token;
                var tokenInfo = user_token.split('&')
              // console.log('token', user_token, data.token, user_token.split('&')[3], new Date().getTime())
                if (user_token === data.token && tokenInfo[tokenInfo.length-1] < new Date().getTime()) {
                    ctx.body = 'expired'
                }
                else if (user_token === data.token) {
                    ctx.body = 'success'
                }else{
                    ctx.body = 'error'
                }
            }).catch(err=>{
                ctx.body = 'error'
            })
})
router.post('/signin', koaBody() ,async(ctx, next) => {
    var data;
    var requestBody = ctx.request.body;
    if(typeof requestBody === 'string'){
        data = JSON.parse(requestBody)
    }
    else if(typeof requestBody === 'object'){
        data = requestBody
    }
    console.log(data)
    await userModel.findDataByName(data.name)
        .then(result => {
            let res = result
            console.log(res)
            // 过期时间
            let new_token = data.name + '&' + Number(Math.random().toString().substr(3)).toString(36) + '&' 
            + moment().format('YYYY/MM/DD-HH:mm:ss') + '&' + parseInt(new Date().getTime() + 1000 * 60 * 60 * 24 * 5)
            if (data.name === res[0]['name'] && md5(data.password) === res[0]['pass']) {
              //  ctx.body = true
                // ctx.session.user = res[0]['name']
                // ctx.session.id = res[0]['id']
                // console.log('session', ctx.session)
                userModel.loginData([moment().format('YYYY-MM-DD HH:mm:ss'),new_token,data.name]) 
                .then(res=>{
                   // console.log(res)
                })
                ctx.body = {
                    msg: 'ok' ,
                    avator: res[0]['avator'],
                    token: new_token
                }
            }else{
               // ctx.body = false
                console.log('用户名或密码错误!')
                ctx.body = 2;
            }
        }).catch(err => {
            console.log(err)
            ctx.body = 3;
        })

})

module.exports = router