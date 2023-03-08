import React,{useState} from 'react'
import styles from './Admin.module.scss'
import {Header} from './../../components'
import { Input, Button, Modal, message } from 'antd'
import User from './../../network/user'

export const Admin: React.FC = () => {
    const [account, setAccount] = useState('')
    const [passWord, setpassWord] = useState('')
    const [newPassWord, setnewPassWord] = useState('')
    const [newPassWord2, setnewPassWord2] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onInputAccount = (e:any) => {
        setAccount(e.target.value)
    }
    const onInputPassWord = (e:any) => {
        setpassWord(e.target.value)
    }
    const onInputNewPassWord = (e: any) => {
        setnewPassWord(e.target.value)
    }
    const onInputNewPassWord2 = (e:any) => {
        setnewPassWord2(e.target.value)
    }
    const confirmEdit = () => {
        setIsModalVisible(true);
        console.log(account);
        console.log(passWord);
        console.log(newPassWord);
        console.log(newPassWord2);
    }


    const handleOk = async() => {
        setIsModalVisible(false);
        if (!account.trim() || !passWord.trim() || !newPassWord.trim() || !newPassWord2.trim()) {
            message.warn('账号或密码不能为空!')
            return
        }
        if (newPassWord !== newPassWord2) {
            message.warn('两次密码不相同!')
            return
        }
        try {
            const data:any = await User.changePSW(account, passWord, newPassWord2)
            if (data?.message === 'OK') {
                message.success('修改成功')
                setAccount('')
                setnewPassWord('')
                setnewPassWord2('')
                setpassWord('')
                return
            }
        } catch (error) {
            message.error('修改失败')            
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className={styles['admin_container']}>
            <Header selectId='1'></Header>
            <div className={styles['card_container']}>
                <h1>修改密码</h1>
                <div className={styles['input_container']}>
                    <Input placeholder='请输入当前账号' className={styles['input_item']} onChange={onInputAccount}></Input>
                    <Input placeholder='请输入登录密码' className={styles['input_item']} onChange={onInputPassWord}></Input>
                    <Input placeholder='请设置新密码' className={styles['input_item']} onChange={onInputNewPassWord}></Input>
                    <Input placeholder='请再次输入新密码' className={styles['input_item']} onChange={onInputNewPassWord2}></Input>
                    <Button className={styles['btn_confirm']} type='primary' onClick={confirmEdit}>确认修改</Button>
                </div>
            </div>
            <Modal title="修改密码" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="确认"
                cancelText="取消">
                <p>确定要修改吗</p>
            </Modal>
        </div>
    )
}