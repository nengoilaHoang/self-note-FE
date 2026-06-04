import { useState } from 'react';
import Sidebar from '../../components/LayoutComponents/SideBar/SideBar';
import MainHeader from '../../components/LayoutComponents/MainHeader/MainHeader';
import './MainLayout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  // State quản lý việc đóng/mở sidebar trên mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* Lớp phủ đen mờ: Nhấn vào đây để đóng sidebar trên mobile */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Vùng chứa Sidebar: Sẽ trượt vào/ra dựa trên state */}
      <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
        <Sidebar />
      </div>
      
      <div className="main-wrapper">
        {/* Nút Hamburger (Chỉ hiện trên Mobile) nằm ngay trên MainHeader */}
        <div className="mobile-toggle-bar">
          <button className="btn-hamburger" onClick={() => setIsSidebarOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <span className="mobile-title">Menu</span>
        </div>

        <MainHeader />
        
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;