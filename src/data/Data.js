const baseUrl = '/api'
// 首页初始化数据
export const list = () => fetch(baseUrl+'/posts').then(response => response.json())
export const signup = ( name , pass , repass , avator) => fetch(baseUrl+'/signup', {
    method: "POST",
    body: JSON.stringify({ name: name, password: pass, repeatpass: repass, avator:avator}),
    mode: "cors",
}).then(function(response) {
    return  response.text()
})
export const signin = ( name , pass) => fetch(baseUrl+'/signin', {
    method: "POST",
    body: JSON.stringify({ name: name, password: pass}),
    mode: "cors",
}).then(function(response) {
    return  response.text()
})
export const checkUser = (name, token) => fetch(baseUrl + '/checkUser', {
    method: "POST",
    body: JSON.stringify({ name: name, token: token }),
    mode: "cors",
}).then(function (response) {
    return response.text()
})
export const create = ( title , content , uid , name) => fetch(baseUrl+'/create', {
    method: "POST",
    body: JSON.stringify({ name: name, uid: uid,title:title,content:content}),
    mode: "cors",
}).then(function(response) {
    return  response.text()
})