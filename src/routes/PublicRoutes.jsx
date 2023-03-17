import { Outlet } from 'react-router-dom'
import DashboardLayout from '../layouts/Dashboard'

const PublicRoutes = () => {
  return(
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}

export default PublicRoutes
