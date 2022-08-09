import axios from "axios"
import { UsersChangeableData } from "../utils/Interfaces"

const getUsers = (setData: Function) => {
    axios.get('https://adminpanel.ddev.site/api/user/')
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((error) => {
            setData(error)
        })
}

const getUser = (id: number, setData: Function) => {
    axios.get('https://adminpanel.ddev.site/api/user/' + id)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((error) => {
            setData(error)
        })
}

const createUser = (users_data: UsersChangeableData) => {
    axios.post('https://adminpanel.ddev.site/api/user', {
            name: users_data.name,
            email: users_data.email,
            password: users_data.password
        }).then((res) => {
            return res.data
        }).catch((error) => {
            return error.data
        })
}

const updateUser = (id: number, users_data: UsersChangeableData) => {
    axios.put('https://adminpanel.ddev.site/api/user/' + id, {
            name: users_data.name,
            email: users_data.email,
            password: users_data.password
        }).then((res) => {
            return res.data
        }).catch((error) => {
            return error.data
        })

}

const deleteUser = (id: number) => {
    axios.delete('https://adminpanel.ddev.site/api/user/' + id)
        .then((res) => {
            return res.data
        }).catch((error) => {
            return error.data
        })
}

export {getUsers, getUser, createUser, updateUser, deleteUser}