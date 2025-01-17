import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import './layout.css'

function Layout() {

return (
    <div className='layout'>
        <Header/>
        <Outlet/>
    </div>
)
}

export default Layout