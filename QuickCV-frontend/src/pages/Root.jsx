
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar.jsx'
export const Root = () => {
  return (
    <div>
         <Navbar />
        <Outlet />
    </div>
  )
}
