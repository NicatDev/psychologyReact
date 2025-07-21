import { Outlet } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

export default function PrivateRoute() {
    return <MainLayout> <Outlet /></MainLayout>

}
