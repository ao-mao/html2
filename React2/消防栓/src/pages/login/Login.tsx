import React,{useState} from 'react'
import styles from './Login.module.scss'
import { Input, Button,message } from 'antd'
import { useNavigate } from 'react-router-dom'
import User from './../../network/user'

interface LoginProps{
    state?: number,
    message?: string,
    data?:any
}
export const Login: React.FC = () => {
    const [userName, setUserName] = useState<string>('')
    const [passWord, serPassword] = useState<string>('')
    const onInputUserName = (e: any) => {
        setUserName(e.target.value)
    }
    const onInputPassWord = (e:any) => {
        serPassword(e.target.value)
    }
    let navigate = useNavigate()
    const toHome = async() => {
        if (!userName.trim() || !passWord.trim()) {
            message.warn('账号或密码不能为空')
        }
        console.log(userName.trim(), passWord.trim());
        try {
            const data:LoginProps = await User.login(userName, passWord)
            console.log(data);
            if (data.state === 1) {
                message.success('登陆成功')
                sessionStorage.setItem('username', data.data.username)
                sessionStorage.setItem('ticket', data.data.ticket)
                navigate('/home')
            }else{message.error('登陆失败')}
        } catch (error) {
            message.error('登陆失败')
        }
    }
    return (
        <div className={styles['login_container']}>
                <div className={styles['login_main']}>
                    <div className={styles['logo']}></div>
                    <div className={styles['input_container']}>
                        <span>用户登录</span>
                        <Input placeholder='请输入登录账号' className={styles['input1']}  onChange={onInputUserName}></Input>
                        <Input type='password' placeholder='请输入密码' className={styles['input1']} onChange={onInputPassWord} ></Input>
                        <Button type='primary' className={styles['btn']} onClick={toHome}>登录</Button>
                    </div>
                </div>
                <div className={styles['login_footer']}>
                    <span>Copyright © 2022 Copyright. yq.com.cn. All Rights Reserved. 永泉阀门 版权所有　粤ICP备17110555号</span>
                </div>
            </div>
    )
}
// export class Login extends React.Component<any,any>{
//     // eslint-disable-next-line @typescript-eslint/no-useless-constructor
//     constructor(props:any) {
//         super(props)
//     }
//     render() {
//         let router1 = useNavigate()

//         return (
//             <div className={styles['login_container']}>
//                 <div className={styles['login_main']}>
//                     <div className={styles['logo']}></div>
//                     <div className={styles['input_container']}>
//                         <span>用户登录</span>
//                         <Input placeholder='请输入登录账号' className={styles['input1']}></Input>
//                         <Input placeholder='请输入密码' className={styles['input1']}></Input>
//                         <Button type='primary' className={styles['btn']}>登录</Button>
//                     </div>
//                 </div>
//                 <div className={styles['login_footer']}>
//                     <span>Copyright © 2022 Copyright. yq.com.cn. All Rights Reserved. 永泉阀门 版权所有　粤ICP备17110555号</span>
//                 </div>
//             </div>
//         )
//     }
// }