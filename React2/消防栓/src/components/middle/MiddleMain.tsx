import React ,{useState} from 'react'
import styles from './MiddleMain.module.scss'
import ServiceItem from './ServiceItem';
import MapItem from '../Map/Map'
import { HiOutlineSearch } from 'react-icons/hi'
import Item from 'antd/lib/list/Item';

interface ProsType {
	deviceList: []
}

export const MiddleMain: React.FC<ProsType> = ({ deviceList }) => {

	// const serviceList: any = useSelector((state:any) => {
	//     return state.service
	// })
	// console.log(serviceList);
	const state = {
		'deviceList': deviceList
	  };

	const menuList = [
		{ id: 0, name: '列表模式' },
		{ id: 1, name: '地图模式' }
	]
	//模式ID,默认列表模式
	const [menuId, setMenuId] = useState(0)
	
	// 地图、列表切换
	const test = (menuId) => {
		if (menuId === 1) {
			return (
				<MapItem deviceList={deviceList}></MapItem>
			
			)
		} else if (menuId === 0) {
			return (
				<div className={styles['serviceList_container']}>
				{deviceList.map((item) => {
					return (
						<ServiceItem {...item}></ServiceItem>
					)
				})}
			</div>
			)
		}
	}
	// 更新id
	const menuListIcon = (id) => {
		setMenuId(id)
	}

	return (
		<div className={styles['main_container']}>
			<div className={styles['topBar_container']}>
				<div className={styles['selectBar_container']}>
					{menuList.map((item) => {
						return (<span key={item.id} className={`${styles['menu_item'] } ${+menuId===item.id?`${styles['target']}`:'null'}`}
						onClick={()=>menuListIcon(item.id)} >{item.name}</span>)
					})}
				</div>
				<div className={styles['input_container']}>
					<HiOutlineSearch className={styles['search_icon']} />
					<input type="text" placeholder='请输入关键词' />
				</div>
			</div>
			{test(menuId)}
		</div>
	)

}