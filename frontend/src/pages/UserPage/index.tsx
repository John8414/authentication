import { Navigate, Outlet } from "react-router-dom";

type UserPageProps = {}

const UserPage = ({ }: UserPageProps) => {
  const refreshToken = localStorage.getItem("token")
  if (refreshToken !== null) {
    const now = new Date().getTime()
    const auth = JSON.parse(refreshToken)
    if (auth.token && auth.expiry >= now) {
      return <Outlet />
    }
  }
  return <Navigate to="/login" />
}

export default UserPage