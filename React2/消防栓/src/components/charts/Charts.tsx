import React, { useState, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import styles from './Charts.module.scss'
import { getHistoryChartOp, getAnalysePieOp, getHistoryChartOp2, loadHistoryData } from './options'
import store from './../../redux/store'
import { PandlData } from './PanelData'
import { PanelData2 } from './PanelData2.class'
import { useSelector } from 'react-redux'
import { cloneDeep } from 'lodash';


// import { useSelector} from 'react-redux'

// const getHistoryChartOp = require('./options')
interface ChartsProps {
	//1-水历史峰图 2-饼状分析图 3-水流量历史峰图
	type?: "1" | "2" | "3" | "4" | "5" | "6",
	title?: string
}
interface DataListProps {
	id: number,
	name: string,
	content: string
}

export const Charts = (props: ChartsProps) => {
	let option = null
	const selectd = useSelector<any>(state => state.service.selectId)
	const curDevice = useSelector<any>(state => state.service.selectDevice)

	let DEFAULT_OPTION = null
	if (props.type === '2') {
		DEFAULT_OPTION = getHistoryChartOp(['1'])
	} else if (props.type === '5') {
		DEFAULT_OPTION = getHistoryChartOp2(['200'])
		console.log(DEFAULT_OPTION);

	} else {
		DEFAULT_OPTION = getAnalysePieOp()
	}
	const [option2, setOption2] = useState(DEFAULT_OPTION);
	const fetchNewData = async () => {
		if (props.type === '2') {
			const newOption2 = cloneDeep(option2); // 一定要进行深拷贝
			const { pressureData } = await loadHistoryData(selectd)
			newOption2.series[0].data = pressureData
			setOption2(newOption2);

		} else if (props.type === '5') {
			const newOption2 = cloneDeep(option2); // 一定要进行深拷贝
			const { flowData } = await loadHistoryData(selectd)
			newOption2.series[0].data = flowData
			setOption2(newOption2);
		}
		else {
			const newOption2 = cloneDeep(option2); // 一定要进行深拷贝
			setOption2(newOption2);
		}
	}

	useEffect(() => {
		fetchNewData();
	}, [selectd]);
	const initData = async () => {
		switch (props.type) {
			case "2":
				option = getHistoryChartOp(selectd)
				break;
			case "3":
				// option = getAnalysePieOp()
				break;
			case "4":
				// dataList = loadPanelData().dataList
				break
			case "5":
				option = getHistoryChartOp2(selectd)
				break
			default:
				break;
		}
	}
	if (props.type) {
		initData()
	}

	if (option) {
		return (
			<div className={styles['charts_container']}>
				<div className={styles['panel']}>
					<h2>{props.title}</h2>
					<ReactEcharts option={option2}
						style={{ width: '95%', height: '80%' }}
					></ReactEcharts>

				</div>
			</div>
		)
	} else if (props.type === '4') {
		const dataList: DataListProps[] = [
			{ id: 0, name: '倾斜', content: '否' },
			{ id: 1, name: '压力(Kpa)', content: '25.14' },
			{ id: 2, name: '设备报警', content: '7.56' },
			{ id: 3, name: '振动', content: '2.06' },
			{ id: 4, name: '流量(升/分)', content: '6.95' },
			{ id: 5, name: '信号量', content: '7.56' },
		]
		const setContent = (id, content) => {
			if (id === 2) {
				return (
					<div className={styles['data_icon_container']}>
						<span className={styles['data_icon_warn']}></span>
						{/* <span className={`${styles['data_icon']} ${styles['data_icon_warn']}`}></span> */}
					</div>
				)
			} else if (id === 5) {
				return (
					<div className={styles['data_icon_container']}>
						<span className={`${styles['data_icon_sig4']}`}></span>
					</div>
				)
			} else {
				return (<span>{content}</span>)
			}
		}
		return (
			<div className={styles['charts_container']}>
				<div className={`${styles['panel']} ${styles['panel_data']}`}>
					<PanelData2></PanelData2>
					{/* <PandlData></PandlData> */}
					{/* <div className={styles['data_container']}>
                         {dataList.map((item, index) => {
                                 return <div key={index} className={styles['data_item']}>
                                     {setContent(item.id, item.content)}
                                     <h4>{item.name}</h4>
                                 </div>
                         })}
                     </div> */}
				</div>
			</div>
		)
	} else if (props.type === '6') {
		return (
			<div className={styles['charts_container']}>
				<div className={styles['panel']}>
					<h2>剩余电量</h2>
					<div className={styles['container']}>
						<div className={styles['battery_container']}>
							<div className={styles['battery_item']}>
								<div>
									<i className={styles['icon_battery']}></i>
								</div>
								<span>{curDevice[0]?.battery || 0}%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else if (props.type === '1') {
		return (
			<div className={styles['charts_container']}>
				<div className={styles['panel']}>
					<img className={styles['logo']} src={require('./logo2.png')} />
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles['charts_container']}>
				<div className={styles['panel']}>
				</div>
			</div>
		)
	}

}

