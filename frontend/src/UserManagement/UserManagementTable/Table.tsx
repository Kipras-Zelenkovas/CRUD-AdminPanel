import { useEffect, useState } from "react"
import { UsersData } from "../../utils/Interfaces"
import { getUsers } from "../UserManagment"
import axios from "axios"
import TableHead from "./TableHead"
import TableBody from "./TableBody"

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
        <div className="absolute w-2/4 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <table className="m-5 w-full text-left border-navy border-4">
                <TableHead />
                <TableBody data={data} />
            </table>
        </div>
    )
}

export default UserManagementTable