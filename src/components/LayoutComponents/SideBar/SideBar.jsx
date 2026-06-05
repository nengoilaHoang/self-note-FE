import { useState } from 'react';
import './SideBar.css';

// Dữ liệu mẫu (Đưa ra ngoài component để tránh re-create mỗi lần render)
const DUMMY_BOOKS = [
  { id: 1, title: "Cấu trúc dữ liệu & Giải thuật" },
  { id: 2, title: "Hệ thống phân tán" },
  { id: 3, title: "Tiếng Trung giao tiếp" }
];

// Component con: Book
const Book = ({ title, isActive, onClick, onView }) => {
  return (
    <div className={`book-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <span className="book-title" title={title}>{title}</span>
      <button 
        className="btn-view" 
        onClick={(e) => {
          e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài thẻ div .book-item
          onView();
        }} 
        title="Xem notebook"
      >
        <svg 
          width="18" height="18" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
    </div>
  );
};

// Component chính: Sidebar
const Sidebar = () => {
  // Đặt state mặc định là ID của cuốn sách đầu tiên (DUMMY_BOOKS[0].id)
  const [selectedBookId, setSelectedBookId] = useState(DUMMY_BOOKS[0]?.id);

  return (
    <aside className="sidebar">
      <button className="btn-create-book">
        <svg 
          width="18" height="18" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Tạo Book mới
      </button>

      <div className="book-list">
        {DUMMY_BOOKS.map(book => (
          <Book 
            key={book.id} 
            title={book.title} 
            isActive={book.id === selectedBookId}
            onClick={() => setSelectedBookId(book.id)}
            onView={() => console.log(`Đang xem: ${book.title}`)} 
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;