import React from 'react'
import { connect } from 'react-redux'
import styles from './PanelData.module.scss'
import store from './../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { giveDataActionCreator } from './../../redux/serviceList/serviceListActions'
interface DataListProps {
    id: number,
    name: string,
    content: string
}
const mapStateToProps = (state) => {
    return {
        deviceList: state.service.deviceList,
        selectDevice: state.service.selectDevice,
        selectId: state.service.selectId
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
interface State {
    curDevice: any,
    dataList: any
}
class PanelData extends React.Component<any, State> {

    constructor(props) {
        super(props)
        console.log(props, '====================');
        this.state = {
            // curDevice: [],
            // dataList:[]
            curDevice: props.selectDevice || [],
            dataList: [
                { id: 0, name: '倾斜', content: '否' },
                { id: 1, name: '压力(Kpa)', content: this.props.selectDevice[0]?.pressure || '' },
                { id: 2, name: '设备报警', content: this.props.selectDevice[0]?.warn || '' },
                { id: 3, name: '振动', content: this.props.selectDevice[0]?.warn || '' },
                { id: 4, name: '流量(升/分)', content: this.props.selectDevice[0]?.flow || '' },
                { id: 5, name: '信号量', content: this.props.selectDevice[0]?.dev_signal || '' },
            ]
        }
        // this.initData()
    }
    initData = () => {
        const curDevice = this.props.selectDevice
        if (this.state.curDevice.length) {

            const dataList2 = [
                { id: 0, name: '倾斜', content: '否' },
                { id: 1, name: '压力(Kpa)', content: curDevice[0].pressure },
                { id: 2, name: '设备报警', content: curDevice[0].warn },
                { id: 3, name: '振动', content: curDevice[0].warn },
                { id: 4, name: '流量(升/分)', content: curDevice[0].flow },
                { id: 5, name: '信号量', content: curDevice[0].dev_signal },
            ]
            this.setState({
                dataList: dataList2
            })
        }
        this.setState({
            curDevice: this.props.deviceList,
        })
    }
    componentDidMount(): void {
        this.initData()

    }

    render() {
        // this.initData()
        // // const curDevice = this.props.deviceList
        // console.log(this.props,'------------------');
        // // let dataList = []
        // console.log(curDevice,'-------------');
        // if (this.curDevice.length) {
        //     this.setState({})
        //     dataList = [
        //         { id: 0, name: '倾斜', content: '否' },
        //         { id: 1, name: '压力(Kpa)', content: curDevice[0].pressure },
        //         { id: 2, name: '设备报警', content: curDevice[0].warn },
        //         { id: 3, name: '振动', content: curDevice[0].warn },
        //         { id: 4, name: '流量(升/分)', content: curDevice[0].flow },
        //         { id: 5, name: '信号量', content: curDevice[0].dev_signal },
        //     ]
        // }
        // console.log(this.props,'----00000000000000000000000------');
        // console.log(store.getState().service);
        let dataList = []
        if (this.props.selectDevice.length) {
            dataList = [
                { id: 0, name: '倾斜', content: '否' },
                { id: 1, name: '压力(Kpa)', content: this.props.selectDevice[0]?.pressure },
                { id: 2, name: '设备报警', content: this.props.selectDevice[0]?.warn },
                { id: 3, name: '振动', content: this.props.selectDevice[0]?.warn },
                { id: 4, name: '流量(升/分)', content: this.props.selectDevice[0]?.flow },
                { id: 5, name: '信号量', content: this.props.selectDevice[0]?.dev_signal },
            ]
        }

        const setContent = (id, content) => {
            if (id === 2) {
                // if (content == 1) {
                //     return (
                //         <div className={styles['data_icon_container']}>
                //             <span className={styles['data_icon_warn']}></span>
                //             {/* <span className={`${styles['data_icon']} ${styles['data_icon_warn']}`}></span> */}
                //         </div>
                //     )

                let warns = this.props.selectDevice[0]
                if (warns.ddl_warn == 1 && warns.qy_warn == 1 && warns.kqyc_warn == 1) {
                    return (
                        <div className={styles['data_warns']}>
                            <p>开启异常</p>
                            <p>低电量</p>
                            <p>欠压</p>
                        </div>
                    )
                } else if (warns.ddl_warn == 0 && warns.qy_warn == 1 && warns.kqyc_warn == 1) {
                    return (
                        <div className={styles['data_warns']}>
                            <p>开启异常</p>
                            <p>欠压</p>
                        </div>
                    )
                } else if (warns.ddl_warn == 1 && warns.qy_warn == 0 && warns.kqyc_warn == 1) {
                    return (
                        <div className={styles['data_warns']}>
                            <p>开启异常</p>
                            <p>低电量</p>
                        </div>
                    )
                } else if (warns.ddl_warn == 1 && warns.qy_warn == 1 && warns.kqyc_warn == 0) {
                    return (
                        <div className={styles['data_warns']}>
                            <p>低电量</p>
                            <p>欠压</p>
                        </div>
                    )
                } else if (warns.qy_warn == 1 && warns.ddl_warn == 0 && warns.kqyc_warn == 0) {
                    return (
                        <span>欠压</span>
                    )
                } else if (warns.ddl_warn == 1 && warns.qy_warn == 0 && warns.kqyc_warn == 0) {
                    return (
                        <span>低电量</span>
                    )
                } else if (warns.kqyc_warn == 1 && warns.qy_warn == 0 && warns.ddl_warn == 0) {
                    return (
                        <span>开启异常</span>
                    )
                } else {
                    return (
                        <span>无</span>
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
                        {setContent(item.id, item.content)}
                        <h4>{item.name}</h4>
                    </div>
                })}
            </div>
        )
    }
}
export const PanelData2 = connect(mapStateToProps, mapDispatchProps)(PanelData)