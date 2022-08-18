import axios, { CancelTokenSource } from "axios"
import { NavigateFunction } from "react-router-dom"
import { PutPostUsersData } from "../utils/Interfaces"

const url = 'https://adminpanel.ddev.site/api/user'

const getUsers = (setData: Function, cancelToken: CancelTokenSource, page: string | null) => {
    axios.get(url + 's?page=' + page, {cancelToken: cancelToken.token})
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((err) => {
            if(axios.isCancel(err)){
                console.log('Canceled')
            }else{
                console.log(err)
            }   
        })
}

const getUser = (id: string | null, setData: Function, cancelToken: CancelTokenSource) => {
    axios.get('https://adminpanel.ddev.site/api/user/' + id, {cancelToken: cancelToken.token})
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((err) => {
            if(axios.isCancel(err)){
                console.log('Canceled')
            }else{
                console.log(err)
            }
        })
}

const createUser = (users_data: PutPostUsersData, navigate: NavigateFunction) => {
    axios.post(url, {
            name: users_data.name,
            email: users_data.email,
            password: users_data.password
        }).then((res) => {
            console.log(res.data)
            /**
             * Temporary navigation after creating user
             */
            navigate('/users?page=1')
        }).catch((err) => {
            console.log(err)
        })
}

const updateUser = (users_data: PutPostUsersData, navigate: NavigateFunction) => {
    axios.put(url + '/' + users_data.id, {
            name: users_data.name,
            email: users_data.email,
            password: users_data.password
        }).then((res) => {
            console.log(res.data)
            /**
             * Temporary navigation after updating user
             */
            navigate('/users?page=1')
        }).catch((err) => {
            if(axios.isCancel(err)){
                console.log('Canceled')
            }else{
                console.log(err)
            }
        })

}

const deleteUser = (id: number) => {
    axios.delete(url + '/' + id)
        .then((res) => {
            return res.data
        }).catch((err) => {
            if(axios.isCancel(err)){
                console.log('Canceled')
            }else{
                console.log(err)
            }
        })
}

export {getUsers, getUser, createUser, updateUser, deleteUser}