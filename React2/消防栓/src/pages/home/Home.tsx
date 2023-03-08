import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import styles from './Home.module.scss'
import { Charts, Middle, Header } from './../../components'
import {giveDataActionCreator} from '../../redux/serviceList/serviceListActions'
// import Device from './../../network/Device'
export const Home:React.FC = () => {
    const dispatch = useDispatch()
    // store.dispatch(serviceActionCreator())
    // giveDataActionCreator2()
    // console.log(1);
    
    dispatch(giveDataActionCreator())
    // giveDataActionCreator()
    useEffect(() => {
    // console.log(1);
    // dispatch(giveDataActionCreator())
        // let url = '/v1/get/time'
        // axios.get(url, {
        //     params: {
        //         book_date:'2022-04-22'
        //     }
        // }).then((res) => {
        //     console.log(res);
            
        // }).catch((err) => {
        //     console.log(err);
            
        // })
        
    },[])
    // const userName = sessionStorage.getItem('username')
    // const loadPanelData = () => {
    //     Device.getDetail(userName).then((res:any) => {
    //         console.log(res?.data?.rows);
    //     })
    // }
    return (
        <div className={styles.home_container}>
            <Header selectId='0'></Header>
            <div className={styles.main_container}>
                <div className={styles.left_1}><Charts type="1"></Charts></div>
                <div className={styles.left_2}><Charts type="2" title='水压历史峰图'></Charts></div>
                <div className={styles.left_3}><Charts type="3" title='饼状分析图'></Charts></div>
                <div className={styles.middel}><Middle></Middle></div>
                <div className={styles.right_1}><Charts type="4"></Charts></div>
                <div className={styles.right_2}><Charts type="5" title='水流量历史峰图'></Charts></div>
                <div className={styles.right_3}><Charts type="6"></Charts></div>
            </div>
        </div>
    )
}