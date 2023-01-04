import { useSelector } from "react-redux"
import { Navigate,Outlet } from "react-router-dom"



export const PrivateRoute=({component})=>{
    const isAuth= useSelector((store) => store.profile.isAuth)
    if(!isAuth){
        return <Navigate to='/signin'  replace/>
    }
    return component ? component: <Outlet/>
}
