import { UsersData } from "../../utils/Interfaces"

const TableBody = ({data}: any) => {
    return (
        <tbody className="bg-smoked">
            {data.map((item: UsersData, index: number) => {
                return(
                    <tr className="text-white">
                        <td className="p-2 border border-navy">{item.id}</td>
                        <td className="p-2 border border-navy">{item.name}</td>
                        <td className="p-2 border border-navy">{item.email}</td>
                    </tr>
                )
            })}
        </tbody>
        
    )
}

export default TableBody