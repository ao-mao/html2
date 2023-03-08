// export const getHistoryChartOp2 = () => {
//     return {
//         xAxis: {
//             type: "category",
//             data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//           },
//           yAxis: {
//             type: "value",
//           },
//           series: [
//             {
//               data: [150, 230, 224, 218, 135, 147, 260],
//               type: "line",
//             },
//           ],
//     }
// }
import { render } from '@testing-library/react'
import * as echarts from 'echarts'
import Device from './../../network/Device'
// export const getHistoryChartOp = (id: any) => {
//   getHistoryChartOp3(id)
// }


export const getHistoryChartOp = (chardData) => {
	var yearData = [
		{
			year: "2022", // 年份
			data: ['1']

		},

	];
	return {
		// 通过这个color修改两条线的颜色
		// color: ["#00f2f1", "#ed3f35"],
		tooltip: {
			trigger: "axis"
		},
		legend: {
			// 如果series 对象有name 值，则 legend可以不用写data
			// 修改图例组件 文字颜色
			textStyle: {
				color: "#4c9bfd"
			},
			// 这个10% 必须加引号
			right: "10%"
		},
		grid: {
			top: "10%",
			left: "3%",
			right: "3%",
			bottom: "3%",
			show: true, // 显示边框
			borderColor: "#012f4a", // 边框颜色
			containLabel: true // 包含刻度文字在内
		},

		xAxis: {
			type: "category",
			boundaryGap: false,
			data: [
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
				"24"
			],
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			}
		},
		yAxis: {
			type: "value",
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			},
			splitLine: {
				lineStyle: {
					color: "#012f4a" // 分割线颜色
				}
			}
		},
		series: [
			{
				name: "水压线",
				type: "line",
				// true 可以让我们的折线显示带有弧度
				smooth: true,
				data: yearData[0].data[1]
				// data: [0.2, 0.3, 0.5, 0.6, 0.3, 0.1,
				// 	0.2, 0.3, 0.5, 0.6, 0.3, 0.1,
				// 	0.2, 0.3, 0.5, 0.6, 0.3, 0.1,
				// 	0.2, 0.3, 0.5, 0.6, 0.3, 0.1]
			},
			// {
			//   name: "新增游客",
			//   type: "line",
			//   smooth: true,
			//   data: yearData[0].data[1]
			// }
		]
	};

}

//饼状图
export const getAnalysePieOp = () => {
	return {
		color: [
			"#006cff",
			"#60cda0",
			"#ed8884",
			"#ff9f7f",
			"#0096ff",
			"#9fe6b8",
			"#32c5e9",
			"#1d9dff"
		],
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			bottom: "0%",
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				//   color: "rgba(255,255,255,.5)",
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		series: [
			{
				name: "地区分布",
				type: "pie",
				radius: ["10%", "70%"],
				center: ["50%", "50%"],
				roseType: "radius",
				// 图形的文字标签
				label: {
					fontSize: 10
				},
				// 链接图形和文字的线条
				labelLine: {
					// length 链接图形的线条
					length: 6,
					// length2 链接文字的线条
					length2: 8
				},
				data: [
					{ value: 20, name: "云南", label: { color: '#006cff' } },
					{ value: 26, name: "北京", label: { color: '#60cda0' } },
					{ value: 24, name: "山东", label: { color: '#ed8884' } },
					{ value: 25, name: "河北", label: { color: '#006cff' } },
					{ value: 20, name: "江苏", label: { color: '#0096ff' } },
					{ value: 25, name: "浙江", label: { color: '#9fe6b8' } },
					{ value: 30, name: "四川", label: { color: '#32c5e9' } },
					{ value: 42, name: "湖北", label: { color: '#1d9dff' } }
				]
			}
		]
	};
}

export const getHistoryChartOp2 = (chartData) => {
	return {
		tooltip: {
			trigger: "axis"
		},
		legend: {
			top: "0%",
			data: ["水流量线"],
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},

		grid: {
			left: "10",
			top: "30",
			right: "10",
			bottom: "10",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				boundaryGap: false,
				// x轴更换数据
				data: [
					"01",
					"02",
					"03",
					"04",
					"05",
					"06",
					"07",
					"08",
					"09",
					"10",
					"11",
					"12",
					"13",
					"14",
					"15",
					"16",
					"17",
					"18",
					"19",
					"20",
					"21",
					"22",
					"23",
					"24"
				],
				// 文本颜色为rgba(255,255,255,.6)  文字大小为 12
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: 12
					}
				},
				// x轴线的颜色为   rgba(255,255,255,.2)
				axisLine: {
					lineStyle: {
						color: "5rgba(255,255,255,.2)"
					}
				}
			}
		],
		yAxis: [
			{
				type: "value",
				axisTick: { show: false },
				axisLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				},
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: 12
					}
				},
				// 修改分割线的颜色
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				}
			}
		],
		series: [
			{
				name: "水流量",
				type: "line",

				smooth: true,
				// 单独修改当前线条的样式
				lineStyle: {
					color: "#0184d5",
					width: "2"
				},
				// 填充颜色设置
				areaStyle: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						0.5,
						[
							{
								offset: 0,
								color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
							},
							{
								offset: 0.8,
								color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
							}
						],
						false
					),
					shadowColor: "rgba(0, 0, 0, 0.1)"
				},
				// 设置拐点
				symbol: "circle",
				// 拐点大小
				symbolSize: 8,
				// 开始不显示拐点， 鼠标经过显示
				showSymbol: false,
				// 设置拐点颜色以及边框
				itemStyle: {
					color: "#0184d5",
					borderColor: "rgba(221, 220, 107, .1)",
					borderWidth: 12
				},
				data:[1000]

				// data: [200, 322, 123, 143, 600, 321,
				// 	456, 789, 985, 765, 654, 543,
				// 	200, 322, 123, 143, 600, 321,
				// 	456, 789, 985, 765, 654, 543],
			},

		]
	};
}

export const loadHistoryData = async (id: any) => {
	console.log(id);
	return Device.getHistoryData(id).then(data => {
		let pressureData = []
		let flowData = []
		//新增
		let tempPre = 0
		let tempFlow = 0
		const curHour = new Date().getHours()
		if (data.length) {
			for (let i = 0; i <= curHour; i++) {
				//新增
				if (data[i].pressure) {
					tempPre = data[i].pressure
				}
				if (data[i].flow) {
					tempFlow = data[i].flow
				}
				pressureData[i] = data.find(item => item.hour == i) ? data.find(item => item.hour == i).pressure : tempPre
				flowData[i] = data.find(item => item.hour == i) ? data.find(item => item.hour == i).flow : tempFlow
			}

		} else {
			for (let i = 0; i <= curHour; i++) {
				pressureData[i] = 0
				flowData[i] = 0
			}
		}
		return{
			 pressureData,
			 flowData
		}
		// getHistoryChartOp(pressureData)
		// getHistoryChartOp2(flowData)
	})
}


