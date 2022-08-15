import { useEffect, useState } from "react"
import { UsersData } from "../../utils/Interfaces"
import { getUsers } from "../UserManagment"
import axios from "axios"
import TableHead from "./TableHead"
import TableBody from "./TableBody"
import TablePagination from "./TablePagination"
import { useLocation } from "react-router-dom"

const UserManagementTable = () => {
    
    const [data, setData] = useState<UsersData[]>([])
    const { search } = useLocation()
    const searchparams = new URLSearchParams(search)


    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        getUsers(setData, cancelToken, searchparams.get('id'))

        return () => {
            cancelToken.cancel()
        }
    }, [searchparams.get('id')])
    
    if(data.length === 0){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div className="absolute w-2/4 left-1/4">
            <table className="m-5 w-full text-left border-navy border-4">
                <TableHead />
                <TableBody data={data} />
            </table>
            <TablePagination prev={data[0].id} next={data[data.length - 1].id} items={data.length}/>
        </div>
    )
}

export default UserManagementTable