const express = require('express')
// compression一种无损失的压缩方式
const compression = require('compression')
const app = express()

// 一定要把这一行代码，写到静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))

app.listen(8082,()=>{
    console.log('server runing at http://127.0.0.1:8082')
})