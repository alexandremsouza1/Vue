const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const md5 = require('md5')
const koaBody = require('koa-body')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin

// router.get('/signin', async(ctx, next) => {
//     await checkNotLogin(ctx)
//     await ctx.render('signin', {
//         session: ctx.session,
//     })
// })

router.post('/signin', koaBody() ,async(ctx, next) => {
    var data;
    var requestBody = ctx.request.body;
    if(typeof requestBody === 'string'){
        data = JSON.parse(requestBody)
    }
    else if(typeof requestBody === 'object'){
        data = requestBody
    }
    
    await userModel.findDataByName(data.name)
        .then(result => {
            let res = result
            if (data.name === res[0]['name'] && md5(data.password) === res[0]['pass']) {
                ctx.body = true
                ctx.session.user = res[0]['name']
                ctx.session.id = res[0]['id']
                console.log('session', ctx.session)
                console.log('登录成功')
                ctx.body = {
                    session : ctx.session
                }
            }else{
               // ctx.body = false
                console.log('用户名或密码错误!')
                ctx.body = 4;
            }
        }).catch(err => {
            console.log(err)
        })

})

module.exports = router