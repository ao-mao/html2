import React,{useState,useEffect} from 'react'
import styles from './PanelData.module.scss'
import store from './../../redux/store'
import {useSelector,useDispatch } from 'react-redux'
import {giveDataActionCreator} from './../../redux/serviceList/serviceListActions'
import { message } from 'antd'
interface DataListProps{
    id: number,
    name: string,
    content:string
}

export const PandlData: React.FC = () => {
    const dispatch = useDispatch()
    dispatch(giveDataActionCreator())
    const curDevice = useSelector<any>(state => state.service.selectDevice)
    // const data = useSelector<any>(state => state)
    // console.log(data);
    useEffect(() => {
        console.log('curDevice',curDevice);
    },[curDevice])
    // const [curDevice, setCurDevice] = useState<any>(useSelector<any>(state => state.service.selectDevice))
    console.error('curDevice',curDevice);
    let dataList = []
    if (dataList.length) {
        dataList = [
                    { id: 0, name: '倾斜',content:'否' },
                    { id: 1, name: '压力(Kpa)',content:curDevice[0].pressure },
                    { id: 2, name: '设备报警',content:curDevice[0].warn },
                    { id: 3, name: '振动',content:curDevice[0].warn },
                    { id: 4, name: '流量(升/分)',content:curDevice[0].flow },
                    { id: 5, name: '信号量',content:curDevice[0].dev_signal },
            ]
    }
    // const dataList:DataListProps[] = [
    //         { id: 0, name: '倾斜',content:'否' },
    //         { id: 1, name: '压力(Kpa)',content:curDevice[0].pressure },
    //         { id: 2, name: '设备报警',content:curDevice[0].warn },
    //         { id: 3, name: '振动',content:curDevice[0].warn },
    //         { id: 4, name: '流量(升/分)',content:curDevice[0].flow },
    //         { id: 5, name: '信号量',content:curDevice[0].dev_signal },
    // ]
    // console.log(curDevice);
    // const loadPanelData = () => {
    //     const service = store.getState().service
    //     const curDevice = service.selectDevice
    //     // const selectId = service.selectId
    //     // const targetDevice = service.deviceList.filter((item:any)=>item.device_id === selectId)
    //     console.log(curDevice);
    //     const dataList:DataListProps[] = [
    //             { id: 0, name: '倾斜',content:'否' },
    //             { id: 1, name: '压力(Kpa)',content:'25.14' },
    //             { id: 2, name: '设备报警',content:'7.56' },
    //             { id: 3, name: '振动',content:'2.06' },
    //             { id: 4, name: '流量(升/分)',content:'6.95' },
    //             { id: 5, name: '信号量',content:'7.56' },
    //     ]
        
    //     return {
    //         dataList
    //     }
    // }
    const setContent = (id, content) => {
        
        if (id === 2) {
            
            if (content == 1) {
                return (
                    <div className={styles['data_icon_container']}>
                        <span className={styles['data_icon_warn']}></span>
                        {/* <span className={`${styles['data_icon']} ${styles['data_icon_warn']}`}></span> */}
                    </div>
                )
            } else {
                return (
                    <div className={styles['data_icon_container']}>
                        <span>无</span>
                    </div>
                )
            }
            
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
         <div className={styles['data_container']}>
            {dataList.map((item, index) => {
                    return <div key={index} className={styles['data_item']}>
                        {setContent(item.id, item.content,)}
                        <h4>{item.name}</h4>
                    </div>
            })}
        </div> 
    )
}

