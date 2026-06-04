import { useState } from 'react';
import './BookTagPanel.css';

const BookTagPanel = () => {
  // Chuyển danh sách tag vào state để có thể cập nhật
  const [tags, setTags] = useState([
    'Architecture', 'Backend', 'Microservices', 
    'Node.js', 'PostgreSQL', 'Algorithm'
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [newTag, setNewTag] = useState('');

  // 1. Logic Lọc tag
  const filteredTags = tags.filter(tag => 
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Logic Xóa tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // 3. Logic Thêm tag mới
  const handleAddTag = (e) => {
    e.preventDefault(); // Ngăn form reload lại trang
    const trimmedTag = newTag.trim();
    
    // Chỉ thêm nếu tag không rỗng và chưa tồn tại trong danh sách
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setNewTag(''); // Xóa text trong input sau khi thêm thành công
    }
  };

  return (
    <div className="tag-panel-container">
      
      {/* Thanh Searchbar */}
      <div className="search-wrapper">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Tìm kiếm tag..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Hộp chữ nhật chứa Tags */}
      <div className="tag-box">
        {filteredTags.length > 0 ? (
          filteredTags.map((tag, index) => (
            <span key={index} className="tag-item">
              #{tag}
              {/* Nút Xóa */}
              <button 
                className="btn-remove-tag" 
                onClick={() => handleRemoveTag(tag)}
                title={`Xóa tag ${tag}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </span>
          ))
        ) : (
          <span className="no-tags-found">Không tìm thấy tag nào phù hợp.</span>
        )}
      </div>

      {/* Form Tạo Tag Mới */}
      <form className="create-tag-wrapper" onSubmit={handleAddTag}>
        <input 
          type="text" 
          className="create-tag-input"
          placeholder="Nhập tên tag mới..."
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <button type="submit" className="btn-create-tag">
          Thêm Tag
        </button>
      </form>

    </div>
  );
};

export default BookTagPanel;