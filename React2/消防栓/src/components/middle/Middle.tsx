import React from "react";
import styles from './Middle.module.scss'
import { MiddleNav } from "./MiddleNav";
import { MiddleMain } from './MiddleMain'
import Device from './../../network/Device'
import { connect } from 'react-redux'

type PropsType = any
interface StateProps{
    deviceList:[]
}
const mapStateToProps = (state) => {
    return {
        deviceList:state.service.deviceList
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        // changeLanguage : (code : 'zh' | 'en') => {
        //     const action = changeLanguageActionCreator(code);
        //     dispatch(action);
        // },

    }
}
class Middle1 extends React.Component<PropsType,StateProps>{
// export class Middle extends React.Component<PropsType,StateProps>{
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         deviceList:[]
    //     }
    // }
    componentDidMount() {
        
        this.loadServiceDetail()
        
    }
    loadServiceDetail = () => {
        console.log('middle',this.props);
        
        // const userName = sessionStorage.getItem('username')
        // this.setState({
        //     // deviceList:
        //     // deviceList:useSelector((state:any)=>state.deviceList)
        // })
        // Device.getDetail(userName).then((res: any) => {
        //     console.log(res);
        //     if (res.data.rows.length) {
        //         this.setState({
        //             deviceList:res.data.rows
        //         })
        //     }
        // })
    }
    render() {
        const { deviceList } = this.props
        console.log(deviceList);
        return (
            <div className={styles['middle_container']}>
                <MiddleNav></MiddleNav>
                <MiddleMain deviceList={deviceList}></MiddleMain>
                {/* <MiddleMain deviceList={this.pro}></MiddleMain> */}
            </div>
        )
    }
}

export const Middle = connect(mapStateToProps,mapDispatchProps)(Middle1)