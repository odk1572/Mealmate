import { createContext } from "react"
import { BASE_API_URL } from "../../constant"

export const AdminContext = createContext(null)

const AdminContextProvider = (props) => {
    const url = BASE_API_URL

    const contextValue = {
        url
    }
    return (
        <AdminContext.Provider value={contextValue}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider