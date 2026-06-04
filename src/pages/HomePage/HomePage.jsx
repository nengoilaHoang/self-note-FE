import CourseCard from '../../components/HomePageComponents/NodeCard/NodeCard';
import './HomePage.css';
import { useEffect, useState } from 'react';
import { getAllCourses } from '../../services/course.service';
import BookTagPanel from '../../components/HomePageComponents/BookTagPanel/BookTagPanel';
import CreateNotePopUp from '../../components/HomePageComponents/CreateNotePopUp/CreateNotePopUp';

const HomePage = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreateNotePopupOpen, setIsCreateNotePopupOpen] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getAllCourses();
      setCoursesData(courses);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return !isCreateNotePopupOpen?(
    <div className="HomePage-container">
      {/* Lời chào / Tiêu đề trang */}
      <header className="HomePage-header">
        
        {/* Khung chứa Tiêu đề và Nút tạo Note */}
        <div className="header-top-row">
          <h1 className="HomePage-title chinese-title">Cấu trúc dữ liệu & giải thuật</h1>
          
          <button className="btn-create-note" onClick={() => setIsCreateNotePopupOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Tạo Note mới
          </button>
        </div>

        <BookTagPanel />
      </header>

      {/* Khu vực danh sách khóa học (Dạng Lưới) */}
      <div className="HomePage-grid">
        {coursesData.map((course) => (
          <CourseCard 
            key={course.id} // Thêm key để tránh warning của React
            id={course.id} 
            title={course.Name} 
          />
        ))}
      </div>
    </div>
  ):(<CreateNotePopUp
    isOpen={isCreateNotePopupOpen}
    onClose={() => setIsCreateNotePopupOpen(false)}
    />);
};

export default HomePage;