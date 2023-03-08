import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'

import userInfo from '../views/users/userInfo'
import userList from '../views/users/userList'

Vue.use(Router);

export default new Router({
    mode:'history' ,
    routes:[
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/main',
            name:'main',
            component:Main,
            children:[
                {path:'/users/userList',component:userList},
                {path:'userList',component:userInfo}
            ]
        }
    ]
})

