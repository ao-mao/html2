import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import store from './../store'
import Device from './../../network/Device'

//获取设备列表
export const giveDataActionCreator:any = () => async (dispatch, getState) => {
    try {
        let data = []
        const userName = sessionStorage.getItem('username')
        await Device.getDetail(userName).then((res: any) => {
            if (res?.data?.rows?.length) {
                 data = res?.data?.rows
            }
        })
        const state = store.getState()
        console.log(data);
        if (state.service.selectId === "") {
            dispatch(serviceAndSelectIdActionCreator(data))
            dispatch(firstLoadselectDevice([data[0]]))
        } else {
            dispatch(serviceActionCreator(data))
        }
        
        
    } catch (error) {
        console.log(error);
    }
} 

//刷新选择设备
export const selectDeviceActionCreator:any = (deviceId:string) => (dispatch, getState) => {
    const service = store.getState()?.service
    const deviceList = service.deviceList
    const selectDeviceList = deviceList.filter((item: any) => item.device_id === deviceId)
    const data = {
        deviceId,
        selectDeviceList
    }
    dispatch(selectItemCreator(data))   
    // var device_name = serviceActionCreator(data).payLoad.selectDeviceList[0].device_name
    
}

export const giveDataActionCreator2:any = () => {
    console.log(66);
    
    return async(dispatch) => {
        try {
            // let url = '/v1/get/time'
            // let { data} = await axios.get(url, {
            //     params: {
            //         book_date:'2022-04-22'
            //     }
            // })
            let data = {}
            console.log(data);
            data = [
                { id: 1, name: 'TJ2004-040', status: 0, location: '佛山市南海区仙溪村', date: '2022-4-22 08:34:45' },
                { id: 2, name: 'TJ2004-040',status:1,location:'佛山市南海区仙溪村',date:'2022-4-22 08:34:45'},
                { id: 3, name: 'TJ2004-040',status:0,location:'佛山市南海区仙溪村',date:'2022-4-22 08:34:45'},
                { id: 1, name: 'TJ2004-040', status: 1, location: '佛山市南海区仙溪村', date: '2022-4-22 08:34:45' },
                { id: 2, name: 'TJ2004-040',status:0,location:'佛山市南海区仙溪村',date:'2022-4-22 08:34:45'},
                { id: 3, name: 'TJ2004-040',status:0,location:'佛山市南海区仙溪村',date:'2022-4-22 08:34:45'},
            
            ]
            dispatch(serviceActionCreator(data))
        } catch (error) {
            dispatch(serviceActionCreator(6))
        }
    //     getTodos().then((res)=>{
    //         dispatch(serviceActionCreator(data))
    //     })
    }
};
export const firstLoadselectDevice = (data)=> {
    return {
        type: 'firstSelect',
        payLoad:data
    }
}
export const serviceActionCreator = (data:any) => {
    return {
        type: 'fetchService',
        payLoad:data
    }
}

export const serviceAndSelectIdActionCreator = (data: any) => {
    return {
        type: 'fetchServiceAndserviceId',
        payLoad:data
    }
}

export const selectItemCreator = (data:Object) => {
    return {
        type: 'selectItem',
        payLoad:data
    }
}