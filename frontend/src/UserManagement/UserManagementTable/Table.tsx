import { useEffect, useState } from "react"
import IData from "../../utils/Interfaces"
import { getUsers } from "../UserManagment"

const UserManagementTable = () => {
    
    const [data, setData] = useState<IData[]>()

    useEffect(() => {
        getUsers(setData)
    }, [])
    
    if(data === undefined){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div>
            {Object.values(data).map<any>((item: IData, index: number) => {
                return <div key={index}>{item.name}</div>
            })}
        </div>
    )
}

export default UserManagementTable