import { post } from './axios'
// import md5 from './../utils/md5.min.js'
import md5 from 'js-md5'

export default class User{
    static login(userName: string, passWord: string) {
        const newPassword=md5(passWord+'jmsxhb925');
        return new Promise((resolve, reject) => {
            const data = {
                username:userName,
                password:newPassword
            }
            post('/login.do',data).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    static changePSW(username:string,password:string,newpassword:string) {
        return new Promise((resolve,reject) => {
            const data = {
                username,
                password:md5(password+'jmsxhb925'),
                newpassword:md5(newpassword+'jmsxhb925')
            }
            post('/user/changePassword.do', data).then(res => {
                console.log(res);
                resolve(res)
            }).catch(err => {
                console.log(err);
                reject(err)
            })
        })
    }
}