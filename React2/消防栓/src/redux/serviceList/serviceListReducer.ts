

const defaultValue = {
    deviceList: [],
    selectDevice:[],
    selectId: "",
}

const serviceReducer = (state = defaultValue, action: any) => {
    console.log(action.type);
    switch (action.type) {
        case 'fetchService':
            return { ...state, deviceList: action.payLoad }
        case 'selectItem':
            console.log(action.payLoad,'----------------');
            return { ...state, selectId: action.payLoad.deviceId,selectDevice:action.payLoad.selectDeviceList }
        case 'fetchServiceAndserviceId':
            return { ...state, deviceList: action.payLoad, selectId: action.payLoad[0].device_id || "" }
        case 'firstSelect':
            // console.log(action.payLoad,'??????????????????????????');
            return {...state,selectDevice:action.payLoad}
        default:
            return state
    }
}
export default serviceReducer