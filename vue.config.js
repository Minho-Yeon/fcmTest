// const fs =require ('fs')
module.exports = {
    // devServer: {
    //   https: { 
    //     key: fs.readFileSync('./caList/domain.com.key'),
    //     cert: fs.readFileSync('./caList/domain.com.crt'),
    //     ca: fs.readFileSync('./caList/rootca.crt'),
    //   }
    // }
    publicPath:process.env.NODE_ENV ==='production'
      ?'/fcmTest/'
      :'/',
    outputDir:'docs'
  }