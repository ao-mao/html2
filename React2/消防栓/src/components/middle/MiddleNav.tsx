import React,{useState,useEffect} from "react";
import styles from './MiddleNav.module.scss'
import {useSelector} from 'react-redux'
export const MiddleNav = (props) => {

    
    const deviceList = useSelector((state: any) => state.service.deviceList)
	const selectId = useSelector<any>(state => state.service.selectId)
	
    const [warnNum, setWarnNum] = useState(0)
	const [deviceName, setDeviceName] = useState(0)
    const initData = () => {
        let warnNum2 = 0
        deviceList.forEach((item) => {
            if (item.warn === 1) {
                warnNum2++
            }
        })
        setWarnNum(warnNum2)
    };
	
	function getName(selectId){
		deviceList.forEach((item) => {
			if(item.device_id === selectId){
				console.log('item.device_name',item.device_name)
				setDeviceName(item.device_name)
			}
		})
	}
	
	useEffect(() => {
		getName(selectId)
	},[selectId])
	
    useEffect(() => {
        initData()
    },[deviceList])
	
	
    return (
        <div className={styles['middlenav_container']}>
            <div className={styles['panel_container']}>
                <div className={styles['panel_title']}>
                    <span>{deviceList.length}</span>
                    <span>{deviceName}</span>
                    <span>{ warnNum}</span>
                </div>
                <div className={styles['panel_data']}>
                    <span>设备数量</span>
                    <span>当前设备</span>
                    <span>设备报警数量</span>
                </div>
            </div>
        </div>
    )
}