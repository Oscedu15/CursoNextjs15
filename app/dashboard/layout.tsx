import { FC, PropsWithChildren } from 'react'
import SideNav from '../components/SideNav'

//Layout lo usamos como una plantilla, para tener nuestro sidebar

const DashboardLayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    {/* Panel Izquierdo del Dashboard */}
    <aside className="w-full flex-none md:w-64 bg-slate-700">
      <SideNav />
    </aside>
     {/* Panel Derecho del Dashboard */}
    <div className="flex-grow p-6 md:p-12  md:overflow-y-auto">
     {children}
    </div>
  </div>
  )
}

export default DashboardLayout