import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

function PublicRoute() {
  const { authenticated } = useAuth()
  
  return (
    !!authenticated ? <Navigate to={'/user'} /> : <Outlet />
  )
}

export default PublicRoute