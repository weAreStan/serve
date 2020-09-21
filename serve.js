const express = require('express')
const app = express()
// 引入数据文件
const index = require('./datas/index.json')
const category = require('./datas/category.json')

//设置允许跨域访问该服务.
// app.all('*', (req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*')
// 	res.header('Access-Control-Allow-Headers', 'Content-Type')
// 	res.header('Access-Control-Allow-Methods', '*')
// 	res.header('Content-Type', 'application/json;charset=utf-8')
// 	next()
// })
// 请求首页数据
app.get('/getIndex', (request, response) => {
	response.send(index)
})
// 请求分类数据
app.get('/getCategoryData', (request, response) => {
	response.send(category)
})

app.listen(8000, (err) => err ? console.log(err) : console.log('8080端口启动成功'))
