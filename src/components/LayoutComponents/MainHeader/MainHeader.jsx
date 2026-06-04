import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="academic-title">
          viethoang's <span className="highlight">note-book</span>
        </h1>
        <span className="subtitle">Rườm rà tí nhưng đọc ở đâu cũng được</span>
      </div>
    </header>
  );
};

export default MainHeader;