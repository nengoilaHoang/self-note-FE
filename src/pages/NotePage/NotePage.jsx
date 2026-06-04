import { useState } from 'react';
import './NotePage.css';

const NotePage = ({ 
  title, 
  htmlContent, 
  onBack, 
  initialTags = [], 
  bookTags = [] // Nhận thêm prop danh sách toàn bộ tag của Book hiện tại
}) => {
  const [tags, setTags] = useState(initialTags);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Lọc ra những tag thuộc Book nhưng CHƯA ĐƯỢC THÊM vào Note này
  const availableTagsToAdd = bookTags.filter(tag => !tags.includes(tag));

  // Hủy tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // Chọn tag có sẵn từ Dropdown
  const handleSelectExistingTag = (selectedTag) => {
    setTags([...tags, selectedTag]);
    setIsDropdownOpen(false); // Đóng menu sau khi chọn xong
  };

  return (
    <div className="html-page-container">
      
      <header className="page-header">
        <button className="btn-back" onClick={onBack} title="Quay lại">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        
        <div className="note-header-info">
          <h1 className="page-title">{title}</h1>
          
          <div className="note-tags-wrapper">
            {/* Hiển thị các tag ĐÃ THÊM vào Note */}
            {tags.map((tag, index) => (
              <span key={index} className="note-tag">
                #{tag}
                <button 
                  className="btn-remove-note-tag" 
                  onClick={() => handleRemoveTag(tag)}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </span>
            ))}

            {/* Vùng Dropdown chọn tag có sẵn */}
            <div className="add-tag-wrapper">
              <button 
                className="btn-add-tag" 
                onClick={() => setIsDropdownOpen(true)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Thêm tag
              </button>

              {/* Menu thả xuống hiển thị khi isDropdownOpen = true */}
              {isDropdownOpen && (
                <>
                  {/* Lớp phủ bắt sự kiện click ra ngoài để đóng menu */}
                  <div 
                    className="dropdown-overlay" 
                    onClick={() => setIsDropdownOpen(false)} 
                  />
                  
                  <div className="tag-dropdown">
                    {availableTagsToAdd.length > 0 ? (
                      availableTagsToAdd.map((tag, index) => (
                        <button 
                          key={index} 
                          className="tag-dropdown-item"
                          onClick={() => handleSelectExistingTag(tag)}
                        >
                          #{tag}
                        </button>
                      ))
                    ) : (
                      <span className="tag-dropdown-empty">Đã thêm hết tag có sẵn</span>
                    )}
                  </div>
                </>
              )}
            </div>
            
          </div>
        </div>
      </header>

      <div 
        className="page-content" 
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />

    </div>
  );
};

export default NotePage;