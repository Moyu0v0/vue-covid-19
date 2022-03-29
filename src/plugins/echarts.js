import echarts from 'echarts'
import nationName from '@/plugins/nationName'

export default {
	// 绘制中国地图
	MapChina(id, data, tip) {
		let myEcharts = echarts.init(document.getElementById(id))
		let option = {
			// 提示信息
			tooltip: {
				// {b}数据名 {c}数据值
				formatter: `{b}<br/>${tip} {c} 例`,
			},
			visualMap: [
				{
					// 映射-颜色值
					orient: 'vertical', // 分段方向:horizontal水平
					type: 'piecewise', // 分段式
					pieces: [
						// 配置颜色区间
						{ min: 0, max: 0, color: '#FFFFFF' },
						{ min: 1, max: 100, color: '#FDFDCF' },
						{ min: 100, max: 500, color: '#FE9E83' },
						{ min: 500, max: 1000, color: '#E55A4E' },
						{ min: 1000, max: 10000, color: '#4F070D' },
					],
				},
			],
			series: [
				{
					name: '省',
					type: 'map', // 配置图表类型
					map: 'china', // 中国地图
					roam: false, // 是否允许自动缩放
					zoom: 1.2, // 地图缩放的标准比例
					// 配置字体
					label: {
						normal: {
							show: true, // 控制地图显示名字
							textStyle: {
								fontSize: 8,
							},
						},
					},
					// 配置图表样式
					itemStyle: {
						// 一般样式
						normal: {
							areaColor: 'rgba(0,255,236,0)',
							borderColor: 'rgba(0,0,0,0.2)',
						},
						// 选中区域样式
						emphasis: {
							areaColor: 'rgb(211, 253, 253)',
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							shadowBlur: 0,
							borderWidth: 0,
							borderColor: 'rgb(51,51,51)',
						},
					},
					// data字段示例：
					// data:[
					//     {name:"内蒙古",value:10}
					// ]
					data,
				},
			],
		}
		myEcharts.setOption(option, true)
	},
	// 绘制世界地图
	MapWorld(id, data, tip) {
		let myEcharts = echarts.init(document.getElementById(id))
		let option = {
			tooltip: {
				// {b}数据名 {c}数据值
				formatter: `{b}<br/>${tip} {c} 例`,
			},
			visualMap: [
				{
					// 映射-颜色值
					orient: 'vertical', // 分段方向:horizontal水平
					type: 'piecewise', // 分段式
					pieces: [
						// 配置颜色区间
						{ value: 0, color: '#FFFFFF' },
						{ min: 1, max: 4999, color: '#fce1d8' },
						{ min: 5000, max: 9999, color: '#f8bfad' },
						{ min: 10000, max: 100000, label: '1万-10万', color: '#f5937e' },
						{
							min: 100000,
							max: 1000000,
							label: '10万-100万',
							color: '#f26954',
						},
						{
							min: 1000000,
							max: 5000000,
							label: '100万-500万',
							color: '#d73c33',
						},
						{
							min: 5000000,
							max: 10000000,
							label: '500万-1000万',
							color: '#a52318',
						},
						{ gt: 10000000, label: '≥1000万', color: '#761b13' },
					],
				},
			],
			series: [
				{
					name: '世界地图',
					type: 'map', // 配置图表类型
					map: 'world', // 世界地图
					roam: false, // 是否允许自动缩放
					zoom: 1.2, // 地图缩放比例
					label: {
						// 配置字体
						normal: {
							show: false, // 控制地图显示名字
							textStyle: {
								fontSize: 8,
							},
						},
					},
					nameMap: nationName,
					itemStyle: {
						// 配置地图样式
						normal: {
							areaColor: 'rgba(0,255,236,0)',
							borderColor: 'rgba(0,0,0,0.2)',
						},
						// 选中区域的样式
						emphasis: {
							areaColor: 'rgb(211, 253, 253)',
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							shadowBlur: 0,
							borderWidth: 0,
							borderColor: 'rgb(51,51,51)',
						},
					},
					// data字段示例：
					// data:[
					//     { name: "Canda", value: 10 }
					// ]
					data,
				},
			],
		}
		myEcharts.setOption(option)
	},
	// 绘制省市地图
	// MapProvince(id, cityName, data) {
	// 	let myEcharts = echarts.init(document.getElementById(id))
	// 	let option = {
	// 		tooltip: {
	// 			formatter: '{b} {c}例',
	// 		},
	// 		visualMap: [
	// 			{
	// 				// 映射-颜色值
	// 				orient: 'vertical', // 分段方向:horizontal水平
	// 				type: 'piecewise', // 分段
	// 				pieces: [
	// 					// 配置颜色区间
	// 					{ value: 0, color: '#FFFFFF' },
	// 					{ min: 1, max: 10, color: '#FDFDCF' },
	// 					{ min: 10, max: 100, color: '#FE9E83' },
	// 					{ min: 100, max: 500, color: '#E55A4E' },
	// 					{ min: 500, max: 10000, color: '#4F070D' },
	// 				],
	// 			},
	// 		],
	// 		series: [
	// 			{
	// 				name: '市',
	// 				type: 'map', // 配置图表类型
	// 				map: cityName, // 省市名必须写中文
	// 				roam: false, // 是否允许自动缩放
	// 				zoom: 1.2, // 地图缩放比例
	// 				label: {
	// 					// 配置字体
	// 					normal: {
	// 						show: true,
	// 						textStyle: {
	// 							fontSize: 8,
	// 						},
	// 					},
	// 				},
	// 				itemStyle: {
	// 					// 配置地图样式
	// 					normal: {
	// 						areaColor: 'rgba(0,255,236,0)',
	// 						borderColor: 'rgba(0,0,0,0.2)',
	// 					},
	// 					emphasis: {
	// 						// 选中的区域颜色及阴影效果等
	// 						areaColor: 'rgba(255,180,0,0.8)',
	// 						shadowOffsetX: 0,
	// 						shadowOffsetY: 0,
	// 						shadowBlur: 20,
	// 						borderWidth: 0,
	// 					},
	// 				},
	// 				data,
	// 			},
	// 		],
	// 	}
	// 	myEcharts.setOption(option)
	// },
}
