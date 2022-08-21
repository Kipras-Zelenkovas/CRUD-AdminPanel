import { useEffect, useState } from "react"
import { TableData } from "../../utils/Interfaces"
import { getUsers } from "../UserManagment"
import axios from "axios"
import TableHead from "./TableHead"
import TableBody from "./TableBody"
import TablePagination from "./TablePagination"
import { useLocation } from "react-router-dom"

const UserManagementTable = () => {
    
    const [data, setData] = useState<TableData>()
    const { search } = useLocation()

    useEffect(() => {
        const searchParams = new URLSearchParams(search)
        const cancelToken = axios.CancelToken.source()
        getUsers(setData, cancelToken, searchParams.get('page'))
        console.log()

        return () => {
            cancelToken.cancel()
        }
    }, [search])
    
    if(data === undefined){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div className="absolute w-2/4 left-1/4">
            <table className="m-5 w-full text-left border-navy border-4">
                <TableHead />
                <TableBody data={data.data} />
            </table>
            <TablePagination current_page={data.current_page} last_page={data.last_page} />
        </div>
    )
}

export default UserManagementTable