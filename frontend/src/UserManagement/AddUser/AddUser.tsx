import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { createUser } from "../UserManagment"

const AddUser = () => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '', 
            password: '',
        },
        onSubmit: values => {
           createUser(values, navigate)
        }
    })

    return ( 
        <form onSubmit={formik.handleSubmit}
            className="block text-md bg-smoked text-white w-1/3 absolute left-1/3 top-1/3 p-3 border-4 border-navy"
        >
            <div className="block">
                <label htmlFor="name">Name:</label>
                <input type="text"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                text-smoked border-2 border-navy p-1 m-2 focus:outline-none"
                />
            </div>
            <div className="block">
                <label htmlFor="email">Email:</label>
                <input type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                text-smoked border-2 border-navy p-1 m-2 focus:outline-none"
                />
            </div>
            <div className="block">
                <label htmlFor="name">Password:</label>
                <input type="text"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                text-smoked border-2 border-navy p-1 m-2 focus:outline-none"
                />
            </div>
            <div className="flex w-full">
                <button type="submit" className="bg-white border-2 border-navy text-smoked p-1 m-2 justify-end">Submit</button>
            </div>
        </form>
    )
}

export default AddUser