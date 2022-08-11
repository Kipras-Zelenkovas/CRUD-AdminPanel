import { useEffect, useState } from "react"
import { UsersData } from "../../utils/Interfaces"
import { getUsers } from "../UserManagment"
import axios from "axios"

const UserManagementTable = () => {
    
    const [data, setData] = useState<UsersData[]>([])

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        getUsers(setData, cancelToken)

        return () => {
            cancelToken.cancel()
        }
    }, [])
    
    if(data.length === 0){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div>
            {data.map((item, index) => {
                return <div key={index}>{item.name}</div>
            })}
        </div>
    )
}

export default UserManagementTable