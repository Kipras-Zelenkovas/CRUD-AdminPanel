import axios from "axios"

const getUsers = (setData: any) => {
    axios.get('https://adminpanel.ddev.site/api/user/')
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        }).catch((error) => {
            setData(error)
        })
}

const getUser = (id: number) => {
    let data = axios.get('https://adminpanel.ddev.site/api/user/' + id)
                    .then((res) => {
                        return res.data
                    }).catch((error) => {
                        return error.data
                    })

    return data
}

const createUser = (name: string, email: string, password: string) => {
    let data = axios.post('https://adminpanel.ddev.site/api/user', {
                        name: name,
                        email: email,
                        password: password
                    }).then((res) => {
                        return res.data
                    }).catch((error) => {
                        return error.data
                    })

    return data
}

const updateUser = (id: number, name: string, email: string, password: string) => {
    let data = axios.put('https://adminpanel.ddev.site/api/user/' + id, {
                        name: name,
                        email: email,
                        password: password
                    }).then((res) => {
                        return res.data
                    }).catch((error) => {
                        return error.data
                    })

    return data
}

const deleteUser = (id: number) => {
    let data = axios.delete('https://adminpanel.ddev.site/api/user/' + id)
                    .then((res) => {
                        return res.data
                    }).catch((error) => {
                        return error.data
                    })

    return data
}

export {getUsers, getUser, createUser, updateUser, deleteUser}