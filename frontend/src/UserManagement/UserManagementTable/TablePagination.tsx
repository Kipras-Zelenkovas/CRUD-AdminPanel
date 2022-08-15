import { Link } from "react-router-dom"

const TablePagination = ({prev, next, items}: any) => {
    return( 
        <div className="flex justify-end">
            <Link to={"/users?id=" + (prev-10)} className={`${prev-1 <= 0 ? 'hidden' : ''} p-2 text-md m-1 bg-smoked text-white`}>Prev</Link>
            <Link to={"/users?id=" + (next+1)} className={`${items < 10 ? 'hidden' : ''} p-2 text-md m-1 bg-smoked text-white`}>Next</Link>
        </div>
    )
}

export default TablePagination