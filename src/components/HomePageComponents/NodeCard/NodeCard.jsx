import './NodeCard.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ id, title}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/book/:BookId/:NoteId`);
  };

  return (
    <div className="CourseCard-container" onClick={handleCardClick}>
      <div>
        {/* Tiêu đề - Kế thừa class chinese-title từ index.css để có font Serif màu đỏ */}
        <h1 className="CourseCard-title chinese-title">
          {title}
        </h1>
        
        {/* Nét gạch trang trí */}
        <div className="CourseCard-divider"></div>
      </div>

      {/* Mũi tên điều hướng ở góc dưới */}
      <div className="CourseCard-action">
        <span>Đọc</span>
        <span className="CourseCard-arrow">→</span>
      </div>
    </div>
  );
};

export default CourseCard;