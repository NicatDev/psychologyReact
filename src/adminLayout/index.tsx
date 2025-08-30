import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3, HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";
import { Breadcrumb } from "antd";
import UserImg from "../shared/media/imgs/userImg.jpg";
import Logo from "../shared/media/imgs/logo.png";

interface AdminUser {
  name: string;
}

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const storedUser = sessionStorage.getItem("adminUser");
  const adminUser: AdminUser = storedUser
    ? JSON.parse(storedUser)
    : { name: "Admin" };

  const location = useLocation();

  const breadcrumbNameMap: Record<string, string> = {
    "/admin/dashboard": "İdarəetmə paneli",
    "/admin/users": "İstifadəçilər",
    "/admin/orders": "Sifarişlər",
  };

  const currentPath = location.pathname;
  const isDashboard = currentPath === "/admin/dashboard";

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 transform transition-transform duration-200 ease-in-out bg-white border-r h-full
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:inset-0 
        ${isCollapsed ? "w-20" : "w-64"}`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          {!isCollapsed && (
            <img src={Logo} width={60} className="mx-auto" alt="Logo" />
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isCollapsed ? (
              <HiChevronRight size={20} />
            ) : (
              <HiChevronLeft size={20} />
            )}
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700 lg:hidden"
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            <AiFillDashboard size={20} />
            {!isCollapsed && <span>İdarəetmə paneli</span>}
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            <FaUsers size={18} />
            {!isCollapsed && <span>İstifadəçilər</span>}
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-300 font-semibold" : ""
              }`
            }
          >
            <FiShoppingCart size={18} />
            {!isCollapsed && <span>Sifarişlər</span>}
          </NavLink>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-0">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-700"
          >
            {sidebarOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>

          {/* Breadcrumb */}
          <Breadcrumb>
            <Breadcrumb.Item key="admin-panel">İdarəetmə paneli</Breadcrumb.Item>
            {!isDashboard && (
              <Breadcrumb.Item key={currentPath}>
                {breadcrumbNameMap[currentPath] || "Səhifə"}
              </Breadcrumb.Item>
            )}
          </Breadcrumb>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{adminUser.name}</span>
            <img src={UserImg} alt="avatar" className="w-8 h-8 rounded-full" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
