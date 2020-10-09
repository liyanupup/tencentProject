console.log("加载成功");

//配置我们要引入的模块的路径  jquery  遵从AMD规范， 抛物线parabola.js不支持AMD规范

require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    // index: "index"
  },
  shim: {
    "jquery-cookie": ["jquery"],
    parabola: {
      exports: "_"
    }
  }
})


