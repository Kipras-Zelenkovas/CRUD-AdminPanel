import { Link } from "react-router-dom"
import { PaginationData } from "../../utils/Interfaces"

const TablePagination = ({page, last}: PaginationData) => {
    return( 
        <div className="flex justify-end">
            <Link to={'/users?page=' + (page-1)} className={`${page-1 < 0 ? 'hidden' : ''} p-2 text-md m-1 bg-smoked text-white`}>Prev</Link>
            <Link to={'/users?page=' + (page+1)} className={`${page+1 > last ? 'hidden' : ''} p-2 text-md m-1 bg-smoked text-white`}>Next</Link>
        </div>
    )
}

export default TablePagination