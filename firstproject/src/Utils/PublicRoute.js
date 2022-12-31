import { useSelector } from "react-redux"
import { Navigate,Outlet } from "react-router-dom"



export const PublicRoute=({component})=>{
    const isAuth= useSelector((store) => store.profile.isAuth)
    if(isAuth){
        return <Navigate to='/'  replace/>
    }
    return component ? component: <Outlet/>
}
