import { post } from './axios'
import {getTodayAndTarget} from './../utils/date'
// import store from './../redux/store'
// import { useDispatch } from 'react-redux'
// const dispatch = useDispatch()
export default class Device{
    static getDetail(userName: string) {//获取列表及面板信息
        const data = {
            username: userName,
            page: "1",
            pageSize:"50"
        }
        return post('/device/getDeviceDetail.do',data)
    }
    static getHistoryData(id) { //获取图标数据
        const [start_date,end_date] = getTodayAndTarget(0)
        const data = {
            device_id:id,
            start_date,
            end_date,
            page:1,
            pageSize:500
        }
        console.log(data);
        return post('/device/getHistoryData.do', data).then((data: any) => {
            // console.log(data);
            
            return data.data.rows.map((item)=>{
                return {
                    pressure:item.pressure,
                    flow:item.flow,
                    record_time:item.record_time,
                    hour:new Date(item.record_time).getHours(),
                    minute:new Date(item.record_time).getMinutes()
                }
            })
        })
    }

    static updateInfo(id,name,manual_location) {
        const data = {
            device_id:id,
            device_name:name,
            location:manual_location,
        };
        return post('/device/updateDevice.do',data)
    }
    
}