import { useState } from 'react';
import './CreateNotePopUp.css';

const CreateNotePopUp = ({ isOpen, onClose, onSubmit }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDesc, setNoteDesc] = useState('');

  // Nếu isOpen = false thì không render gì cả
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteTitle.trim()) {
      alert("Vui lòng nhập tiêu đề Note!");
      return;
    }
    
    // Gửi dữ liệu ra component cha (HomePage)
    onSubmit({ title: noteTitle, description: noteDesc });
    
    // Reset form
    setNoteTitle('');
    setNoteDesc('');
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      {/* Ngăn sự kiện click lan ra ngoài overlay, tránh việc click vào form bị đóng popup */}
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        
        <header className="popup-header">
          <h2 className="popup-title">Tạo Note mới</h2>
          <button className="btn-close-popup" onClick={onClose} title="Đóng">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="note-title">Tiêu đề Note <span style={{color: 'red'}}>*</span></label>
            <input 
              id="note-title"
              type="text" 
              className="form-input" 
              placeholder="VD: Định lý CAP trong Microservices..." 
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="note-desc">Mô tả ngắn (Tùy chọn)</label>
            <textarea 
              id="note-desc"
              className="form-input" 
              placeholder="Ghi chú nhanh về nội dung..."
              value={noteDesc}
              onChange={(e) => setNoteDesc(e.target.value)}
            />
          </div>

          <div className="popup-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Hủy
            </button>
            <button type="submit" className="btn-submit">
              Tạo Note
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CreateNotePopUp;