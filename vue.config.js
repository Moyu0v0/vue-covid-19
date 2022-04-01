module.exports = {
	pages: {
		index: {
			//入口
			entry: 'src/main.js',
		},
	},
	lintOnSave: false, //关闭语法检查
	// 配置代理服务器
	devServer: {
		proxy: {
			// 这里写了前缀（对应@/api/index） 在.vue中通过加不加前缀来控制走不走代理服务器
			'/api1': {
				target: 'https://view.inews.qq.com/g2/getOnsInfo',
				// 转发的时候要去掉前缀 路径重写:正则匹配所有以proxy开头的字符串 修改为空字符串
				pathRewrite: { '^/api1': '' },
				// ws: true, //用于支持websocket
				// changeOrigin: true //用于控制请求头中的host值
			},
			'/api2': {
				target: 'http://apis.juhe.cn',
				pathRewrite: { '^/api2': '' },
			},
			'/api3': {
				target: 'https://c.m.163.com/ug/api/wuhan/app/data/list-total',
				pathRewrite: { '^/api3': '' },
			},
			'/api4': {
				target: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
				pathRewrite: { '^/api4': '' },
			},
		},
	},
}
