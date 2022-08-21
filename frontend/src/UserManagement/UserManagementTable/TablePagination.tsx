import { Link } from "react-router-dom"
import { PagingData } from "../../utils/Interfaces"

const TablePagination = ({current_page, last_page}: PagingData) => {
    return( 
        <div className="flex justify-end">
            <Link to={'/users?page=' + (current_page-1)} className={`${current_page-1 < 0 ? 'hidden' : ''} p-2 text-md m-1 bg-smoked text-white`}>Prev</Link>
            <Link to={'/users?page=' + (current_page+1)} className={`${current_page+1 > last_page ? 'hidden' : ''} p-2 text-md m-1 bg-smoked text-white`}>Next</Link>
        </div>
    )
}

export default TablePagination