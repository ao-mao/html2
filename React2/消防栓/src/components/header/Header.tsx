import React,{useState} from 'react'
import styles from './Header.module.scss'
import { AiOutlineBarChart,AiOutlineUser } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { IoExitOutline } from 'react-icons/io5'
import { useNavigate} from 'react-router-dom'
interface HeaderProps{
    selectId:string
}
export const Header: React.FC<HeaderProps> = (props ) => {
    const {selectId} = props
    let navigate = useNavigate()
    // const [selectId,setSelectId] = useState<number>(0)
    const menuItem = [
        { id: 0, name: '数据分析' },
        { id: 1, name: '用户管理' }
    ]
    const menuItemIcon = (id) => {
        if (id === 0) {
            return (
                <AiOutlineBarChart></AiOutlineBarChart>
            )
        } else if (id === 1) {
            return (
                <FiUsers></FiUsers>
            )
        }
    }
    const navigateRoute = (id) => {

        if (id == 0) {
            navigate("/home")
        }else if (id == 1) {
            navigate("/admin")
        }
    }
    const toLogin = () => {
        navigate("/")
    }
    return(
        <div className={styles['Header_container']}>
            <div className={ styles['Header_left'] }>
            {menuItem.map((item) => {
                return (
                    // <div key={item.id} className={styles['header_items']} onClick={()=>navigateRoute(item.id)}>
                     <div key={item.id} className={`${styles['header_items'] } ${+selectId===item.id?`${styles['menu_selected']}`:'null'}`} onClick={()=>navigateRoute(item.id)}>
                        {menuItemIcon(item.id)}
                        {/* <i></i> */}
                        <span>{item.name}</span>    
                        {/* <i></i> */}
                        <IoIosArrowForward></IoIosArrowForward>
                    </div>
                )
            })}
            </div>
            <div className={styles['Header_right']}>
                <div className={styles['warn_icon']}><i></i></div>
                <div className={styles['user_info']}>
                    <AiOutlineUser></AiOutlineUser>
                    <span>admin</span>
                </div>
                {/* <div className={styles['exit_icon']}> */}
                    <IoExitOutline onClick={toLogin}></IoExitOutline>
                {/* </div> */}
            </div>
        </div>
    )
}