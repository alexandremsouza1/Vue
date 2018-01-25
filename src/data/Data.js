const baseUrl = '/api'
// 首页初始化数据
export const list = () => fetch(baseUrl+'/posts').then(response => response.json())