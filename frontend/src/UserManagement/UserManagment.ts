import axios, { CancelTokenSource } from "axios"
import { UsersChangeableData } from "../utils/Interfaces"

const getUsers = (setData: Function, cancelToken: CancelTokenSource, id: string | undefined) => {
    axios.get('https://adminpanel.ddev.site/api/users/' + id, {cancelToken: cancelToken.token})
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

const getUser = (id: number, setData: Function, cancelToken: CancelTokenSource) => {
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

const createUser = (users_data: UsersChangeableData, cancelToken: CancelTokenSource) => {
    axios.post('https://adminpanel.ddev.site/api/user', {
            name: users_data.name,
            email: users_data.email,
            password: users_data.password
        }, {cancelToken: cancelToken.token}).then((res) => {
            return res.data
        }).catch((err) => {
            if(axios.isCancel(err)){
                console.log('Canceled')
            }else{
                console.log(err)
            }
        })
}

const updateUser = (id: number, users_data: UsersChangeableData, cancelToken: CancelTokenSource) => {
    axios.put('https://adminpanel.ddev.site/api/user/' + id, {
            name: users_data.name,
            email: users_data.email,
            password: users_data.password
        }, {cancelToken: cancelToken.token}).then((res) => {
            return res.data
        }).catch((err) => {
            if(axios.isCancel(err)){
                console.log('Canceled')
            }else{
                console.log(err)
            }
        })

}

const deleteUser = (id: number, cancelToken: CancelTokenSource) => {
    axios.delete('https://adminpanel.ddev.site/api/user/' + id, {cancelToken: cancelToken.token})
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