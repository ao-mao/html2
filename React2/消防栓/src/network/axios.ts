import axios from 'axios'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
axios.defaults.baseURL=''
axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    message.error('服务器异常')
    return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
    if (+response.data.state == 0) {
        message.warn(response.data.message)
    }
    return response
}, (error) => {
    message.error('服务器异常')
    return Promise.reject(error)
})

export const post = async (url: string, data?: Object) => {
    return new Promise((resolve, reject) => {
        const username = sessionStorage.getItem('username')
        const ticket = sessionStorage.getItem('ticket')
        console.log(username,ticket);
        axios({
            headers: {
                username,
                ticket
            },
            method: 'post',
            url,
            data
        }).then(res => {
            console.log(res.data.message);
            if (res.data.message === 'ticket error!') {
                const navigate = useNavigate()
                navigate('/')
                console.log('fuck');
                
            }
            resolve(res.data)
        }).catch(err => {
            console.log(err);
        })
    })
    
}