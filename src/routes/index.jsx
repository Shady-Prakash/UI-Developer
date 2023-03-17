import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import DashboardBox from "../screens/Dashboard";
const index = () => {
  return (
    <Routes>
      <Route path="/dashboard/:id" element={<PublicRoutes/>}>
        <Route index element={<DashboardBox />} />
        <Route path="/dashboard/:id" element={<DashboardBox/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard/0" />} />
    </Routes>
  )
  
}

export default index