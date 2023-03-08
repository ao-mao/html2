import React, { useState } from 'react'
import styles from './ServiceItem.module.scss'
import { AiOutlineEdit, AiOutlineWarning, AiFillCheckCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { selectDeviceActionCreator, giveDataActionCreator } from '../../redux/serviceList/serviceListActions'
import { message, Modal, Input, Radio } from 'antd'
import Device from './../../network/Device'
import config from './../../config/config'
import { timestampToTime } from "./../../utils/date.js"
import { MiddleNav } from './MiddleNav'
// import {giveDataActionCreator } from './../../redux/serviceList/serviceListActions'

interface ServiceProps {
    device_id: string,
    device_name: string,
    warn: 0 | 1
    qy_warn: 0 | 1
    kqyc_warn: 0 | 1
    ddl_warn: 0 | 1
    location: string,
    last_update_time: string,
    cover: number | string,
    send_data_interval: number | string, //发送间隔
    fetch_data_interval: number | string,    //采集间隔
    fetch_gps_flag: number | string        //1--获取GPS信息 0--不获取
}

const ServiceList: React.FC = ({ device_id: id, device_name: name, warn, location, last_update_time: date, cover, send_data_interval,
    fetch_data_interval, fetch_gps_flag, qy_warn, ddl_warn, kqyc_warn }: ServiceProps) => {
    const dispatch = useDispatch()
    const selectId = useSelector<any>(state => state.service.selectId)
    const [deviceName, setDeviceName] = useState(name || '');
    const [time1, setTime1] = useState(send_data_interval || 0)
    const [time2, setTime2] = useState(fetch_data_interval || 0)
    const [autoLocation, setAutoLocation] = useState(location || '')
    const [handLocation, setHandLocation] = useState(location || '')
    const [GPSLocation, setGPSLocation] = useState(location || '')

    const [isModalVisible, setIsModalVisible] = useState(false);
    const statusIcon = () => {
        if (qy_warn === 1 || ddl_warn === 1 || kqyc_warn === 1) {
            return (
                <div className={styles['warn_icon_container']}>
                    <AiOutlineWarning className={styles['warn_icon']}></AiOutlineWarning>
                    <span>报警</span>
                </div>
            )
        } else {
            return (
                <div className={styles['normal_icon_container']}>
                    <AiFillCheckCircle className={styles['normal_icon']}></AiFillCheckCircle>
                    <span>正常</span>
                </div>
            )
        }
    }

    const selectItem = (id: string) => {
        dispatch(selectDeviceActionCreator(id))

        // message.success('刷新成功')
    }
    const editDevice = () => {
        setIsModalVisible(true)
    }
    const handleOk = async () => {
        console.log(id, deviceName, handLocation);

        try {
            const data: any = await Device.updateInfo(id, deviceName, handLocation)
            if (data.message === 'OK') {
                dispatch(giveDataActionCreator())
                setIsModalVisible(false);
                message.success('修改成功')
            }
        } catch (error) {
            console.log(error);
            message.error('服务器异常')
        }
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onInputDeviceName = (e: any) => {
        setDeviceName(e.target.value)
    }
    const onInputTime1 = (e: any) => {
        setTime1(e.target.value)
    }
    const onInputTime2 = (e: any) => {
        setTime2(e.target.value)
    }
    const onInputhandLoc = (e: any) => {
        setHandLocation(e.target.value)
    }
    const onInputautoLoc = (e: any) => {
        setAutoLocation(e.target.value)
    }
    const onInputGPSLoc = (e: any) => {
        setGPSLocation(e.target.value)
    }
    const onSelectAuto = (e: any) => {
        console.log(e.target.checked);
        console.log(e.target.value);

    }
    return (
        <div>
            <div className={selectId === id ? `${styles['serviceItem_container']} ${styles['serviceItem_container--selected']}` : styles['serviceItem_container']} onClick={() => selectItem(id)}>
                <div className={styles['img_container']}>
                    <img src={config.deviceImage + cover} alt="" />
                </div>
                <div className={styles['info_container']}>

                    <span>{name}</span>
                    <div className={styles['status_container']}>
                        <span className={styles['status_title']}>设备状态：</span>
                        {statusIcon()}
                    </div>
                    <div className={styles['location_container']}>
                        <span className={styles['status_title']}>设备位置：</span>
                        <span>{location === '0' ? '暂无' : location}</span>
                    </div>
                </div>
                {/* <span>{date}</span>*/}
                <span>{timestampToTime(date)}</span>

                <AiOutlineEdit className={styles['edit_icon']} onClick={editDevice}></AiOutlineEdit>

            </div>
            <Modal title={`设备配置-${name}`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="确认"
                cancelText="取消" width={700}>
                <div style={{ display: 'flex', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'black', width: '130px', marginLeft: '60px' }} className={styles['fuck']}>设备名称</span>
                    <Input value={deviceName} style={{ height: '100%', width: '280px' }} placeholder='请输入' onChange={onInputDeviceName} className={styles['input_item']}></Input>
                </div>
                <div style={{ display: 'flex', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'black', width: '130px', marginLeft: '60px' }}>上报间隔(min)</span>
                    <Input value={time1} style={{ height: '100%', width: '280px' }} placeholder='请输入' onChange={onInputTime1} className={styles['input_item']}></Input>
                </div>
                <div style={{ display: 'flex', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'black', width: '130px', marginLeft: '60px' }}>采集间隔(min)</span>
                    <Input value={time2} style={{ height: '100%', width: '280px' }} placeholder='请输入' onChange={onInputTime2} className={styles['input_item']}></Input>
                </div>
                <div style={{ display: 'flex', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'black', width: '130px', marginLeft: '60px' }}>自动位置：</span>
                    <Input value={autoLocation} disabled={true} style={{ height: '100%', width: '280px' }} placeholder='请输入' onChange={onInputautoLoc} className={styles['input_item']}></Input>
                    {/* <Radio value={1} onChange={onSelectAuto}></Radio> */}
                </div>
                <div style={{ display: 'flex', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'black', width: '130px', marginLeft: '60px' }}>手动位置：</span>
                    <Input value={handLocation} style={{ height: '100%', width: '280px' }} placeholder='请输入' onChange={onInputhandLoc} className={styles['input_item']}></Input>
                    {/* <Radio value={2} onChange={onSelectAuto}></Radio> */}
                </div>
                <div style={{ display: 'flex', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'black', width: '130px', marginLeft: '60px' }}>GPS获取：</span>
                    <Input value={GPSLocation} disabled={fetch_gps_flag == 0} style={{ height: '100%', width: '280px' }} placeholder='请输入' onChange={onInputGPSLoc} className={styles['input_item']}></Input>
                    {/* <Radio value={3} onChange={onSelectAuto}></Radio> */}
                </div>
            </Modal>
        </div>
    )
}
export default ServiceList