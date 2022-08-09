import { useEffect, useState } from "react"
import { UsersData } from "../../utils/Interfaces"
import { getUsers } from "../UserManagment"

const UserManagementTable = () => {
    
    const [data, setData] = useState<UsersData[]>([])

    useEffect(() => {
        getUsers(setData)
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