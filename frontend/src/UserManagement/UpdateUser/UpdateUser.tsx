import axios from "axios"
import { Formik } from "formik"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { PutPostUsersData } from "../../utils/Interfaces"
import { getUser, updateUser } from "../UserManagment"

const UpdateUser = () => {

    const [data, setData] = useState<PutPostUsersData>()
    const { search } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const searchParams = new URLSearchParams(search)
        const cancelToken = axios.CancelToken.source()
        getUser(searchParams.get('id'), setData, cancelToken)

        return () => {
            cancelToken.cancel()
        }
    }, [search])

    if(data === undefined){
        return(
            <div>Loading</div>
        )
    }

    return(
        <Formik
            initialValues={{
                id: data.id,
                name: data.name,
                email: data.email,
                password: ''
            }}
            onSubmit={(values) => {
                updateUser(values, navigate)
            }}

        >
            {props => (
                <form onSubmit={props.handleSubmit}
                    className="block text-md bg-smoked text-white w-1/3 absolute left-1/3 top-1/3 p-3 border-4 border-navy"
                >
                    <div className="block">
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                            name="name"
                            id="name"
                            onChange={props.handleChange}
                            value={props.values.name}
                            className="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                        text-smoked border-2 border-navy p-1 m-2 focus:outline-none"
                        />
                    </div>
                    <div className="block">
                        <label htmlFor="email">Email:</label>
                        <input type="email"
                            name="email"
                            id="email"
                            onChange={props.handleChange}
                            value={props.values.email}
                            className="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                        text-smoked border-2 border-navy p-1 m-2 focus:outline-none"
                        />
                    </div>
                    <div className="block">
                        <label htmlFor="name">Password:</label>
                        <input type="text"
                            name="password"
                            id="password"
                            onChange={props.handleChange}
                            value={props.values.password}
                            className="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                        text-smoked border-2 border-navy p-1 m-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex w-full">
                        <button type="submit" className="bg-white border-2 border-navy text-smoked p-1 m-2 justify-end">Submit</button>
                    </div>
                </form>
            )}

        </Formik>   
    )
}

export default UpdateUser