import { useState } from "react"
import { Link } from "react-router-dom"
import { Routes } from "../../utils/Interfaces"

const NavigationBar = () => {

    const [hidden, setHidden] = useState(true)

    const links: Routes[] = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Users',
            link: '/users'
        }/*,
        {
            name: 'Users',
            link: '/users'
        },
        {
            name: 'Users',
            link: '/users'
        },{
            name: 'Users',
            link: '/users'
        },
        {
            name: 'Users',
            link: '/users'
        },{
            name: 'Users',
            link: '/users'
        }
        ,{
            name: 'Users',
            link: '/users'
        },{
            name: 'Users',
            link: '/users'
        }
        ,{
            name: 'Users',
            link: '/users'
        }*/
        
    ]

    return(
        <div>
            <div className="md:hidden rounded-lg px-3 py-3 pl-12 shadow-md text-lg text-slate-700 font-medium hover:bg-slate-300 hover:text-slate-900 hover: cursor-pointer" onClick={() => setHidden(!hidden)}>Navigation</div>
            <div className={`md:flex ${hidden ? 'hidden' : '' } p-4 shadow-md justify-center`}>
                {links.map((item, index) => {
                    return <Link to={item.link} key={index} className="md:shadow-none shadow-sm text-center block rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-300 hover:text-slate-900">{item.name}</Link>
                })}
            </div>
        </div>
    )

}

export default NavigationBar